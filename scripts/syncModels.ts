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
  createdAt: number;
  categoryIds: string[];
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
  architecture?: {
    modality?: string;
    input_modalities?: string[];
    output_modalities?: string[];
  };
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

// Default timestamp for manually-curated entries that don't have one (Jan 1 2026)
const DEFAULT_CURATED_TIMESTAMP = Math.floor(new Date('2026-01-01').getTime() / 1000);

/**
 * Classify a model into one or more categories based on:
 * 1. OpenRouter's architecture modality data (output capabilities)
 * 2. Smart keyword matching on model name + description
 * 3. Parent tool's existing category as a baseline
 */
function classifyCategories(
  model: OpenRouterModel,
  parentCategoryId: string
): string[] {
  const categories = new Set<string>();
  const idLower = model.id.toLowerCase();
  const descLower = (model.description || '').toLowerCase();
  const nameLower = model.name.toLowerCase();
  const combined = `${idLower} ${nameLower} ${descLower}`;

  const outputModalities = model.architecture?.output_modalities || [];
  const inputModalities = model.architecture?.input_modalities || [];

  // ── 1. Modality-based classification (most reliable) ──
  
  // If it outputs images → Photo/Video Generation
  if (outputModalities.includes('image')) {
    categories.add('video');
  }

  // If it outputs audio → Audio/Music
  if (outputModalities.includes('audio')) {
    categories.add('audio');
  }

  // ── 2. Keyword-based classification on name + description ──

  // Code / Vibecode keywords
  const codeKeywords = [
    'code', 'coder', 'codex', 'coding', 'programming', 'developer',
    'ide', 'debug', 'compiler', 'syntax', 'refactor', 'software engineer',
    'swe-bench', 'fill-in-the-middle', 'fim', 'autocomplete', 'codestral',
    'cursor', 'windsurf', 'replit', 'copilot'
  ];
  if (codeKeywords.some(kw => combined.includes(kw))) {
    categories.add('code');
  }

  // Writing keywords
  const writingKeywords = [
    'writing', 'writer', 'creative writing', 'story', 'novel',
    'copywriting', 'content creation', 'blog', 'article', 'roleplay',
    'character', 'companion', 'narrative', 'fiction'
  ];
  if (writingKeywords.some(kw => combined.includes(kw))) {
    categories.add('writing');
  }

  // Photo/Video keywords (for models not caught by modality)
  const videoKeywords = [
    'image generat', 'video generat', 'photo', 'diffusion', 'dall-e',
    'midjourney', 'flux', 'runway', 'luma', 'kling', 'ideogram',
    'art generat', 'visual generat', 'image preview', 'image-preview',
    'nano banana', 'text-to-image', 'text to image'
  ];
  if (videoKeywords.some(kw => combined.includes(kw))) {
    categories.add('video');
  }

  // Audio/Music keywords (for models not caught by modality)
  const audioKeywords = [
    'music', 'audio', 'voice', 'speech', 'tts', 'text-to-speech',
    'suno', 'udio', 'elevenlabs', 'whisper', 'sound', 'lyria',
    'voxtral', 'voice design', 'song', 'melody'
  ];
  if (audioKeywords.some(kw => combined.includes(kw))) {
    categories.add('audio');
  }

  // ── 3. Multimodal models that can PROCESS audio/image input ──
  // These are general-purpose models that understand audio/images
  // They should also appear in relevant categories
  if (inputModalities.includes('audio') && !categories.has('audio')) {
    // Models that can process audio input (like Gemini) can be useful for audio tasks
    if (combined.includes('multimodal') || combined.includes('audio') ||
        inputModalities.length >= 3) {
      categories.add('audio');
    }
  }
  if (inputModalities.includes('image') && !categories.has('video')) {
    // Only add to video if it's specifically a vision/image model
    if (combined.includes('vision') || combined.includes('image understanding')) {
      categories.add('video');
    }
  }

  // ── 4. General-purpose models always get 'tasks' ──
  // If the model accepts text input and produces text output, it's a task model
  if (outputModalities.includes('text') || outputModalities.length === 0) {
    categories.add('tasks');
  }

  // ── 5. Inherit parent tool's category as baseline ──
  categories.add(parentCategoryId);

  // ── 6. If still empty (shouldn't happen), default to tasks ──
  if (categories.size === 0) {
    categories.add('tasks');
  }

  return Array.from(categories);
}

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

    // 2. Read existing src/data/agents.ts
    const agentsFilePath = path.resolve('src/data/agents.ts');
    console.log(`📂 Reading existing data from: ${agentsFilePath}`);
    
    const { TOOLS: existingTools, TOOL_VERSIONS: existingVersions } = await import('../src/data/agents.js');
    
    console.log(`📦 Found ${existingTools.length} existing tools and ${existingVersions.length} versions in agents.ts.`);

    const toolsMap = new Map<string, Tool>();
    existingTools.forEach((t: Tool) => toolsMap.set(t.id, t));

    const versionsMap = new Map<string, ToolVersion>();
    existingVersions.forEach((v: ToolVersion) => {
      // Ensure existing entries have a createdAt (backfill if missing)
      if (!v.createdAt) {
        v.createdAt = DEFAULT_CURATED_TIMESTAMP;
      }
      // Ensure existing entries have categoryIds (backfill from parent tool)
      if (!v.categoryIds || v.categoryIds.length === 0) {
        const parent = existingTools.find((t: Tool) => t.id === v.toolId);
        v.categoryIds = parent ? [parent.categoryId] : ['tasks'];
      }
      versionsMap.set(v.id, v);
    });

    // 3. Process and merge new models
    let addedToolsCount = 0;
    let addedVersionsCount = 0;

    const priorityProviders = ['google', 'openai', 'anthropic', 'meta', 'deepseek', 'mistral', 'mistralai', 'qwen', 'xai', 'x-ai', 'ibm', 'cohere'];

    for (const model of fetchedModels) {
      const idParts = model.id.split('/');
      const providerKey = idParts[0].toLowerCase();
      const modelSlug = idParts.slice(1).join('/');

      const isPriority = priorityProviders.includes(providerKey);
      if (!isPriority) continue;

      const companyInfo = COMPANY_MAP[providerKey] || {
        name: providerKey.charAt(0).toUpperCase() + providerKey.slice(1),
        url: 'https://openrouter.ai'
      };

      const toolId = `t_${providerKey.replace(/[^a-z0-9]/g, '')}`;
      const versionId = `v_${model.id.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;

      // Determine parent tool's default category
      let parentCategoryId = 'tasks';
      if (toolsMap.has(toolId)) {
        parentCategoryId = toolsMap.get(toolId)!.categoryId;
      }

      // Upsert tool
      if (!toolsMap.has(toolId)) {
        const modelLower = model.id.toLowerCase() + ' ' + (model.description || '').toLowerCase();
        if (modelLower.includes('code') || modelLower.includes('coder') || modelLower.includes('programming') || modelLower.includes('instruct') || modelLower.includes('sql')) {
          parentCategoryId = 'code';
        } else if (modelLower.includes('writing') || modelLower.includes('novel') || modelLower.includes('creative') || modelLower.includes('writer')) {
          parentCategoryId = 'writing';
        }

        const newTool: Tool = {
          id: toolId,
          categoryId: parentCategoryId,
          name: companyInfo.name === 'OpenAI' ? 'ChatGPT' : companyInfo.name === 'Google' ? 'Gemini' : companyInfo.name === 'Anthropic' ? 'Claude' : companyInfo.name,
          company: companyInfo.name,
          websiteUrl: companyInfo.url
        };
        toolsMap.set(toolId, newTool);
        addedToolsCount++;
      }

      // Classify categories for this specific version
      const categoryIds = classifyCategories(model, parentCategoryId);

      // Upsert version
      if (!versionsMap.has(versionId)) {
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

        let versionName = modelSlug;
        versionName = versionName
          .replace(/-/g, ' ')
          .replace(/^(gpt|claude|gemini|llama|qwen|grok|mistral)\s*/i, '');
        versionName = versionName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

        let bestFor = 'General reasoning and tasks';
        if (model.id.toLowerCase().includes('code') || model.id.toLowerCase().includes('coder')) {
          bestFor = 'Advanced coding and syntax assistance';
        } else if (model.id.toLowerCase().includes('flash') || model.id.toLowerCase().includes('speed')) {
          bestFor = 'High-speed conversational logic';
        } else if (model.id.toLowerCase().includes('opus') || model.id.toLowerCase().includes('reasoning') || model.id.toLowerCase().includes('thought')) {
          bestFor = 'Deep logical & mathematical reasoning';
        } else if (model.architecture?.output_modalities?.includes('image')) {
          bestFor = 'AI image generation and editing';
        } else if (model.architecture?.output_modalities?.includes('audio')) {
          bestFor = 'Audio and music generation';
        }

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
          platforms,
          createdAt: model.created || Math.floor(Date.now() / 1000),
          categoryIds
        };
        versionsMap.set(versionId, newVersion);
        addedVersionsCount++;
      } else {
        // Update existing entries: refresh categoryIds and createdAt
        const existing = versionsMap.get(versionId)!;
        if (existing.createdAt === DEFAULT_CURATED_TIMESTAMP && model.created) {
          existing.createdAt = model.created;
        }
        // Merge new categories into existing ones (additive)
        const mergedCategories = new Set([...existing.categoryIds, ...categoryIds]);
        existing.categoryIds = Array.from(mergedCategories);
        versionsMap.set(versionId, existing);
      }
    }

    console.log(`✅ Merged new data. Added ${addedToolsCount} tools and ${addedVersionsCount} new model versions.`);

    // Log category distribution
    const catCounts: Record<string, number> = {};
    for (const v of versionsMap.values()) {
      for (const cid of v.categoryIds) {
        catCounts[cid] = (catCounts[cid] || 0) + 1;
      }
    }
    console.log('📊 Category distribution:');
    for (const [cid, count] of Object.entries(catCounts)) {
      const catName = CATEGORIES.find(c => c.id === cid)?.name || cid;
      console.log(`   ${catName}: ${count} versions`);
    }

    // 4. Construct updated file contents — sort versions by createdAt descending (newest first)
    const toolsArray = Array.from(toolsMap.values());
    const versionsArray = Array.from(versionsMap.values()).sort((a, b) => b.createdAt - a.createdAt);

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
  createdAt: number;
  categoryIds: string[];
}

export const CATEGORIES: Category[] = ${JSON.stringify(CATEGORIES, null, 2)};

export const TOOLS: Tool[] = ${JSON.stringify(toolsArray, null, 2)};

export const TOOL_VERSIONS: ToolVersion[] = ${JSON.stringify(versionsArray, null, 2)};
`;

    // 5. Overwrite the file
    fs.writeFileSync(agentsFilePath, content, 'utf8');
    console.log(`🎉 Success! Updated ${agentsFilePath} with ${toolsArray.length} tools and ${versionsArray.length} versions (sorted newest-first).`);

  } catch (err) {
    console.error('❌ Error during sync:', err);
    process.exit(1);
  }
}

run();
