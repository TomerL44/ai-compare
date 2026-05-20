import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import cron from 'node-cron';
import { fetchAndUpsertModels } from './apiFetcher';
import { TOOLS, TOOL_VERSIONS } from '../src/data/agents';


const app = express();

// SECURITY: Restrict CORS to only your frontend origin(s)
// In production, set CORS_ORIGIN env variable to your deployed frontend URL
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173').split(',');
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl) in dev only
    if (!origin && process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    if (origin && allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));
app.use(express.json());

// Note: This is a mock representation of the backend logic.
// In a real application, you would connect to a MySQL database using `mysql2` or an ORM like `Prisma` / `Drizzle`.
// We will use an in-memory array to simulate the database aggregation described in schema.sql.

interface Vote {
  id: number;
  userId: string;
  agentId: string;
  score: number; // 5=S, 4=A, 3=B, 2=C, 1=D
  timestamp: Date;
}

// In-memory mock database for votes
const votesDb: Vote[] = [];

// SECURITY: Rate limit vote submissions to prevent abuse
const voteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Max 30 votes per IP per window
  message: { error: 'Too many votes submitted. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// API ENDPOINT: Submit a vote
// Requirement: Allows multiple votes per user per agent. No unique constraint.
app.post('/api/votes', voteLimiter, (req: Request, res: Response) => {
  const { userId, agentId, score } = req.body;

  if (!userId || !agentId || !score || score < 1 || score > 5) {
    return res.status(400).json({ error: 'Invalid vote data' });
  }

  const newVote: Vote = {
    id: votesDb.length + 1,
    userId,
    agentId,
    score,
    timestamp: new Date()
  };

  votesDb.push(newVote);
  
  // Real SQL equivalent:
  // INSERT INTO votes (user_id, agent_id, score) VALUES (?, ?, ?)

  res.status(201).json({ message: 'Vote recorded successfully', vote: newVote });
});

// API ENDPOINT: Get all tools
app.get('/api/tools', (req: Request, res: Response) => {
  res.json(TOOLS);
});

// API ENDPOINT: Get all tool versions
app.get('/api/tool_versions', (req: Request, res: Response) => {
  res.json(TOOL_VERSIONS);
});

// API ENDPOINT: Get aggregated tier list rankings
app.get('/api/rankings/:categoryId', (req: Request, res: Response) => {
  const { categoryId } = req.params;

  // Real SQL equivalent (using the view defined in schema.sql):
  // SELECT * FROM agent_rankings WHERE category_id = ? ORDER BY average_score DESC;
  
  // Mock Aggregation equivalent to the SQL VIEW logic:
  const categoryAgents = ['cursor', 'copilot', 'codeium', 'autogpt', 'agentgpt', 'babyagi', 'jasper', 'copyai', 'writesonic', 'sora', 'runway', 'pika']; // Simplified IDs

  const rankings = categoryAgents.map(agentId => {
    // 1. Get all historical votes for this agent
    const agentVotes = votesDb.filter(v => v.agentId === agentId);
    
    // 2. Calculate aggregation
    const totalVotes = agentVotes.length;
    const averageScore = totalVotes > 0 
      ? agentVotes.reduce((acc, curr) => acc + curr.score, 0) / totalVotes 
      : 0;

    // 3. Assign Tier
    let tier = 'Unranked';
    if (averageScore >= 4.5) tier = 'S';
    else if (averageScore >= 3.5) tier = 'A';
    else if (averageScore >= 2.5) tier = 'B';
    else if (averageScore >= 1.5) tier = 'C';
    else if (averageScore > 0) tier = 'D';

    return {
      agentId,
      totalVotes,
      averageScore,
      tier
    };
  });

  // Sort by highest score first
  rankings.sort((a, b) => b.averageScore - a.averageScore);

  res.json(rankings);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Mock Backend running on port ${PORT}`);

  // Schedule the API fetcher to run weekly on Sunday at midnight (0 0 * * 0)
  cron.schedule('0 0 * * 0', () => {
    console.log('[Cron] Triggering scheduled API fetcher job...');
    fetchAndUpsertModels();
  });
});
