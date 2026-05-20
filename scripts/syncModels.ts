import * as fs from 'fs';
import * as path from 'path';

// Define structures matching src/data/agents.ts
export type PricingModel = 'Free' | 'Pro' | 'Enterprise' | 'Open Source';

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface Tool {
  id: string;
  categoryId: string;
  name: string;
  company: string;
  websiteUrl: string;
}

export interface ToolVersion {
  id: string;
  toolId: string;
  versionName: string;
  fullName: string;
  description: string;
  bestFor: string;
  pricingModel: PricingModel;
  contextWindow: string;
  platforms: string;
}

interface OpenRouterModel {
  id: string;
  name: string;
  description?: string;
  pricing?: {
    prompt: string;
    completion: string;
  };
  context_length?: number;
  created?: number;
}

// Map of popular companies to standard name and website URL
const COMPANY_MAP: Record<string, { name: string; url: string }> = {
  'openai': { name: 'OpenAI', url: 'https://openai.com' },
  'google': { name: 'Google', url: 'https://google.com' },
  'anthropic': { name: 'Anthropic', url: 'https://anthropic.com' },
  'meta': { name: 'Meta', url: 'https://meta.ai' },
  'deepseek': { name: 'DeepSeek', url: 'https://deepseek.com' },
  'mistralai': { name: 'Mistral AI', url: 'https://mistral.ai' },
  'mistral': { name: 'Mistral AI', url: 'https://mistral.ai' },
  'qwen': { name: 'Alibaba', url: 'https://qwenlm.github.io' },
  'alibaba': { name: 'Alibaba', url: 'https://qwenlm.github.io' },
  'xai': { name: 'xAI', url: 'https://x.ai' },
  'x-ai': { name: 'xAI', url: 'https://x.ai' },
  'cohere': { name: 'Cohere', url: 'https://cohere.com' },
  'perplexity': { name: 'Perplexity AI', url: 'https://perplexity.ai' },
  'microsoft': { name: 'Microsoft', url: 'https://microsoft.com' },
  'stability-ai': { name: 'Stability AI', url: 'https://stability.ai' },
  'stable-diffusion': { name: 'Stability AI', url: 'https://stability.ai' },
  'ibm': { name: 'IBM', url: 'https://ibm.com' },
  'ibm-granite': { name: 'IBM', url: 'https://ibm.com' },
  'nvidia': { name: 'NVIDIA', url: 'https://nvidia.com' }
};

const CATEGORIES: Category[] = [
  { id: 'code', name: 'AI for Code / Vibecode' },
  { id: 'tasks', name: 'AI for Tasks' },
  { id: 'writing', name: 'AI for Writing' },
  { id: 'video', name: 'AI for Photo/Video Generation' },
  { id: 'audio', name: 'AI for Audio/Music' }
];

