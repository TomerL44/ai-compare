import mysql from 'mysql2/promise';

// Define the interface for the OpenRouter API response
export interface OpenRouterModel {
  id: string; // e.g., "openai/gpt-4"
  name: string; // e.g., "OpenAI: GPT-4"
  description?: string;
  pricing?: {
    prompt: string;
    completion: string;
  };
  context_length?: number;
  architecture?: {
    modality?: string;
    tokenizer?: string;
    instruct_type?: string;
  };
}

export interface OpenRouterResponse {
  data: OpenRouterModel[];
}

// Create a connection pool for MySQL
// SECURITY: All credentials MUST be provided via environment variables
if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
  console.warn('[API Fetcher] WARNING: DB_USER and DB_PASSWORD environment variables are not set. Database operations will fail.');
}

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ai_compare',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

/**
 * Fetches the latest models from OpenRouter API and upserts them into the MySQL database.
 * We map the fetched data to our 'tools' and 'tool_versions' tables.
 */
export const fetchAndUpsertModels = async (): Promise<void> => {
  console.log('[API Fetcher] Started fetching models from OpenRouter...');
  
  try {
    // 1. Fetch data from OpenRouter API
    const response = await fetch('https://openrouter.ai/api/v1/models');
    
    if (!response.ok) {
      throw new Error(`API fetch failed with status: ${response.status}`);
    }

    const json = (await response.json()) as OpenRouterResponse;
    const models = json.data;
    
    if (!models || models.length === 0) {
      console.log('[API Fetcher] No models found in the API response.');
      return;
    }

    console.log(`[API Fetcher] Successfully fetched ${models.length} models. Starting database upsert...`);

    // 2. Obtain a database connection from the pool
    const connection = await pool.getConnection();

    try {
      // Begin transaction to ensure data integrity
      await connection.beginTransaction();

      for (const model of models) {
        // We need to parse the OpenRouter id (e.g., "openai/gpt-4") into company and model name
        const idParts = model.id.split('/');
        const companyName = idParts.length > 1 ? idParts[0] : 'Unknown';
        const modelName = idParts.length > 1 ? idParts.slice(1).join('/') : idParts[0];

        // Ensure we have a valid tool ID and version ID
        // Note: For a robust system, we might want to map these to our existing categories.
        // For now, we will assign a default category 'tasks' for fetched text models.
        const toolId = `t_${companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
        const versionId = `v_${model.id.toLowerCase().replace(/[^a-z0-9]/g, '')}`;

        // 3. Upsert into 'tools' (Parent Table)
        // We use INSERT ... ON DUPLICATE KEY UPDATE to avoid duplicates and update existing records
        const upsertToolQuery = `
          INSERT INTO tools (id, category_id, name, company, website_url)
          VALUES (?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE 
            name = VALUES(name),
            company = VALUES(company);
        `;
        
        // We use a safe fallback for the tool name, maximizing available info
        const displayToolName = companyName.charAt(0).toUpperCase() + companyName.slice(1);
        
        // Execute upsert for tool
        await connection.execute(upsertToolQuery, [
          toolId,
          'tasks', // Defaulting category to 'tasks' for now
          displayToolName,
          displayToolName, // Company name
          'https://openrouter.ai' // Default website
        ]);

        // 4. Upsert into 'tool_versions' (Child Table)
        const upsertVersionQuery = `
          INSERT INTO tool_versions (
            id, tool_id, version_name, full_name, description, 
            context_window, pricing_model
          )
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE
            version_name = VALUES(version_name),
            full_name = VALUES(full_name),
            description = VALUES(description),
            context_window = VALUES(context_window),
            pricing_model = VALUES(pricing_model);
        `;

        const contextWindowStr = model.context_length ? `${model.context_length} tokens` : 'Unknown';
        // Simplistic pricing evaluation for demonstration purposes
        const promptPrice = model.pricing?.prompt;
        const pricingTier = (promptPrice && Number(promptPrice) === 0) ? 'Free' : 'Pro';

        // Execute upsert for tool version
        await connection.execute(upsertVersionQuery, [
          versionId,
          toolId,
          modelName, // Version name
          model.name, // Full name (e.g., "OpenAI: GPT-4")
          model.description || 'No description provided.',
          contextWindowStr,
          pricingTier
        ]);
      }

      // Commit the transaction after successfully processing all models
      await connection.commit();
      console.log('[API Fetcher] Database upsert completed successfully.');

    } catch (dbError) {
      // Rollback in case of database errors
      await connection.rollback();
      console.error('[API Fetcher] Database transaction failed. Rolled back changes.', dbError);
    } finally {
      // Always release the connection back to the pool
      connection.release();
    }

  } catch (error) {
    console.error('[API Fetcher] Automated fetch task failed:', error);
  }
};
