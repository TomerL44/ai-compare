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

export const CATEGORIES: Category[] = [
  { id: 'code', name: 'AI for Code / Vibecode' },
  { id: 'tasks', name: 'AI for Tasks' },
  { id: 'writing', name: 'AI for Writing' },
  { id: 'video', name: 'AI for Photo/Video Generation' },
  { id: 'audio', name: 'AI for Audio/Music' }
];

export const TOOLS: Tool[] = [
  { id: 't_openai', categoryId: 'code', name: 'ChatGPT', company: 'OpenAI', websiteUrl: 'https://chat.openai.com' },
  { id: 't_google', categoryId: 'code', name: 'Gemini', company: 'Google', websiteUrl: 'https://gemini.google.com' },
  { id: 't_anthropic', categoryId: 'code', name: 'Claude', company: 'Anthropic', websiteUrl: 'https://claude.ai' },
  { id: 't_meta', categoryId: 'tasks', name: 'Llama', company: 'Meta', websiteUrl: 'https://ai.meta.com' },
  { id: 't_deepseek', categoryId: 'tasks', name: 'DeepSeek', company: 'DeepSeek', websiteUrl: 'https://deepseek.com' },
  { id: 't_mistral', categoryId: 'tasks', name: 'Mistral', company: 'Mistral AI', websiteUrl: 'https://mistral.ai' },
  { id: 't_alibaba', categoryId: 'tasks', name: 'Qwen', company: 'Alibaba', websiteUrl: 'https://qwenlm.github.io' },
  { id: 't_moonshot', categoryId: 'code', name: 'Kimi', company: 'Moonshot AI', websiteUrl: 'https://kimi.moonshot.cn' },
  { id: 't_xai', categoryId: 'tasks', name: 'Grok', company: 'xAI', websiteUrl: 'https://grok.x.ai' },
  { id: 't_nano_banana', categoryId: 'video', name: 'Nano Banana', company: 'Google', websiteUrl: 'https://gemini.google.com/images' },
  { id: 't_midjourney', categoryId: 'video', name: 'Midjourney', company: 'Midjourney', websiteUrl: 'https://midjourney.com' },
  { id: 't_ideogram', categoryId: 'video', name: 'Ideogram', company: 'Ideogram', websiteUrl: 'https://ideogram.ai' },
  { id: 't_flux', categoryId: 'video', name: 'Flux', company: 'Black Forest Labs', websiteUrl: 'https://blackforestlabs.ai' },
  { id: 't_runway', categoryId: 'video', name: 'Runway', company: 'Runway', websiteUrl: 'https://runwayml.com' },
  { id: 't_luma', categoryId: 'video', name: 'Luma AI', company: 'Luma AI', websiteUrl: 'https://lumalabs.ai/dream-machine' },
  { id: 't_kling', categoryId: 'video', name: 'Kling', company: 'Kuaishou', websiteUrl: 'https://kling.kuaishou.com' },
  { id: 't_suno', categoryId: 'audio', name: 'Suno', company: 'Suno AI', websiteUrl: 'https://suno.com' },
  { id: 't_udio', categoryId: 'audio', name: 'Udio', company: 'Udio', websiteUrl: 'https://udio.com' },
  { id: 't_elevenlabs', categoryId: 'audio', name: 'ElevenLabs', company: 'ElevenLabs', websiteUrl: 'https://elevenlabs.io' },
  { id: 't_cursor', categoryId: 'code', name: 'Cursor', company: 'Anysphere', websiteUrl: 'https://cursor.sh' },
  { id: 't_windsurf', categoryId: 'code', name: 'Windsurf', company: 'Codeium', websiteUrl: 'https://codeium.com/windsurf' },
  { id: 't_replit', categoryId: 'code', name: 'Replit', company: 'Replit', websiteUrl: 'https://replit.com' },
  { id: 't_perplexity', categoryId: 'tasks', name: 'Perplexity', company: 'Perplexity AI', websiteUrl: 'https://perplexity.ai' },
  { id: 't_characterai', categoryId: 'writing', name: 'Character.AI', company: 'Character.AI', websiteUrl: 'https://character.ai' }
];