async function run() {
  console.log('🔄 Fetching latest models from OpenRouter...');
  
  try {
    // 1. Fetch from OpenRouter
    const res = await fetch('https://openrouter.ai/api/v1/models');
    if (!res.ok) {
      throw new Error(`Failed to fetch models: ${res.statusText}`);
    }
    const json = await res.json() as { data: OpenRouterModel[] };
    const fetchedModels = json.data;
    console.log(`✅ Successfully fetched ${fetchedModels.length} models from OpenRouter.`);

    // 2. Read existing src/data/agents.ts to parse existing hardcoded list
    const agentsFilePath = path.resolve('src/data/agents.ts');
    console.log(`📂 Reading existing data from: ${agentsFilePath}`);
    
    // We will dynamically import the file using tsx or read and parse it manually.
    // To make it simple and bulletproof, we will dynamically import the compiled/evaluated ES module!
    // Since we are running under tsx, we can import from ../src/data/agents.ts.
    const { TOOLS: existingTools, TOOL_VERSIONS: existingVersions } = await import('../src/data/agents.js');
    
    console.log(`📦 Found ${existingTools.length} existing tools and ${existingVersions.length} versions in agents.ts.`);

    const toolsMap = new Map<string, Tool>();
    existingTools.forEach((t: Tool) => toolsMap.set(t.id, t));

    const versionsMap = new Map<string, ToolVersion>();
    existingVersions.forEach((v: ToolVersion) => versionsMap.set(v.id, v));

    // 3. Process and merge new models
    let addedToolsCount = 0;
    let addedVersionsCount = 0;

    // Filter to only include the newest/most popular models to keep list clean
    // We'll prioritize models from known major providers, or with substantial descriptions
    const priorityProviders = ['google', 'openai', 'anthropic', 'meta', 'deepseek', 'mistral', 'mistralai', 'qwen', 'xai', 'x-ai', 'ibm', 'cohere'];

    for (const model of fetchedModels) {
      const idParts = model.id.split('/');
      const providerKey = idParts[0].toLowerCase();
      const modelSlug = idParts.slice(1).join('/');

      // Only include priority providers to maintain high visual quality, unless they are already present
      const isPriority = priorityProviders.includes(providerKey);
      if (!isPriority) continue;

      // Map company info
      const companyInfo = COMPANY_MAP[providerKey] || {
        name: providerKey.charAt(0).toUpperCase() + providerKey.slice(1),
        url: 'https://openrouter.ai'
      };

      const toolId = `t_${providerKey.replace(/[^a-z0-9]/g, '')}`;
      const versionId = `v_${model.id.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;

      // Check if tool already exists
      if (!toolsMap.has(toolId)) {
        // Classify Category
        let categoryId = 'tasks';
        const modelLower = model.id.toLowerCase() + ' ' + (model.description || '').toLowerCase();
        if (modelLower.includes('code') || modelLower.includes('coder') || modelLower.includes('programming') || modelLower.includes('instruct') || modelLower.includes('sql')) {
          categoryId = 'code';
        } else if (modelLower.includes('writing') || modelLower.includes('novel') || modelLower.includes('creative') || modelLower.includes('writer')) {
          categoryId = 'writing';
        }

        const newTool: Tool = {
          id: toolId,
          categoryId,
          name: companyInfo.name === 'OpenAI' ? 'ChatGPT' : companyInfo.name === 'Google' ? 'Gemini' : companyInfo.name === 'Anthropic' ? 'Claude' : companyInfo.name,
          company: companyInfo.name,
          websiteUrl: companyInfo.url
        };
        toolsMap.set(toolId, newTool);
        addedToolsCount++;
      }

      // Check if version already exists
      if (!versionsMap.has(versionId)) {
        // Pricing Model classification
        let pricingModel: PricingModel = 'Pro';
        const promptPrice = Number(model.pricing?.prompt || 0);
        
        const isFree = promptPrice === 0;
        const isOpenWeights = model.id.toLowerCase().match(/(llama|deepseek|qwen|mistral|mixtral|granite|phi|gemma|command-r|yi|stable|openchat)/i);
        const isExpensive = promptPrice > 0.00001;

        if (isFree) {
          pricingModel = 'Free';
        } else if (isOpenWeights) {
          pricingModel = 'Open Source';
        } else if (isExpensive) {
          pricingModel = 'Enterprise';
        }

        // Clean versionName
        let versionName = modelSlug;
        // e.g. "gemini-3.5-flash" -> "3.5 Flash" or capitalize
        versionName = versionName
          .replace(/-/g, ' ')
          .replace(/^(gpt|claude|gemini|llama|qwen|grok|mistral)\s*/i, '');
        // Capitalize words
        versionName = versionName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

        // Best for
        let bestFor = 'General reasoning and tasks';
        if (model.id.toLowerCase().includes('code') || model.id.toLowerCase().includes('coder')) {
          bestFor = 'Advanced coding and syntax assistance';
        } else if (model.id.toLowerCase().includes('flash') || model.id.toLowerCase().includes('speed')) {
          bestFor = 'High-speed conversational logic';
        } else if (model.id.toLowerCase().includes('opus') || model.id.toLowerCase().includes('reasoning') || model.id.toLowerCase().includes('thought')) {
          bestFor = 'Deep logical & mathematical reasoning';
        }

        // Platforms
        let platforms = 'Web, API';
        if (model.id.toLowerCase().includes('local')) {
          platforms = 'Local, API';
        }

        const newVersion: ToolVersion = {
          id: versionId,
          toolId,
          versionName,
          fullName: model.name,
          description: model.description || 'No description provided.',
          bestFor,
          pricingModel,
          contextWindow: model.context_length ? `${model.context_length.toLocaleString()} tokens` : 'Unknown',
          platforms
        };
        versionsMap.set(versionId, newVersion);
        addedVersionsCount++;
      }
    }

    console.log(`✅ Merged new data. Added ${addedToolsCount} tools and ${addedVersionsCount} new model versions.`);

    // 4. Construct updated file contents
    const toolsArray = Array.from(toolsMap.values());
    const versionsArray = Array.from(versionsMap.values());

    const content = `export type PricingModel = 'Free' | 'Pro' | 'Enterprise' | 'Open Source';

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface Tool {
  id: string;
  categoryId: string;
  name: string;
  company: string;
  websiteUrl: string;
}

export interface ToolVersion {
  id: string;
  toolId: string;
  versionName: string;
  fullName: string;
  description: string;
  bestFor: string;
  pricingModel: PricingModel;
  contextWindow: string;
  platforms: string;
}

export const CATEGORIES: Category[] = ${JSON.stringify(CATEGORIES, null, 2)};

export const TOOLS: Tool[] = ${JSON.stringify(toolsArray, null, 2)};

export const TOOL_VERSIONS: ToolVersion[] = ${JSON.stringify(versionsArray, null, 2)};
`;

    // 5. Overwrite the file
    fs.writeFileSync(agentsFilePath, content, 'utf8');
    console.log(`🎉 Success! Updated ${agentsFilePath} with ${toolsArray.length} tools and ${versionsArray.length} versions.`);

  } catch (err) {
    console.error('❌ Error during sync:', err);
    process.exit(1);
  }
}

run();
