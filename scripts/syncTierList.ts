/**
 * ============================================================
 * AUTO TIER LIST SYNC — Fetches from Arena AI Leaderboard API
 * ============================================================
 * 
 * This script fetches the latest AI model rankings from the 
 * Arena AI (formerly LMSys Chatbot Arena) leaderboard and maps 
 * them to tier rankings (A-D) based on ELO score percentiles.
 * 
 * Data Source: https://api.wulong.dev/arena-ai-leaderboards/v1/leaderboard
 * (Free, no auth required — community-maintained mirror of Arena AI)
 * 
 * HOW TO REMOVE THIS FEATURE:
 *   1. Delete this file (scripts/syncTierList.ts)
 *   2. Delete src/data/arenaRankings.json
 *   3. In src/components/tierlist/TierList.tsx, remove the 
 *      "useArenaRankings" import and related code (search for 
 *      "ARENA_TIER_LIST_FEATURE" comments)
 *   4. Remove the "sync-tierlist" script from package.json
 * ============================================================
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Types ──────────────────────────────────────────────────

interface ArenaModel {
  rank: number;
  model: string;
  vendor: string;
  license: string;
  score: number;   // ELO score
  ci: number;       // confidence interval
  votes: number;
}

interface ArenaResponse {
  meta: {
    leaderboard: string;
    source_url: string;
    fetched_at: string;
    last_updated: string | null;
    model_count: number;
  };
  models: ArenaModel[];
}

interface TierEntry {
  model: string;       // Arena model slug (e.g. "claude-opus-4-6")
  vendor: string;      // e.g. "Anthropic"
  score: number;       // ELO score  
  rank: number;        // Global rank (1-based)
  tier: 'A' | 'B' | 'C' | 'D';  // Mapped tier
  votes: number;       // Total votes
}

interface ArenaRankingsFile {
  lastUpdated: string;        // ISO timestamp of when this file was generated
  source: string;             // URL of the data source
  leaderboard: string;        // Which leaderboard was fetched
  totalModels: number;        // How many models in the leaderboard
  tiers: {
    A: TierEntry[];
    B: TierEntry[];
    C: TierEntry[];
    D: TierEntry[];
  };
  allModels: TierEntry[];     // Flat list for easy lookup
}

// ── Leaderboard endpoints to fetch ────────────────────────

const LEADERBOARDS = [
  { name: 'text', label: 'Overall Text' },
  // You can add more in the future:
  // { name: 'code', label: 'Coding' },
  // { name: 'vision', label: 'Vision' },
];

const API_BASE = 'https://api.wulong.dev/arena-ai-leaderboards/v1/leaderboard';

// ── Tier Assignment Logic ──────────────────────────────────
// Uses percentile-based assignment:
//   Top 25%  → Tier A (the best)
//   25-50%   → Tier B
//   50-75%   → Tier C
//   Bottom 25% → Tier D

function assignTier(rank: number, totalModels: number): 'A' | 'B' | 'C' | 'D' {
  const percentile = rank / totalModels;
  
  if (percentile <= 0.25) return 'A';
  if (percentile <= 0.50) return 'B';
  if (percentile <= 0.75) return 'C';
  return 'D';
}

// ── Main sync function ────────────────────────────────────

async function syncTierList() {
  console.log('🏆 Fetching Arena AI Leaderboard data...');
  console.log(`   Source: ${API_BASE}`);
  console.log('');

  const allResults: Record<string, ArenaRankingsFile> = {};

  for (const lb of LEADERBOARDS) {
    const url = `${API_BASE}?name=${lb.name}`;
    console.log(`📊 Fetching "${lb.label}" leaderboard...`);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`   ❌ Failed to fetch ${lb.name}: ${res.status} ${res.statusText}`);
        continue;
      }

      const data = (await res.json()) as ArenaResponse;
      const models = data.models;

      if (!models || models.length === 0) {
        console.warn(`   ⚠️ No models returned for "${lb.name}".`);
        continue;
      }

      console.log(`   ✅ Got ${models.length} models`);

      // Map to tier entries
      const totalModels = models.length;
      const tierEntries: TierEntry[] = models.map(m => ({
        model: m.model,
        vendor: m.vendor,
        score: m.score,
        rank: m.rank,
        tier: assignTier(m.rank, totalModels),
        votes: m.votes,
      }));

      // Group by tier
      const tiers: ArenaRankingsFile['tiers'] = { A: [], B: [], C: [], D: [] };
      for (const entry of tierEntries) {
        tiers[entry.tier].push(entry);
      }

      const result: ArenaRankingsFile = {
        lastUpdated: new Date().toISOString(),
        source: data.meta.source_url || url,
        leaderboard: lb.name,
        totalModels,
        tiers,
        allModels: tierEntries,
      };

      allResults[lb.name] = result;

      // Print tier distribution
      console.log(`   📋 Tier distribution:`);
      console.log(`      A (Top): ${tiers.A.length} models  → ${tiers.A.map(m => m.model).join(', ')}`);
      console.log(`      B: ${tiers.B.length} models  → ${tiers.B.map(m => m.model).join(', ')}`);
      console.log(`      C: ${tiers.C.length} models  → ${tiers.C.map(m => m.model).join(', ')}`);
      console.log(`      D: ${tiers.D.length} models  → ${tiers.D.map(m => m.model).join(', ')}`);
      console.log('');

    } catch (err) {
      console.error(`   ❌ Error fetching ${lb.name}:`, err);
    }
  }

  // Write the output file
  const outputPath = path.resolve(__dirname, '../src/data/arenaRankings.json');
  
  // We write the "text" leaderboard as the primary one
  const primaryData = allResults['text'];
  if (!primaryData) {
    console.error('❌ Could not fetch any leaderboard data. Aborting.');
    process.exit(1);
  }

  fs.writeFileSync(outputPath, JSON.stringify(primaryData, null, 2), 'utf8');
  console.log(`🎉 Successfully wrote arena rankings to: ${outputPath}`);
  console.log(`   Last updated: ${primaryData.lastUpdated}`);
  console.log(`   Total models: ${primaryData.totalModels}`);
}

syncTierList();