export const TOOL_VERSIONS: ToolVersion[] = [
  { id: 'v_gpt_54_pro', toolId: 't_openai', versionName: '5.4 Pro', fullName: 'ChatGPT-5.4 Pro', description: 'Breakthrough model featuring native computer use and agentic UI navigation without human intervention. Reaches a new paradigm in reasoning with an 18% reduction in factual errors and native Codex-level coding capability.', bestFor: 'Native computer use and UI navigation', pricingModel: 'Enterprise', contextWindow: '2M tokens', platforms: 'Web, API, Desktop' },
  { id: 'v_gpt_o3_pro', toolId: 't_openai', versionName: 'o3 Pro', fullName: 'ChatGPT o3 Pro', description: 'Deep reasoning model specializing in complex logic, mathematics, and long-form coding via Chain-of-Thought processing before answering.', bestFor: 'Deep mathematical and coding reasoning', pricingModel: 'Pro', contextWindow: '200k tokens', platforms: 'Web, API' },
  { id: 'v_gpt_oss_120b', toolId: 't_openai', versionName: 'OSS 120B', fullName: 'GPT-OSS 120B', description: 'OpenAI\'s open-weights model targeted at local deployments with high security requirements. Offers adjustable reasoning effort.', bestFor: 'Secure local deployment in VPCs', pricingModel: 'Open Source', contextWindow: '128k tokens', platforms: 'Local, API' },
  { id: 'v_gemini_31_pro', toolId: 't_google', versionName: '3.1 Pro', fullName: 'Gemini 3.1 Pro', description: 'Google\'s cutting-edge flagship capable of "Vibe coding" and multi-step physical planning. Scored 100% on AIME 2025 high-school math tests and 91.9% on GPQA Diamond.', bestFor: 'Vibe coding & physical agentic actions', pricingModel: 'Pro', contextWindow: '2M+ tokens', platforms: 'Web, Vertex AI, API' },
  { id: 'v_gemini_25_flash', toolId: 't_google', versionName: '2.5 Flash', fullName: 'Gemini 2.5 Flash', description: 'High-speed model balancing latency with capable reasoning. Integrates real-time audio and conversational processing.', bestFor: 'Low-latency agentic conversations', pricingModel: 'Free', contextWindow: '1M tokens', platforms: 'Web, API' },
  { id: 'v_claude_46_opus', toolId: 't_anthropic', versionName: 'Opus 4.6', fullName: 'Claude Opus 4.6', description: 'Anthropic\'s gold-standard model featuring extended and adaptive thinking. Automatically scales processing resources dynamically based on prompt complexity.', bestFor: 'Logical agency & reasoning orchestration', pricingModel: 'Enterprise', contextWindow: 'N/A', platforms: 'Web, API, AWS Bedrock' },
  { id: 'v_claude_46_sonnet', toolId: 't_anthropic', versionName: 'Sonnet 4.6', fullName: 'Claude Sonnet 4.6', description: 'The definitive choice for software engineers. Shattered SWE Bench coding records with an 82% problem resolution rate. Masterful usage of Artifacts.', bestFor: 'Advanced Agentic Coding', pricingModel: 'Pro', contextWindow: 'N/A', platforms: 'Web, API, IDEs' },
  { id: 'v_llama4_scout', toolId: 't_meta', versionName: 'Scout 17B-16E', fullName: 'Llama 4 Scout', description: 'A Mixture-of-Experts architecture featuring a record-breaking 10 million token context window. Processes at an astounding 2600 tokens per second on consumer hardware via FP8 quantization.', bestFor: 'Ultra-long context repository indexing', pricingModel: 'Open Source', contextWindow: '10M tokens', platforms: 'Local, Cloud VMs' },
  { id: 'v_deepseek_v3', toolId: 't_deepseek', versionName: 'V3 Base', fullName: 'DeepSeek V3', description: 'A massive 671B parameter model operating on only 37B active parameters per token. Shattered global pricing monopolies by drastically reducing API processing costs.', bestFor: 'Cost-effective scalable reasoning', pricingModel: 'Open Source', contextWindow: '256k tokens', platforms: 'API, Local' },
  { id: 'v_deepseek_r1', toolId: 't_deepseek', versionName: 'R1', fullName: 'DeepSeek R1', description: 'An open-source (MIT License) reasoning model trained via strict Reinforcement Learning (RL), bringing GPT-4.5 level logic processing out of localized walls.', bestFor: 'Open-source logic validation', pricingModel: 'Open Source', contextWindow: '64k tokens', platforms: 'Local, Cloud VMs' },
  { id: 'v_mistral_large_3', toolId: 't_mistral', versionName: 'Large 3', fullName: 'Mistral Large 3', description: '675B parameter flagship compliant with European AI act regulations. Superb multilingual agentic capability with a minimal computational footprint.', bestFor: 'Sovereign and regulated AI processing', pricingModel: 'Enterprise', contextWindow: '256k tokens', platforms: 'API, Azure, Local' },
  { id: 'v_codestral_2508', toolId: 't_mistral', versionName: 'Codestral 25.08', fullName: 'Codestral 25.08', description: 'Masterful Fill-in-the-Middle (FIM) model that decreases continuous coding errors by 50% compared to previous generations. Fully deployable within isolated networks.', bestFor: 'Private VPC IDE autocompletion', pricingModel: 'Open Source', contextWindow: 'N/A', platforms: 'Local, IDE Extensions' },
  { id: 'v_qwen_35_397b', toolId: 't_alibaba', versionName: '3.5 397B', fullName: 'Qwen 3.5 397B', description: 'Alibaba\'s absolute beast of an open-weights model, fully integrating multimodal visual understanding with agentic reasoning out-of-the-box.', bestFor: 'Heavy local multimodal agency', pricingModel: 'Open Source', contextWindow: 'N/A', platforms: 'Local' },
  { id: 'v_kimi_k25', toolId: 't_moonshot', versionName: 'K2.5', fullName: 'Kimi K2.5', description: 'Features "Agent Swarm" architecture to coordinate 100 parallel sub-agents to solve one massive problem. Excels at generating pixel-perfect UI code directly from mockups or demo videos.', bestFor: 'Visual coding & Swarm orchestration', pricingModel: 'Pro', contextWindow: 'Large', platforms: 'Web, API' },
  { id: 'v_grok_41', toolId: 't_xai', versionName: '4.1 Thinking', fullName: 'Grok 4.1', description: 'Integrated flawlessly with X, featuring real-time reality comprehension, vastly improved Emotional Quotient (EQ), and 64% boost in user preference blind-tests.', bestFor: 'Real-time social data ingestion', pricingModel: 'Pro', contextWindow: 'N/A', platforms: 'Web, Mobile (X App)' },
  { id: 'v_nano_banana_2', toolId: 't_nano_banana', versionName: '2', fullName: 'Nano Banana 2', description: 'Google\'s Gemini 3.1 Flash Image. Incredibly fast generation with multi-lingual typography support. Retains unbreakable consistency across 5 characters and 14 distinct objects within 4K renders.', bestFor: 'Perfect typographics and localized visuals', pricingModel: 'Free', contextWindow: 'N/A', platforms: 'Web' },
  { id: 'v_midjourney_v8', toolId: 't_midjourney', versionName: 'V8', fullName: 'Midjourney V8', description: 'The unquestioned leader in artistic cinematography. V8 deployed new massive server clusters for hyper-detailed depth simulations and perfect skin/hand anatomy.', bestFor: 'Artistic cinema & photography simulation', pricingModel: 'Pro', contextWindow: 'N/A', platforms: 'Discord, Web' },
  { id: 'v_flux_2_pro', toolId: 't_flux', versionName: 'Flux.2 Pro', fullName: 'Flux.2 Pro', description: 'Permits multi-reference control inputs for determining styles versus subject identities. Reaches 4MP resolution photorealism natively on 16GB VRAM cards.', bestFor: 'Local photorealistic synthesis', pricingModel: 'Open Source', contextWindow: 'N/A', platforms: 'Local, UI nodes' },
  { id: 'v_runway_gen45', toolId: 't_runway', versionName: 'Gen-4.5', fullName: 'Runway Gen-4.5', description: 'Transformed from a video generator into a General World Model. Features pixel-perfect physics simulation, native environmental audio (Foley), and infinite multi-shot editing.', bestFor: 'Native audio VFX physics simulation', pricingModel: 'Enterprise', contextWindow: 'N/A', platforms: 'Web, API' },
  { id: 'v_luma_ray314', toolId: 't_luma', versionName: 'Ray 3.14', fullName: 'Luma Ray 3.14', description: 'First reasoning-driven video editor producing true 16bit HDR renders. Allows direct character identity planting mapped perfectly onto existing live-action 1080p clips.', bestFor: 'Post-production and HDR color grading', pricingModel: 'Pro', contextWindow: 'N/A', platforms: 'Web' },
  { id: 'v_kling_26', toolId: 't_kling', versionName: '2.6 Pro', fullName: 'Kling 2.6 Pro', description: 'Achieves the impossible by generating perfectly lip-synced video alongside human voices, all while handling continuous complex movement tracking for up to 30 seconds.', bestFor: 'Lip-synced audiovisual generation', pricingModel: 'Pro', contextWindow: 'N/A', platforms: 'Web' },
  { id: 'v_suno_v5', toolId: 't_suno', versionName: 'V5 Studio', fullName: 'Suno V5', description: 'Transforms text completely into a full studio DAW output workspace. Supports high-fidelity MIDI extraction, separated stems, and advanced emotional expression.', bestFor: 'Studio music generation & stem extraction', pricingModel: 'Pro', contextWindow: 'N/A', platforms: 'Web' },
  { id: 'v_udio_26', toolId: 't_udio', versionName: 'Udio 2026', fullName: 'Udio 2026', description: 'Empowered by chat-to-edit capabilities (Meloty AI) enabling users to literally text changes into the song. Legally sources via the Merlin collective.', bestFor: 'Chat-driven music editing & tracking', pricingModel: 'Pro', contextWindow: 'N/A', platforms: 'Web' },
  { id: 'v_eleven_v3_voice', toolId: 't_elevenlabs', versionName: 'Eleven v3', fullName: 'ElevenLabs v3', description: 'Allows purely textual voice design (e.g. "Scratchy old witch") without traditional voice cloning. Includes in-line audio tags like [whispers] and highly complex pronunciation control.', bestFor: 'Zero-shot voice design & audio tags', pricingModel: 'Enterprise', contextWindow: 'N/A', platforms: 'Web, API' },
  { id: 'v_voxtral_realtime', toolId: 't_mistral', versionName: 'Voxtral Realtime', fullName: 'Voxtral Realtime', description: 'Open-source 4B parameter model built strictly for real-time customer service voice streaming. Experiences under 200ms latency without skipping.', bestFor: 'Real-time conversational streaming', pricingModel: 'Open Source', contextWindow: 'N/A', platforms: 'Local, API' },
  { id: 'v_cursor_26', toolId: 't_cursor', versionName: '2026', fullName: 'Cursor', description: 'The default IDE for the AI era. Autonomously reads across thousands of files to apply full architecture refactors directly using tools like Claude 4.6.', bestFor: 'Autonomous codebase-wide refactors', pricingModel: 'Pro', contextWindow: 'Large via API', platforms: 'Desktop IDE' },
  { id: 'v_replit_agent3', toolId: 't_replit', versionName: 'Agent 3', fullName: 'Replit Agent 3', description: 'Perfect tool for non-engineers. Translates a raw text prompt straight into a functional deployed application, complete with database provisioning.', bestFor: 'Text-to-Prototype zero-setup deployment', pricingModel: 'Pro', contextWindow: 'N/A', platforms: 'Web IDE' },
  { id: 'v_sonar_council', toolId: 't_perplexity', versionName: 'Model Council', fullName: 'Perplexity Model Council', description: 'Runs a single query across multiple apex models (GPT-5.4, Claude 4.6, Gemini 3) simultaneously to calculate a consensus. Nullifies hallucination risks for high-stakes enterprise decisions.', bestFor: 'High-stakes consensus research', pricingModel: 'Enterprise', contextWindow: 'Large', platforms: 'Web, API' },
  { id: 'v_character_pip', toolId: 't_characterai', versionName: 'PipSqueak', fullName: 'Character.ai PipSqueak', description: 'Companions possessing long-term emotional memory and interactive multi-modal real-time audio chat capabilities.', bestFor: 'Virtual companionship and roleplay', pricingModel: 'Free', contextWindow: 'Extensive', platforms: 'Web, App' }
];