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

export const CATEGORIES: Category[] = [
  {
    "id": "code",
    "name": "AI for Code / Vibecode"
  },
  {
    "id": "tasks",
    "name": "AI for Tasks"
  },
  {
    "id": "writing",
    "name": "AI for Writing"
  },
  {
    "id": "video",
    "name": "AI for Photo/Video Generation"
  },
  {
    "id": "audio",
    "name": "AI for Audio/Music"
  }
];

export const TOOLS: Tool[] = [
  {
    "id": "t_openai",
    "categoryId": "code",
    "name": "ChatGPT",
    "company": "OpenAI",
    "websiteUrl": "https://chat.openai.com"
  },
  {
    "id": "t_google",
    "categoryId": "code",
    "name": "Gemini",
    "company": "Google",
    "websiteUrl": "https://gemini.google.com"
  },
  {
    "id": "t_anthropic",
    "categoryId": "code",
    "name": "Claude",
    "company": "Anthropic",
    "websiteUrl": "https://claude.ai"
  },
  {
    "id": "t_meta",
    "categoryId": "tasks",
    "name": "Llama",
    "company": "Meta",
    "websiteUrl": "https://ai.meta.com"
  },
  {
    "id": "t_deepseek",
    "categoryId": "tasks",
    "name": "DeepSeek",
    "company": "DeepSeek",
    "websiteUrl": "https://deepseek.com"
  },
  {
    "id": "t_mistral",
    "categoryId": "tasks",
    "name": "Mistral",
    "company": "Mistral AI",
    "websiteUrl": "https://mistral.ai"
  },
  {
    "id": "t_alibaba",
    "categoryId": "tasks",
    "name": "Qwen",
    "company": "Alibaba",
    "websiteUrl": "https://qwenlm.github.io"
  },
  {
    "id": "t_moonshot",
    "categoryId": "code",
    "name": "Kimi",
    "company": "Moonshot AI",
    "websiteUrl": "https://kimi.moonshot.cn"
  },
  {
    "id": "t_xai",
    "categoryId": "tasks",
    "name": "Grok",
    "company": "xAI",
    "websiteUrl": "https://grok.x.ai"
  },
  {
    "id": "t_nano_banana",
    "categoryId": "video",
    "name": "Nano Banana",
    "company": "Google",
    "websiteUrl": "https://gemini.google.com/images"
  },
  {
    "id": "t_midjourney",
    "categoryId": "video",
    "name": "Midjourney",
    "company": "Midjourney",
    "websiteUrl": "https://midjourney.com"
  },
  {
    "id": "t_ideogram",
    "categoryId": "video",
    "name": "Ideogram",
    "company": "Ideogram",
    "websiteUrl": "https://ideogram.ai"
  },
  {
    "id": "t_flux",
    "categoryId": "video",
    "name": "Flux",
    "company": "Black Forest Labs",
    "websiteUrl": "https://blackforestlabs.ai"
  },
  {
    "id": "t_runway",
    "categoryId": "video",
    "name": "Runway",
    "company": "Runway",
    "websiteUrl": "https://runwayml.com"
  },
  {
    "id": "t_luma",
    "categoryId": "video",
    "name": "Luma AI",
    "company": "Luma AI",
    "websiteUrl": "https://lumalabs.ai/dream-machine"
  },
  {
    "id": "t_kling",
    "categoryId": "video",
    "name": "Kling",
    "company": "Kuaishou",
    "websiteUrl": "https://kling.kuaishou.com"
  },
  {
    "id": "t_suno",
    "categoryId": "audio",
    "name": "Suno",
    "company": "Suno AI",
    "websiteUrl": "https://suno.com"
  },
  {
    "id": "t_udio",
    "categoryId": "audio",
    "name": "Udio",
    "company": "Udio",
    "websiteUrl": "https://udio.com"
  },
  {
    "id": "t_elevenlabs",
    "categoryId": "audio",
    "name": "ElevenLabs",
    "company": "ElevenLabs",
    "websiteUrl": "https://elevenlabs.io"
  },
  {
    "id": "t_cursor",
    "categoryId": "code",
    "name": "Cursor",
    "company": "Anysphere",
    "websiteUrl": "https://cursor.sh"
  },
  {
    "id": "t_windsurf",
    "categoryId": "code",
    "name": "Windsurf",
    "company": "Codeium",
    "websiteUrl": "https://codeium.com/windsurf"
  },
  {
    "id": "t_replit",
    "categoryId": "code",
    "name": "Replit",
    "company": "Replit",
    "websiteUrl": "https://replit.com"
  },
  {
    "id": "t_perplexity",
    "categoryId": "tasks",
    "name": "Perplexity",
    "company": "Perplexity AI",
    "websiteUrl": "https://perplexity.ai"
  },
  {
    "id": "t_characterai",
    "categoryId": "writing",
    "name": "Character.AI",
    "company": "Character.AI",
    "websiteUrl": "https://character.ai"
  },
  {
    "id": "t_mistralai",
    "categoryId": "code",
    "name": "Mistral AI",
    "company": "Mistral AI",
    "websiteUrl": "https://mistral.ai"
  },
  {
    "id": "t_qwen",
    "categoryId": "tasks",
    "name": "Alibaba",
    "company": "Alibaba",
    "websiteUrl": "https://qwenlm.github.io"
  },
  {
    "id": "t_cohere",
    "categoryId": "tasks",
    "name": "Cohere",
    "company": "Cohere",
    "websiteUrl": "https://cohere.com"
  }
];

export const TOOL_VERSIONS: ToolVersion[] = [
  {
    "id": "v_google_gemini_3_5_flash",
    "toolId": "t_google",
    "versionName": "3.5 Flash",
    "fullName": "Google: Gemini 3.5 Flash",
    "description": "Gemini 3.5 Flash is Google's high-efficiency multimodal model, bringing near-Pro level coding and reasoning at Flash-tier cost and speed. It is highly optimized for coding proficiency and parallel agentic execution...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1779193800,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_opus_4_7_fast",
    "toolId": "t_anthropic",
    "versionName": "Opus 4.7 Fast",
    "fullName": "Anthropic: Claude Opus 4.7 (Fast)",
    "description": "Fast-mode variant of [Opus 4.7](/anthropic/claude-opus-4.7) - identical capabilities with higher output speed at premium 6x pricing.\n\nLearn more in Anthropic's docs: https://platform.claude.com/docs/en/build-with-claude/fast-mode",
    "bestFor": "Deep logical & mathematical reasoning",
    "pricingModel": "Enterprise",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1778613011,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_3_1_flash_lite",
    "toolId": "t_google",
    "versionName": "3.1 Flash Lite",
    "fullName": "Google: Gemini 3.1 Flash Lite",
    "description": "Gemini 3.1 Flash Lite is Google’s GA high-efficiency multimodal model optimized for low-latency, high-volume workloads. It supports text, image, video, audio, and PDF inputs, and is designed for lightweight agentic...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1778168828,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_chat_latest",
    "toolId": "t_openai",
    "versionName": "Chat Latest",
    "fullName": "OpenAI: GPT Chat Latest",
    "description": "GPT Chat Latest points to OpenAI's stable API alias `chat-latest` that always resolves to the latest Instant chat model used in ChatGPT. As OpenAI rolls out new Instant model updates...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1778000212,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_x_ai_grok_4_3",
    "toolId": "t_xai",
    "versionName": "4.3",
    "fullName": "xAI: Grok 4.3",
    "description": "Grok 4.3 is a reasoning model from xAI. It accepts text and image inputs with text output, and is suited for agentic workflows, instruction-following tasks, and applications requiring high factual...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1777591821,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_medium_3_5",
    "toolId": "t_mistralai",
    "versionName": "Medium 3 5",
    "fullName": "Mistral: Mistral Medium 3.5",
    "description": "Mistral Medium 3.5 is a dense 128B instruction-following model from Mistral AI. It supports text and image inputs with text output, and is designed for agentic workflows, coding, and complex...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1777570439,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_5_plus_20260420",
    "toolId": "t_qwen",
    "versionName": "3.5 Plus 20260420",
    "fullName": "Qwen: Qwen3.5 Plus 2026-04-20",
    "description": "Qwen3.5 Plus (April 2026) is a large-scale multimodal language model from Alibaba. It accepts text, image, and video input and produces text output, with a 1M token context window. This...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1777261368,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen3_6_flash",
    "toolId": "t_qwen",
    "versionName": "3.6 Flash",
    "fullName": "Qwen: Qwen3.6 Flash",
    "description": "Qwen3.6 Flash is a fast, efficient language model from Alibaba's Qwen 3.6 series. It supports text, image, and video input with a 1M token context window. Tiered pricing kicks in...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Open Source",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1777261362,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen3_6_35b_a3b",
    "toolId": "t_qwen",
    "versionName": "3.6 35b A3b",
    "fullName": "Qwen: Qwen3.6 35B A3B",
    "description": "Qwen3.6-35B-A3B is an open-weight multimodal model from Alibaba Cloud with 35 billion total parameters and 3 billion active parameters per token. It uses a hybrid sparse mixture-of-experts architecture combining Gated...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1777260255,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_6_max_preview",
    "toolId": "t_qwen",
    "versionName": "3.6 Max Preview",
    "fullName": "Qwen: Qwen3.6 Max Preview",
    "description": "Qwen3.6-Max-Preview is a proprietary frontier model from Alibaba Cloud built on a sparse mixture-of-experts architecture with approximately 1 trillion total parameters. It is optimized for agentic coding, tool use, and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1777260242,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen3_6_27b",
    "toolId": "t_qwen",
    "versionName": "3.6 27b",
    "fullName": "Qwen: Qwen3.6 27B",
    "description": "Qwen3.6 27B is a dense 27-billion-parameter language model from the Qwen Team at Alibaba, released in April 2026. It features hybrid multimodal capabilities — accepting text, image, and video inputs...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1777255064,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_openai_gpt_5_5_pro",
    "toolId": "t_openai",
    "versionName": "5.5 Pro",
    "fullName": "OpenAI: GPT-5.5 Pro",
    "description": "GPT-5.5 Pro is OpenAI’s high-capability model optimized for deep reasoning and accuracy on complex, high-stakes workloads. It features a 1M+ token context window (922K input, 128K output) with support for...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Enterprise",
    "contextWindow": "1,050,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1777051896,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_5",
    "toolId": "t_openai",
    "versionName": "5.5",
    "fullName": "OpenAI: GPT-5.5",
    "description": "GPT-5.5 is OpenAI’s frontier model designed for complex professional workloads, building on GPT-5.4 with stronger reasoning, higher reliability, and improved token efficiency on hard tasks. It features a 1M+ token...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,050,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1777051893,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_v4_pro",
    "toolId": "t_deepseek",
    "versionName": "Deepseek V4 Pro",
    "fullName": "DeepSeek: DeepSeek V4 Pro",
    "description": "DeepSeek V4 Pro is a large-scale Mixture-of-Experts model from DeepSeek with 1.6T total parameters and 49B activated parameters, supporting a 1M-token context window. It is designed for advanced reasoning, coding,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1777000679,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_deepseek_deepseek_v4_flash_free",
    "toolId": "t_deepseek",
    "versionName": "Deepseek V4 Flash:free",
    "fullName": "DeepSeek: DeepSeek V4 Flash (free)",
    "description": "DeepSeek V4 Flash is an efficiency-optimized Mixture-of-Experts model from DeepSeek with 284B total parameters and 13B activated parameters, supporting a 1M-token context window. It is designed for fast inference and...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Free",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1777000666,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_v4_flash",
    "toolId": "t_deepseek",
    "versionName": "Deepseek V4 Flash",
    "fullName": "DeepSeek: DeepSeek V4 Flash",
    "description": "DeepSeek V4 Flash is an efficiency-optimized Mixture-of-Experts model from DeepSeek with 284B total parameters and 13B activated parameters, supporting a 1M-token context window. It is designed for fast inference and...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Open Source",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1777000666,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_4_image_2",
    "toolId": "t_openai",
    "versionName": "5.4 Image 2",
    "fullName": "OpenAI: GPT-5.4 Image 2",
    "description": "[GPT-5.4](https://openrouter.ai/openai/gpt-5.4) Image 2 combines OpenAI's GPT-5.4 model with state-of-the-art image generation capabilities from GPT Image 2. It enables rich multimodal workflows, allowing users to seamlessly move between reasoning, coding, and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "272,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1776797528,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_opus_4_7",
    "toolId": "t_anthropic",
    "versionName": "Opus 4.7",
    "fullName": "Anthropic: Claude Opus 4.7",
    "description": "Opus 4.7 is the next generation of Anthropic's Opus family, built for long-running, asynchronous agents. Building on the coding and agentic strengths of Opus 4.6, it delivers stronger performance on...",
    "bestFor": "Deep logical & mathematical reasoning",
    "pricingModel": "Pro",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1776351100,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_opus_4_6_fast",
    "toolId": "t_anthropic",
    "versionName": "Opus 4.6 Fast",
    "fullName": "Anthropic: Claude Opus 4.6 (Fast)",
    "description": "Fast-mode variant of [Opus 4.6](/anthropic/claude-opus-4.6) - identical capabilities with higher output speed at premium 6x pricing.\n\nLearn more in Anthropic's docs: https://platform.claude.com/docs/en/build-with-claude/fast-mode",
    "bestFor": "Deep logical & mathematical reasoning",
    "pricingModel": "Enterprise",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1775592472,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemma_4_26b_a4b_it_free",
    "toolId": "t_google",
    "versionName": "Gemma 4 26b A4b It:free",
    "fullName": "Google: Gemma 4 26B A4B  (free)",
    "description": "Gemma 4 26B A4B IT is an instruction-tuned Mixture-of-Experts (MoE) model from Google DeepMind. Despite 25.2B total parameters, only 3.8B activate per token during inference — delivering near-31B quality at...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Free",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1775227989,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemma_4_26b_a4b_it",
    "toolId": "t_google",
    "versionName": "Gemma 4 26b A4b It",
    "fullName": "Google: Gemma 4 26B A4B ",
    "description": "Gemma 4 26B A4B IT is an instruction-tuned Mixture-of-Experts (MoE) model from Google DeepMind. Despite 25.2B total parameters, only 3.8B activate per token during inference — delivering near-31B quality at...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1775227989,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemma_4_31b_it_free",
    "toolId": "t_google",
    "versionName": "Gemma 4 31b It:free",
    "fullName": "Google: Gemma 4 31B (free)",
    "description": "Gemma 4 31B Instruct is Google DeepMind's 30.7B dense multimodal model supporting text and image input with text output. Features a 256K token context window, configurable thinking/reasoning mode, native function...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Free",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1775148486,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemma_4_31b_it",
    "toolId": "t_google",
    "versionName": "Gemma 4 31b It",
    "fullName": "Google: Gemma 4 31B",
    "description": "Gemma 4 31B Instruct is Google DeepMind's 30.7B dense multimodal model supporting text and image input with text output. Features a 256K token context window, configurable thinking/reasoning mode, native function...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1775148486,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_6_plus",
    "toolId": "t_qwen",
    "versionName": "3.6 Plus",
    "fullName": "Qwen: Qwen3.6 Plus",
    "description": "Qwen 3.6 Plus builds on a hybrid architecture that combines efficient linear attention with sparse mixture-of-experts routing, enabling strong scalability and high-performance inference. Compared to the 3.5 series, it delivers...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1775133557,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_x_ai_grok_4_20_multi_agent",
    "toolId": "t_xai",
    "versionName": "4.20 Multi Agent",
    "fullName": "xAI: Grok 4.20 Multi-Agent",
    "description": "Grok 4.20 Multi-Agent is a variant of xAI’s Grok 4.20 designed for collaborative, agent-based workflows. Multiple agents operate in parallel to conduct deep research, coordinate tool use, and synthesize information...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "2,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1774979158,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_x_ai_grok_4_20",
    "toolId": "t_xai",
    "versionName": "4.20",
    "fullName": "xAI: Grok 4.20",
    "description": "Grok 4.20 is a reasoning model from xAI with industry-leading speed and agentic tool calling capabilities. It combines the lowest hallucination rate on the market with strict prompt adherance, delivering...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "2,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1774979019,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_google_lyria_3_pro_preview",
    "toolId": "t_google",
    "versionName": "Lyria 3 Pro Preview",
    "fullName": "Google: Lyria 3 Pro Preview",
    "description": "Full-length songs are priced at $0.08 per song. Lyria 3 is Google's family of music generation models, available through the Gemini API. With Lyria 3, you can generate high-quality, 48kHz...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Free",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1774907286,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_google_lyria_3_clip_preview",
    "toolId": "t_google",
    "versionName": "Lyria 3 Clip Preview",
    "fullName": "Google: Lyria 3 Clip Preview",
    "description": "30 second duration clips are priced at $0.04 per clip. Lyria 3 is Google's family of music generation models, available through the Gemini API. With Lyria 3, you can generate...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Free",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1774907255,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_4_nano",
    "toolId": "t_openai",
    "versionName": "5.4 Nano",
    "fullName": "OpenAI: GPT-5.4 Nano",
    "description": "GPT-5.4 nano is the most lightweight and cost-efficient variant of the GPT-5.4 family, optimized for speed-critical and high-volume tasks. It supports text and image inputs and is designed for low-latency...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1773748187,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_4_mini",
    "toolId": "t_openai",
    "versionName": "5.4 Mini",
    "fullName": "OpenAI: GPT-5.4 Mini",
    "description": "GPT-5.4 mini brings the core capabilities of GPT-5.4 to a faster, more efficient model optimized for high-throughput workloads. It supports text and image inputs with strong performance across reasoning, coding,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1773748178,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_small_2603",
    "toolId": "t_mistralai",
    "versionName": "Small 2603",
    "fullName": "Mistral: Mistral Small 4",
    "description": "Mistral Small 4 is the next major release in the Mistral Small family, unifying the capabilities of several flagship Mistral models into a single system. It combines strong reasoning from...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1773695685,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_5_9b",
    "toolId": "t_qwen",
    "versionName": "3.5 9b",
    "fullName": "Qwen: Qwen3.5-9B",
    "description": "Qwen3.5-9B is a multimodal foundation model from the Qwen3.5 family, designed to deliver strong reasoning, coding, and visual understanding in an efficient 9B-parameter architecture. It uses a unified vision-language design...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1773152396,
    "categoryIds": [
      "tasks",
      "code",
      "video"
    ]
  },
  {
    "id": "v_openai_gpt_5_4_pro",
    "toolId": "t_openai",
    "versionName": "5.4 Pro",
    "fullName": "OpenAI: GPT-5.4 Pro",
    "description": "GPT-5.4 Pro is OpenAI's most advanced model, building on GPT-5.4's unified architecture with enhanced reasoning capabilities for complex, high-stakes tasks. It features a 1M+ token context window (922K input, 128K...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Enterprise",
    "contextWindow": "1,050,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1772734366,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_4",
    "toolId": "t_openai",
    "versionName": "5.4",
    "fullName": "OpenAI: GPT-5.4",
    "description": "GPT-5.4 is OpenAI’s latest frontier model, unifying the Codex and GPT lines into a single system. It features a 1M+ token context window (922K input, 128K output) with support for...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,050,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1772734352,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_3_chat",
    "toolId": "t_openai",
    "versionName": "5.3 Chat",
    "fullName": "OpenAI: GPT-5.3 Chat",
    "description": "GPT-5.3 Chat is an update to ChatGPT's most-used model that makes everyday conversations smoother, more useful, and more directly helpful. It delivers more accurate answers with better contextualization and significantly...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1772564061,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_3_1_flash_lite_preview",
    "toolId": "t_google",
    "versionName": "3.1 Flash Lite Preview",
    "fullName": "Google: Gemini 3.1 Flash Lite Preview",
    "description": "Gemini 3.1 Flash Lite Preview is Google's high-efficiency model optimized for high-volume use cases. It outperforms Gemini 2.5 Flash Lite on overall quality and approaches Gemini 2.5 Flash performance across...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1772512673,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_3_1_flash_image_preview",
    "toolId": "t_google",
    "versionName": "3.1 Flash Image Preview",
    "fullName": "Google: Nano Banana 2 (Gemini 3.1 Flash Image Preview)",
    "description": "Gemini 3.1 Flash Image Preview, a.k.a. \"Nano Banana 2,\" is Google’s latest state of the art image generation and editing model, delivering Pro-level visual quality at Flash speed. It combines...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1772119558,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_5_35b_a3b",
    "toolId": "t_qwen",
    "versionName": "3.5 35b A3b",
    "fullName": "Qwen: Qwen3.5-35B-A3B",
    "description": "The Qwen3.5 Series 35B-A3B is a native vision-language model designed with a hybrid architecture that integrates linear attention mechanisms and a sparse mixture-of-experts model, achieving higher inference efficiency. Its overall...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1772053822,
    "categoryIds": [
      "tasks",
      "video"
    ]
  },
  {
    "id": "v_qwen_qwen3_5_27b",
    "toolId": "t_qwen",
    "versionName": "3.5 27b",
    "fullName": "Qwen: Qwen3.5-27B",
    "description": "The Qwen3.5 27B native vision-language Dense model incorporates a linear attention mechanism, delivering fast response times while balancing inference speed and performance. Its overall capabilities are comparable to those of...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1772053810,
    "categoryIds": [
      "tasks",
      "video"
    ]
  },
  {
    "id": "v_qwen_qwen3_5_122b_a10b",
    "toolId": "t_qwen",
    "versionName": "3.5 122b A10b",
    "fullName": "Qwen: Qwen3.5-122B-A10B",
    "description": "The Qwen3.5 122B-A10B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. In terms of...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1772053789,
    "categoryIds": [
      "tasks",
      "video"
    ]
  },
  {
    "id": "v_qwen_qwen3_5_flash_02_23",
    "toolId": "t_qwen",
    "versionName": "3.5 Flash 02 23",
    "fullName": "Qwen: Qwen3.5-Flash",
    "description": "The Qwen3.5 native vision-language Flash models are built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. Compared to the...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Open Source",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1772053776,
    "categoryIds": [
      "tasks",
      "video"
    ]
  },
  {
    "id": "v_google_gemini_3_1_pro_preview_customtools",
    "toolId": "t_google",
    "versionName": "3.1 Pro Preview Customtools",
    "fullName": "Google: Gemini 3.1 Pro Preview Custom Tools",
    "description": "Gemini 3.1 Pro Preview Custom Tools is a variant of Gemini 3.1 Pro that improves tool selection behavior by preventing overuse of a general bash tool when more efficient third-party...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,048,756 tokens",
    "platforms": "Web, API",
    "createdAt": 1772045923,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_3_codex",
    "toolId": "t_openai",
    "versionName": "5.3 Codex",
    "fullName": "OpenAI: GPT-5.3-Codex",
    "description": "GPT-5.3-Codex is OpenAI’s most advanced agentic coding model, combining the frontier software engineering performance of GPT-5.2-Codex with the broader reasoning and professional knowledge capabilities of GPT-5.2. It achieves state-of-the-art results...",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1771959164,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_3_1_pro_preview",
    "toolId": "t_google",
    "versionName": "3.1 Pro Preview",
    "fullName": "Google: Gemini 3.1 Pro Preview",
    "description": "Gemini 3.1 Pro Preview is Google’s frontier reasoning model, delivering enhanced software engineering performance, improved agentic reliability, and more efficient token usage across complex workflows. Building on the multimodal foundation...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1771509627,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_sonnet_4_6",
    "toolId": "t_anthropic",
    "versionName": "Sonnet 4.6",
    "fullName": "Anthropic: Claude Sonnet 4.6",
    "description": "Sonnet 4.6 is Anthropic's most capable Sonnet-class model yet, with frontier performance across coding, agents, and professional work. It excels at iterative development, complex codebase navigation, end-to-end project management with...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1771342990,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_5_plus_02_15",
    "toolId": "t_qwen",
    "versionName": "3.5 Plus 02 15",
    "fullName": "Qwen: Qwen3.5 Plus 2026-02-15",
    "description": "The Qwen3.5 native vision-language series Plus models are built on a hybrid architecture that integrates linear attention mechanisms with sparse mixture-of-experts models, achieving higher inference efficiency. In a variety of...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1771229416,
    "categoryIds": [
      "tasks",
      "video"
    ]
  },
  {
    "id": "v_qwen_qwen3_5_397b_a17b",
    "toolId": "t_qwen",
    "versionName": "3.5 397b A17b",
    "fullName": "Qwen: Qwen3.5 397B A17B",
    "description": "The Qwen3.5 series 397B-A17B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. It delivers...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1771223018,
    "categoryIds": [
      "tasks",
      "video"
    ]
  },
  {
    "id": "v_qwen_qwen3_max_thinking",
    "toolId": "t_qwen",
    "versionName": "3 Max Thinking",
    "fullName": "Qwen: Qwen3 Max Thinking",
    "description": "Qwen3-Max-Thinking is the flagship reasoning model in the Qwen3 series, designed for high-stakes cognitive tasks that require deep, multi-step reasoning. By significantly scaling model capacity and reinforcement learning compute, it...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1770671901,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_opus_4_6",
    "toolId": "t_anthropic",
    "versionName": "Opus 4.6",
    "fullName": "Anthropic: Claude Opus 4.6",
    "description": "Opus 4.6 is Anthropic’s strongest model for coding and long-running professional tasks. It is built for agents that operate across entire workflows rather than single prompts, making it especially effective...",
    "bestFor": "Deep logical & mathematical reasoning",
    "pricingModel": "Pro",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1770219050,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_coder_next",
    "toolId": "t_qwen",
    "versionName": "3 Coder Next",
    "fullName": "Qwen: Qwen3 Coder Next",
    "description": "Qwen3-Coder-Next is an open-weight causal language model optimized for coding agents and local development workflows. It uses a sparse MoE design with 80B total parameters and only 3B activated per...",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1770164101,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_openai_gpt_audio",
    "toolId": "t_openai",
    "versionName": "Audio",
    "fullName": "OpenAI: GPT Audio",
    "description": "The gpt-audio model is OpenAI's first generally available audio model. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Audio is priced...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1768862569,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_audio_mini",
    "toolId": "t_openai",
    "versionName": "Audio Mini",
    "fullName": "OpenAI: GPT Audio Mini",
    "description": "A cost-efficient version of GPT Audio. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Input is priced at $0.60 per million...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1768859419,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_2_codex",
    "toolId": "t_openai",
    "versionName": "5.2 Codex",
    "fullName": "OpenAI: GPT-5.2-Codex",
    "description": "GPT-5.2-Codex is an upgraded version of GPT-5.1-Codex optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks....",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1768409315,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_gpt_54_pro",
    "toolId": "t_openai",
    "versionName": "5.4 Pro",
    "fullName": "ChatGPT-5.4 Pro",
    "description": "Breakthrough model featuring native computer use and agentic UI navigation without human intervention. Reaches a new paradigm in reasoning with an 18% reduction in factual errors and native Codex-level coding capability.",
    "bestFor": "Native computer use and UI navigation",
    "pricingModel": "Enterprise",
    "contextWindow": "2M tokens",
    "platforms": "Web, API, Desktop",
    "createdAt": 1767225600,
    "categoryIds": [
      "code"
    ]
  },
  {
    "id": "v_gpt_o3_pro",
    "toolId": "t_openai",
    "versionName": "o3 Pro",
    "fullName": "ChatGPT o3 Pro",
    "description": "Deep reasoning model specializing in complex logic, mathematics, and long-form coding via Chain-of-Thought processing before answering.",
    "bestFor": "Deep mathematical and coding reasoning",
    "pricingModel": "Pro",
    "contextWindow": "200k tokens",
    "platforms": "Web, API",
    "createdAt": 1767225600,
    "categoryIds": [
      "code"
    ]
  },
  {
    "id": "v_gpt_oss_120b",
    "toolId": "t_openai",
    "versionName": "OSS 120B",
    "fullName": "GPT-OSS 120B",
    "description": "OpenAI's open-weights model targeted at local deployments with high security requirements. Offers adjustable reasoning effort.",
    "bestFor": "Secure local deployment in VPCs",
    "pricingModel": "Open Source",
    "contextWindow": "128k tokens",
    "platforms": "Local, API",
    "createdAt": 1767225600,
    "categoryIds": [
      "code"
    ]
  },
  {
    "id": "v_gemini_31_pro",
    "toolId": "t_google",
    "versionName": "3.1 Pro",
    "fullName": "Gemini 3.1 Pro",
    "description": "Google's cutting-edge flagship capable of \"Vibe coding\" and multi-step physical planning. Scored 100% on AIME 2025 high-school math tests and 91.9% on GPQA Diamond.",
    "bestFor": "Vibe coding & physical agentic actions",
    "pricingModel": "Pro",
    "contextWindow": "2M+ tokens",
    "platforms": "Web, Vertex AI, API",
    "createdAt": 1767225600,
    "categoryIds": [
      "code"
    ]
  },
  {
    "id": "v_gemini_25_flash",
    "toolId": "t_google",
    "versionName": "2.5 Flash",
    "fullName": "Gemini 2.5 Flash",
    "description": "High-speed model balancing latency with capable reasoning. Integrates real-time audio and conversational processing.",
    "bestFor": "Low-latency agentic conversations",
    "pricingModel": "Free",
    "contextWindow": "1M tokens",
    "platforms": "Web, API",
    "createdAt": 1767225600,
    "categoryIds": [
      "code"
    ]
  },
  {
    "id": "v_claude_46_opus",
    "toolId": "t_anthropic",
    "versionName": "Opus 4.6",
    "fullName": "Claude Opus 4.6",
    "description": "Anthropic's gold-standard model featuring extended and adaptive thinking. Automatically scales processing resources dynamically based on prompt complexity.",
    "bestFor": "Logical agency & reasoning orchestration",
    "pricingModel": "Enterprise",
    "contextWindow": "N/A",
    "platforms": "Web, API, AWS Bedrock",
    "createdAt": 1767225600,
    "categoryIds": [
      "code"
    ]
  },
  {
    "id": "v_claude_46_sonnet",
    "toolId": "t_anthropic",
    "versionName": "Sonnet 4.6",
    "fullName": "Claude Sonnet 4.6",
    "description": "The definitive choice for software engineers. Shattered SWE Bench coding records with an 82% problem resolution rate. Masterful usage of Artifacts.",
    "bestFor": "Advanced Agentic Coding",
    "pricingModel": "Pro",
    "contextWindow": "N/A",
    "platforms": "Web, API, IDEs",
    "createdAt": 1767225600,
    "categoryIds": [
      "code"
    ]
  },
  {
    "id": "v_llama4_scout",
    "toolId": "t_meta",
    "versionName": "Scout 17B-16E",
    "fullName": "Llama 4 Scout",
    "description": "A Mixture-of-Experts architecture featuring a record-breaking 10 million token context window. Processes at an astounding 2600 tokens per second on consumer hardware via FP8 quantization.",
    "bestFor": "Ultra-long context repository indexing",
    "pricingModel": "Open Source",
    "contextWindow": "10M tokens",
    "platforms": "Local, Cloud VMs",
    "createdAt": 1767225600,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_v3",
    "toolId": "t_deepseek",
    "versionName": "V3 Base",
    "fullName": "DeepSeek V3",
    "description": "A massive 671B parameter model operating on only 37B active parameters per token. Shattered global pricing monopolies by drastically reducing API processing costs.",
    "bestFor": "Cost-effective scalable reasoning",
    "pricingModel": "Open Source",
    "contextWindow": "256k tokens",
    "platforms": "API, Local",
    "createdAt": 1767225600,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_r1",
    "toolId": "t_deepseek",
    "versionName": "R1",
    "fullName": "DeepSeek R1",
    "description": "An open-source (MIT License) reasoning model trained via strict Reinforcement Learning (RL), bringing GPT-4.5 level logic processing out of localized walls.",
    "bestFor": "Open-source logic validation",
    "pricingModel": "Open Source",
    "contextWindow": "64k tokens",
    "platforms": "Local, Cloud VMs",
    "createdAt": 1767225600,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_mistral_large_3",
    "toolId": "t_mistral",
    "versionName": "Large 3",
    "fullName": "Mistral Large 3",
    "description": "675B parameter flagship compliant with European AI act regulations. Superb multilingual agentic capability with a minimal computational footprint.",
    "bestFor": "Sovereign and regulated AI processing",
    "pricingModel": "Enterprise",
    "contextWindow": "256k tokens",
    "platforms": "API, Azure, Local",
    "createdAt": 1767225600,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_codestral_2508",
    "toolId": "t_mistral",
    "versionName": "Codestral 25.08",
    "fullName": "Codestral 25.08",
    "description": "Masterful Fill-in-the-Middle (FIM) model that decreases continuous coding errors by 50% compared to previous generations. Fully deployable within isolated networks.",
    "bestFor": "Private VPC IDE autocompletion",
    "pricingModel": "Open Source",
    "contextWindow": "N/A",
    "platforms": "Local, IDE Extensions",
    "createdAt": 1767225600,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_35_397b",
    "toolId": "t_alibaba",
    "versionName": "3.5 397B",
    "fullName": "Qwen 3.5 397B",
    "description": "Alibaba's absolute beast of an open-weights model, fully integrating multimodal visual understanding with agentic reasoning out-of-the-box.",
    "bestFor": "Heavy local multimodal agency",
    "pricingModel": "Open Source",
    "contextWindow": "N/A",
    "platforms": "Local",
    "createdAt": 1767225600,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_kimi_k25",
    "toolId": "t_moonshot",
    "versionName": "K2.5",
    "fullName": "Kimi K2.5",
    "description": "Features \"Agent Swarm\" architecture to coordinate 100 parallel sub-agents to solve one massive problem. Excels at generating pixel-perfect UI code directly from mockups or demo videos.",
    "bestFor": "Visual coding & Swarm orchestration",
    "pricingModel": "Pro",
    "contextWindow": "Large",
    "platforms": "Web, API",
    "createdAt": 1767225600,
    "categoryIds": [
      "code"
    ]
  },
  {
    "id": "v_grok_41",
    "toolId": "t_xai",
    "versionName": "4.1 Thinking",
    "fullName": "Grok 4.1",
    "description": "Integrated flawlessly with X, featuring real-time reality comprehension, vastly improved Emotional Quotient (EQ), and 64% boost in user preference blind-tests.",
    "bestFor": "Real-time social data ingestion",
    "pricingModel": "Pro",
    "contextWindow": "N/A",
    "platforms": "Web, Mobile (X App)",
    "createdAt": 1767225600,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_nano_banana_2",
    "toolId": "t_nano_banana",
    "versionName": "2",
    "fullName": "Nano Banana 2",
    "description": "Google's Gemini 3.1 Flash Image. Incredibly fast generation with multi-lingual typography support. Retains unbreakable consistency across 5 characters and 14 distinct objects within 4K renders.",
    "bestFor": "Perfect typographics and localized visuals",
    "pricingModel": "Free",
    "contextWindow": "N/A",
    "platforms": "Web",
    "createdAt": 1767225600,
    "categoryIds": [
      "video"
    ]
  },
  {
    "id": "v_midjourney_v8",
    "toolId": "t_midjourney",
    "versionName": "V8",
    "fullName": "Midjourney V8",
    "description": "The unquestioned leader in artistic cinematography. V8 deployed new massive server clusters for hyper-detailed depth simulations and perfect skin/hand anatomy.",
    "bestFor": "Artistic cinema & photography simulation",
    "pricingModel": "Pro",
    "contextWindow": "N/A",
    "platforms": "Discord, Web",
    "createdAt": 1767225600,
    "categoryIds": [
      "video"
    ]
  },
  {
    "id": "v_flux_2_pro",
    "toolId": "t_flux",
    "versionName": "Flux.2 Pro",
    "fullName": "Flux.2 Pro",
    "description": "Permits multi-reference control inputs for determining styles versus subject identities. Reaches 4MP resolution photorealism natively on 16GB VRAM cards.",
    "bestFor": "Local photorealistic synthesis",
    "pricingModel": "Open Source",
    "contextWindow": "N/A",
    "platforms": "Local, UI nodes",
    "createdAt": 1767225600,
    "categoryIds": [
      "video"
    ]
  },
  {
    "id": "v_runway_gen45",
    "toolId": "t_runway",
    "versionName": "Gen-4.5",
    "fullName": "Runway Gen-4.5",
    "description": "Transformed from a video generator into a General World Model. Features pixel-perfect physics simulation, native environmental audio (Foley), and infinite multi-shot editing.",
    "bestFor": "Native audio VFX physics simulation",
    "pricingModel": "Enterprise",
    "contextWindow": "N/A",
    "platforms": "Web, API",
    "createdAt": 1767225600,
    "categoryIds": [
      "video"
    ]
  },
  {
    "id": "v_luma_ray314",
    "toolId": "t_luma",
    "versionName": "Ray 3.14",
    "fullName": "Luma Ray 3.14",
    "description": "First reasoning-driven video editor producing true 16bit HDR renders. Allows direct character identity planting mapped perfectly onto existing live-action 1080p clips.",
    "bestFor": "Post-production and HDR color grading",
    "pricingModel": "Pro",
    "contextWindow": "N/A",
    "platforms": "Web",
    "createdAt": 1767225600,
    "categoryIds": [
      "video"
    ]
  },
  {
    "id": "v_kling_26",
    "toolId": "t_kling",
    "versionName": "2.6 Pro",
    "fullName": "Kling 2.6 Pro",
    "description": "Achieves the impossible by generating perfectly lip-synced video alongside human voices, all while handling continuous complex movement tracking for up to 30 seconds.",
    "bestFor": "Lip-synced audiovisual generation",
    "pricingModel": "Pro",
    "contextWindow": "N/A",
    "platforms": "Web",
    "createdAt": 1767225600,
    "categoryIds": [
      "video"
    ]
  },
  {
    "id": "v_suno_v5",
    "toolId": "t_suno",
    "versionName": "V5 Studio",
    "fullName": "Suno V5",
    "description": "Transforms text completely into a full studio DAW output workspace. Supports high-fidelity MIDI extraction, separated stems, and advanced emotional expression.",
    "bestFor": "Studio music generation & stem extraction",
    "pricingModel": "Pro",
    "contextWindow": "N/A",
    "platforms": "Web",
    "createdAt": 1767225600,
    "categoryIds": [
      "audio"
    ]
  },
  {
    "id": "v_udio_26",
    "toolId": "t_udio",
    "versionName": "Udio 2026",
    "fullName": "Udio 2026",
    "description": "Empowered by chat-to-edit capabilities (Meloty AI) enabling users to literally text changes into the song. Legally sources via the Merlin collective.",
    "bestFor": "Chat-driven music editing & tracking",
    "pricingModel": "Pro",
    "contextWindow": "N/A",
    "platforms": "Web",
    "createdAt": 1767225600,
    "categoryIds": [
      "audio"
    ]
  },
  {
    "id": "v_eleven_v3_voice",
    "toolId": "t_elevenlabs",
    "versionName": "Eleven v3",
    "fullName": "ElevenLabs v3",
    "description": "Allows purely textual voice design (e.g. \"Scratchy old witch\") without traditional voice cloning. Includes in-line audio tags like [whispers] and highly complex pronunciation control.",
    "bestFor": "Zero-shot voice design & audio tags",
    "pricingModel": "Enterprise",
    "contextWindow": "N/A",
    "platforms": "Web, API",
    "createdAt": 1767225600,
    "categoryIds": [
      "audio"
    ]
  },
  {
    "id": "v_voxtral_realtime",
    "toolId": "t_mistral",
    "versionName": "Voxtral Realtime",
    "fullName": "Voxtral Realtime",
    "description": "Open-source 4B parameter model built strictly for real-time customer service voice streaming. Experiences under 200ms latency without skipping.",
    "bestFor": "Real-time conversational streaming",
    "pricingModel": "Open Source",
    "contextWindow": "N/A",
    "platforms": "Local, API",
    "createdAt": 1767225600,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_cursor_26",
    "toolId": "t_cursor",
    "versionName": "2026",
    "fullName": "Cursor",
    "description": "The default IDE for the AI era. Autonomously reads across thousands of files to apply full architecture refactors directly using tools like Claude 4.6.",
    "bestFor": "Autonomous codebase-wide refactors",
    "pricingModel": "Pro",
    "contextWindow": "Large via API",
    "platforms": "Desktop IDE",
    "createdAt": 1767225600,
    "categoryIds": [
      "code"
    ]
  },
  {
    "id": "v_replit_agent3",
    "toolId": "t_replit",
    "versionName": "Agent 3",
    "fullName": "Replit Agent 3",
    "description": "Perfect tool for non-engineers. Translates a raw text prompt straight into a functional deployed application, complete with database provisioning.",
    "bestFor": "Text-to-Prototype zero-setup deployment",
    "pricingModel": "Pro",
    "contextWindow": "N/A",
    "platforms": "Web IDE",
    "createdAt": 1767225600,
    "categoryIds": [
      "code"
    ]
  },
  {
    "id": "v_sonar_council",
    "toolId": "t_perplexity",
    "versionName": "Model Council",
    "fullName": "Perplexity Model Council",
    "description": "Runs a single query across multiple apex models (GPT-5.4, Claude 4.6, Gemini 3) simultaneously to calculate a consensus. Nullifies hallucination risks for high-stakes enterprise decisions.",
    "bestFor": "High-stakes consensus research",
    "pricingModel": "Enterprise",
    "contextWindow": "Large",
    "platforms": "Web, API",
    "createdAt": 1767225600,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_character_pip",
    "toolId": "t_characterai",
    "versionName": "PipSqueak",
    "fullName": "Character.ai PipSqueak",
    "description": "Companions possessing long-term emotional memory and interactive multi-modal real-time audio chat capabilities.",
    "bestFor": "Virtual companionship and roleplay",
    "pricingModel": "Free",
    "contextWindow": "Extensive",
    "platforms": "Web, App",
    "createdAt": 1767225600,
    "categoryIds": [
      "writing"
    ]
  },
  {
    "id": "v_google_gemini_3_flash_preview",
    "toolId": "t_google",
    "versionName": "3 Flash Preview",
    "fullName": "Google: Gemini 3 Flash Preview",
    "description": "Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1765987078,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_2_chat",
    "toolId": "t_openai",
    "versionName": "5.2 Chat",
    "fullName": "OpenAI: GPT-5.2 Chat",
    "description": "GPT-5.2 Chat (AKA Instant) is the fast, lightweight member of the 5.2 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1765389783,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_2_pro",
    "toolId": "t_openai",
    "versionName": "5.2 Pro",
    "fullName": "OpenAI: GPT-5.2 Pro",
    "description": "GPT-5.2 Pro is OpenAI’s most advanced model, offering major improvements in agentic coding and long context performance over GPT-5 Pro. It is optimized for complex tasks that require step-by-step reasoning,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Enterprise",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1765389780,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_2",
    "toolId": "t_openai",
    "versionName": "5.2",
    "fullName": "OpenAI: GPT-5.2",
    "description": "GPT-5.2 is the latest frontier-grade model in the GPT-5 series, offering stronger agentic and long context perfomance compared to GPT-5.1. It uses adaptive reasoning to allocate computation dynamically, responding quickly...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1765389775,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_devstral_2512",
    "toolId": "t_mistralai",
    "versionName": "Devstral 2512",
    "fullName": "Mistral: Devstral 2 2512",
    "description": "Devstral 2 is a state-of-the-art open-source model by Mistral AI specializing in agentic coding. It is a 123B-parameter dense transformer model supporting a 256K context window. Devstral 2 supports exploring...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1765285419,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_1_codex_max",
    "toolId": "t_openai",
    "versionName": "5.1 Codex Max",
    "fullName": "OpenAI: GPT-5.1-Codex-Max",
    "description": "GPT-5.1-Codex-Max is OpenAI’s latest agentic coding model, designed for long-running, high-context software development tasks. It is based on an updated version of the 5.1 reasoning stack and trained on agentic...",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1764878934,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_ministral_14b_2512",
    "toolId": "t_mistralai",
    "versionName": "Ministral 14b 2512",
    "fullName": "Mistral: Ministral 3 14B 2512",
    "description": "The largest model in the Ministral 3 family, Ministral 3 14B offers frontier capabilities and performance comparable to its larger Mistral Small 3.2 24B counterpart. A powerful and efficient language...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1764681735,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_ministral_8b_2512",
    "toolId": "t_mistralai",
    "versionName": "Ministral 8b 2512",
    "fullName": "Mistral: Ministral 3 8B 2512",
    "description": "A balanced model in the Ministral 3 family, Ministral 3 8B is a powerful, efficient tiny language model with vision capabilities.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1764681654,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_ministral_3b_2512",
    "toolId": "t_mistralai",
    "versionName": "Ministral 3b 2512",
    "fullName": "Mistral: Ministral 3 3B 2512",
    "description": "The smallest model in the Ministral 3 family, Ministral 3 3B is a powerful, efficient tiny language model with vision capabilities.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1764681560,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_large_2512",
    "toolId": "t_mistralai",
    "versionName": "Large 2512",
    "fullName": "Mistral: Mistral Large 3 2512",
    "description": "Mistral Large 3 2512 is Mistral’s most capable model to date, featuring a sparse mixture-of-experts architecture with 41B active parameters (675B total), and released under the Apache 2.0 license.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1764624472,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_v3_2_speciale",
    "toolId": "t_deepseek",
    "versionName": "Deepseek V3.2 Speciale",
    "fullName": "DeepSeek: DeepSeek V3.2 Speciale",
    "description": "DeepSeek-V3.2-Speciale is a high-compute variant of DeepSeek-V3.2 optimized for maximum reasoning and agentic performance. It builds on DeepSeek Sparse Attention (DSA) for efficient long-context processing, then scales post-training reinforcement learning...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "163,840 tokens",
    "platforms": "Web, API",
    "createdAt": 1764594837,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_v3_2",
    "toolId": "t_deepseek",
    "versionName": "Deepseek V3.2",
    "fullName": "DeepSeek: DeepSeek V3.2",
    "description": "DeepSeek-V3.2 is a large language model designed to harmonize high computational efficiency with strong reasoning and agentic tool-use performance. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1764594642,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_opus_4_5",
    "toolId": "t_anthropic",
    "versionName": "Opus 4.5",
    "fullName": "Anthropic: Claude Opus 4.5",
    "description": "Claude Opus 4.5 is Anthropic’s frontier reasoning model optimized for complex software engineering, agentic workflows, and long-horizon computer use. It offers strong multimodal capabilities, competitive performance across real-world coding and...",
    "bestFor": "Deep logical & mathematical reasoning",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1764010580,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_3_pro_image_preview",
    "toolId": "t_google",
    "versionName": "3 Pro Image Preview",
    "fullName": "Google: Nano Banana Pro (Gemini 3 Pro Image Preview)",
    "description": "Nano Banana Pro is Google’s most advanced image-generation and editing model, built on Gemini 3 Pro. It extends the original Nano Banana with significantly improved multimodal reasoning, real-world grounding, and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "65,536 tokens",
    "platforms": "Web, API",
    "createdAt": 1763653797,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_1",
    "toolId": "t_openai",
    "versionName": "5.1",
    "fullName": "OpenAI: GPT-5.1",
    "description": "GPT-5.1 is the latest frontier-grade model in the GPT-5 series, offering stronger general-purpose reasoning, improved instruction adherence, and a more natural conversational style compared to GPT-5. It uses adaptive reasoning...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1763060305,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_1_chat",
    "toolId": "t_openai",
    "versionName": "5.1 Chat",
    "fullName": "OpenAI: GPT-5.1 Chat",
    "description": "GPT-5.1 Chat (AKA Instant is the fast, lightweight member of the 5.1 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1763060302,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_1_codex",
    "toolId": "t_openai",
    "versionName": "5.1 Codex",
    "fullName": "OpenAI: GPT-5.1-Codex",
    "description": "GPT-5.1-Codex is a specialized version of GPT-5.1 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks....",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1763060298,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_1_codex_mini",
    "toolId": "t_openai",
    "versionName": "5.1 Codex Mini",
    "fullName": "OpenAI: GPT-5.1-Codex-Mini",
    "description": "GPT-5.1-Codex-Mini is a smaller and faster version of GPT-5.1-Codex",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1763057820,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_voxtral_small_24b_2507",
    "toolId": "t_mistralai",
    "versionName": "Voxtral Small 24b 2507",
    "fullName": "Mistral: Voxtral Small 24B 2507",
    "description": "Voxtral Small is an enhancement of Mistral Small 3, incorporating state-of-the-art audio input capabilities while retaining best-in-class text performance. It excels at speech transcription, translation and audio understanding. Input audio...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "32,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1761835144,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_oss_safeguard_20b",
    "toolId": "t_openai",
    "versionName": "Oss Safeguard 20b",
    "fullName": "OpenAI: gpt-oss-safeguard-20b",
    "description": "gpt-oss-safeguard-20b is a safety reasoning model from OpenAI built upon gpt-oss-20b. This open-weight, 21B-parameter Mixture-of-Experts (MoE) model offers lower latency for safety tasks like content classification, LLM filtering, and trust...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1761752836,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_vl_32b_instruct",
    "toolId": "t_qwen",
    "versionName": "3 Vl 32b Instruct",
    "fullName": "Qwen: Qwen3 VL 32B Instruct",
    "description": "Qwen3-VL-32B-Instruct is a large-scale multimodal vision-language model designed for high-precision understanding and reasoning across text, images, and video. With 32 billion parameters, it combines deep visual perception with advanced text...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1761231332,
    "categoryIds": [
      "tasks",
      "code",
      "video"
    ]
  },
  {
    "id": "v_openai_gpt_5_image_mini",
    "toolId": "t_openai",
    "versionName": "5 Image Mini",
    "fullName": "OpenAI: GPT-5 Image Mini",
    "description": "GPT-5 Image Mini combines OpenAI's advanced language capabilities, powered by [GPT-5 Mini](https://openrouter.ai/openai/gpt-5-mini), with GPT Image 1 Mini for efficient image generation. This natively multimodal model features superior instruction following, text...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1760624583,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_haiku_4_5",
    "toolId": "t_anthropic",
    "versionName": "Haiku 4.5",
    "fullName": "Anthropic: Claude Haiku 4.5",
    "description": "Claude Haiku 4.5 is Anthropic’s fastest and most efficient model, delivering near-frontier intelligence at a fraction of the cost and latency of larger Claude models. Matching Claude Sonnet 4’s performance...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1760547638,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_vl_8b_thinking",
    "toolId": "t_qwen",
    "versionName": "3 Vl 8b Thinking",
    "fullName": "Qwen: Qwen3 VL 8B Thinking",
    "description": "Qwen3-VL-8B-Thinking is the reasoning-optimized variant of the Qwen3-VL-8B multimodal model, designed for advanced visual and textual reasoning across complex scenes, documents, and temporal sequences. It integrates enhanced multimodal alignment and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "256,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1760463746,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_vl_8b_instruct",
    "toolId": "t_qwen",
    "versionName": "3 Vl 8b Instruct",
    "fullName": "Qwen: Qwen3 VL 8B Instruct",
    "description": "Qwen3-VL-8B-Instruct is a multimodal vision-language model from the Qwen3-VL series, built for high-fidelity understanding and reasoning across text, images, and video. It features improved multimodal fusion with Interleaved-MRoPE for long-horizon...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "256,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1760463308,
    "categoryIds": [
      "tasks",
      "code",
      "video"
    ]
  },
  {
    "id": "v_openai_gpt_5_image",
    "toolId": "t_openai",
    "versionName": "5 Image",
    "fullName": "OpenAI: GPT-5 Image",
    "description": "[GPT-5](https://openrouter.ai/openai/gpt-5) Image combines OpenAI's GPT-5 model with state-of-the-art image generation capabilities. It offers major improvements in reasoning, code quality, and user experience while incorporating GPT Image 1's superior instruction following,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1760447986,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_openai_o3_deep_research",
    "toolId": "t_openai",
    "versionName": "O3 Deep Research",
    "fullName": "OpenAI: o3 Deep Research",
    "description": "o3-deep-research is OpenAI's advanced model for deep research, designed to tackle complex, multi-step research tasks.\n\nNote: This model always uses the 'web_search' tool which adds additional cost.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1760129661,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_o4_mini_deep_research",
    "toolId": "t_openai",
    "versionName": "O4 Mini Deep Research",
    "fullName": "OpenAI: o4 Mini Deep Research",
    "description": "o4-mini-deep-research is OpenAI's faster, more affordable deep research model—ideal for tackling complex, multi-step research tasks.\n\nNote: This model always uses the 'web_search' tool which adds additional cost.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1760129642,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_2_5_flash_image",
    "toolId": "t_google",
    "versionName": "2.5 Flash Image",
    "fullName": "Google: Nano Banana (Gemini 2.5 Flash Image)",
    "description": "Gemini 2.5 Flash Image, a.k.a. \"Nano Banana,\" is now generally available. It is a state of the art image generation model with contextual understanding. It is capable of image generation,...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "32,768 tokens",
    "platforms": "Web, API",
    "createdAt": 1759870431,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_vl_30b_a3b_thinking",
    "toolId": "t_qwen",
    "versionName": "3 Vl 30b A3b Thinking",
    "fullName": "Qwen: Qwen3 VL 30B A3B Thinking",
    "description": "Qwen3-VL-30B-A3B-Thinking is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Thinking variant enhances reasoning in STEM, math, and complex tasks. It excels...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1759794479,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen3_vl_30b_a3b_instruct",
    "toolId": "t_qwen",
    "versionName": "3 Vl 30b A3b Instruct",
    "fullName": "Qwen: Qwen3 VL 30B A3B Instruct",
    "description": "Qwen3-VL-30B-A3B-Instruct is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Instruct variant optimizes instruction-following for general multimodal tasks. It excels in perception...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1759794476,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_openai_gpt_5_pro",
    "toolId": "t_openai",
    "versionName": "5 Pro",
    "fullName": "OpenAI: GPT-5 Pro",
    "description": "GPT-5 Pro is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Enterprise",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1759776663,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_sonnet_4_5",
    "toolId": "t_anthropic",
    "versionName": "Sonnet 4.5",
    "fullName": "Anthropic: Claude Sonnet 4.5",
    "description": "Claude Sonnet 4.5 is Anthropic’s most advanced Sonnet model to date, optimized for real-world agents and coding workflows. It delivers state-of-the-art performance on coding benchmarks such as SWE-bench Verified, with...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1759161676,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_v3_2_exp",
    "toolId": "t_deepseek",
    "versionName": "Deepseek V3.2 Exp",
    "fullName": "DeepSeek: DeepSeek V3.2 Exp",
    "description": "DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "163,840 tokens",
    "platforms": "Web, API",
    "createdAt": 1759150481,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_2_5_flash_lite_preview_09_2025",
    "toolId": "t_google",
    "versionName": "2.5 Flash Lite Preview 09 2025",
    "fullName": "Google: Gemini 2.5 Flash Lite Preview 09-2025",
    "description": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1758819686,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_vl_235b_a22b_thinking",
    "toolId": "t_qwen",
    "versionName": "3 Vl 235b A22b Thinking",
    "fullName": "Qwen: Qwen3 VL 235B A22B Thinking",
    "description": "Qwen3-VL-235B-A22B Thinking is a multimodal model that unifies strong text generation with visual understanding across images and video. The Thinking model is optimized for multimodal reasoning in STEM and math....",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1758668690,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen3_vl_235b_a22b_instruct",
    "toolId": "t_qwen",
    "versionName": "3 Vl 235b A22b Instruct",
    "fullName": "Qwen: Qwen3 VL 235B A22B Instruct",
    "description": "Qwen3-VL-235B-A22B Instruct is an open-weight multimodal model that unifies strong text generation with visual understanding across images and video. The Instruct model targets general vision-language use (VQA, document parsing, chart/table...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1758668687,
    "categoryIds": [
      "tasks",
      "code",
      "video"
    ]
  },
  {
    "id": "v_qwen_qwen3_max",
    "toolId": "t_qwen",
    "versionName": "3 Max",
    "fullName": "Qwen: Qwen3 Max",
    "description": "Qwen3-Max is an updated release built on the Qwen3 series, offering major improvements in reasoning, instruction following, multilingual support, and long-tail knowledge coverage compared to the January 2025 version. It...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1758662808,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_coder_plus",
    "toolId": "t_qwen",
    "versionName": "3 Coder Plus",
    "fullName": "Qwen: Qwen3 Coder Plus",
    "description": "Qwen3 Coder Plus is Alibaba's proprietary version of the Open Source Qwen3 Coder 480B A35B. It is a powerful coding agent model specializing in autonomous programming via tool calling and...",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Open Source",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1758662707,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_openai_gpt_5_codex",
    "toolId": "t_openai",
    "versionName": "5 Codex",
    "fullName": "OpenAI: GPT-5 Codex",
    "description": "GPT-5-Codex is a specialized version of GPT-5 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks....",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1758643403,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_v3_1_terminus",
    "toolId": "t_deepseek",
    "versionName": "Deepseek V3.1 Terminus",
    "fullName": "DeepSeek: DeepSeek V3.1 Terminus",
    "description": "DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model's original capabilities while addressing issues reported by users, including language consistency and agent capabilities, further optimizing the model's...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "163,840 tokens",
    "platforms": "Web, API",
    "createdAt": 1758548275,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_coder_flash",
    "toolId": "t_qwen",
    "versionName": "3 Coder Flash",
    "fullName": "Qwen: Qwen3 Coder Flash",
    "description": "Qwen3 Coder Flash is Alibaba's fast and cost efficient version of their proprietary Qwen3 Coder Plus. It is a powerful coding agent model specializing in autonomous programming via tool calling...",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Open Source",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1758115536,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen3_next_80b_a3b_thinking",
    "toolId": "t_qwen",
    "versionName": "3 Next 80b A3b Thinking",
    "fullName": "Qwen: Qwen3 Next 80B A3B Thinking",
    "description": "Qwen3-Next-80B-A3B-Thinking is a reasoning-first chat model in the Qwen3-Next line that outputs structured “thinking” traces by default. It’s designed for hard multi-step problems; math proofs, code synthesis/debugging, logic, and agentic...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1757612284,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen3_next_80b_a3b_instruct_free",
    "toolId": "t_qwen",
    "versionName": "3 Next 80b A3b Instruct:free",
    "fullName": "Qwen: Qwen3 Next 80B A3B Instruct (free)",
    "description": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowledge QA, and multilingual...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Free",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1757612213,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen3_next_80b_a3b_instruct",
    "toolId": "t_qwen",
    "versionName": "3 Next 80b A3b Instruct",
    "fullName": "Qwen: Qwen3 Next 80B A3B Instruct",
    "description": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowledge QA, and multilingual...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1757612213,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen_plus_2025_07_28_thinking",
    "toolId": "t_qwen",
    "versionName": "Plus 2025 07 28:thinking",
    "fullName": "Qwen: Qwen Plus 0728 (thinking)",
    "description": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1757347599,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen_plus_2025_07_28",
    "toolId": "t_qwen",
    "versionName": "Plus 2025 07 28",
    "fullName": "Qwen: Qwen Plus 0728",
    "description": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1757347599,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_30b_a3b_thinking_2507",
    "toolId": "t_qwen",
    "versionName": "3 30b A3b Thinking 2507",
    "fullName": "Qwen: Qwen3 30B A3B Thinking 2507",
    "description": "Qwen3-30B-A3B-Thinking-2507 is a 30B parameter Mixture-of-Experts reasoning model optimized for complex tasks requiring extended multi-step thinking. The model is designed specifically for “thinking mode,” where internal reasoning traces are separated...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1756399192,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_chat_v3_1",
    "toolId": "t_deepseek",
    "versionName": "Deepseek Chat V3.1",
    "fullName": "DeepSeek: DeepSeek V3.1",
    "description": "DeepSeek-V3.1 is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes via prompt templates. It extends the DeepSeek-V3 base with a two-phase long-context...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "163,840 tokens",
    "platforms": "Web, API",
    "createdAt": 1755779628,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4o_audio_preview",
    "toolId": "t_openai",
    "versionName": "4o Audio Preview",
    "fullName": "OpenAI: GPT-4o Audio",
    "description": "The gpt-4o-audio-preview model adds support for audio inputs as prompts. This enhancement allows the model to detect nuances within audio recordings and add depth to generated user experiences. Audio outputs...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1755233061,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_medium_3_1",
    "toolId": "t_mistralai",
    "versionName": "Medium 3.1",
    "fullName": "Mistral: Mistral Medium 3.1",
    "description": "Mistral Medium 3.1 is an updated version of Mistral Medium 3, which is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It balances...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1755095639,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_chat",
    "toolId": "t_openai",
    "versionName": "5 Chat",
    "fullName": "OpenAI: GPT-5 Chat",
    "description": "GPT-5 Chat is designed for advanced, natural, multimodal, and context-aware conversations for enterprise applications.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1754587837,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5",
    "toolId": "t_openai",
    "versionName": "5",
    "fullName": "OpenAI: GPT-5",
    "description": "GPT-5 is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1754587413,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_mini",
    "toolId": "t_openai",
    "versionName": "5 Mini",
    "fullName": "OpenAI: GPT-5 Mini",
    "description": "GPT-5 Mini is a compact version of GPT-5, designed to handle lighter-weight reasoning tasks. It provides the same instruction-following and safety-tuning benefits as GPT-5, but with reduced latency and cost....",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1754587407,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_5_nano",
    "toolId": "t_openai",
    "versionName": "5 Nano",
    "fullName": "OpenAI: GPT-5 Nano",
    "description": "GPT-5-Nano is the smallest and fastest variant in the GPT-5 system, optimized for developer tools, rapid interactions, and ultra-low latency environments. While limited in reasoning depth compared to its larger...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "400,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1754587402,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_oss_120b_free",
    "toolId": "t_openai",
    "versionName": "Oss 120b:free",
    "fullName": "OpenAI: gpt-oss-120b (free)",
    "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Free",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1754414231,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_oss_120b",
    "toolId": "t_openai",
    "versionName": "Oss 120b",
    "fullName": "OpenAI: gpt-oss-120b",
    "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1754414231,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_oss_20b_free",
    "toolId": "t_openai",
    "versionName": "Oss 20b:free",
    "fullName": "OpenAI: gpt-oss-20b (free)",
    "description": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Free",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1754414229,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_oss_20b",
    "toolId": "t_openai",
    "versionName": "Oss 20b",
    "fullName": "OpenAI: gpt-oss-20b",
    "description": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1754414229,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_opus_4_1",
    "toolId": "t_anthropic",
    "versionName": "Opus 4.1",
    "fullName": "Anthropic: Claude Opus 4.1",
    "description": "Claude Opus 4.1 is an updated version of Anthropic’s flagship model, offering improved performance in coding, reasoning, and agentic tasks. It achieves 74.5% on SWE-bench Verified and shows notable gains...",
    "bestFor": "Deep logical & mathematical reasoning",
    "pricingModel": "Enterprise",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1754411591,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_codestral_2508",
    "toolId": "t_mistralai",
    "versionName": "Codestral 2508",
    "fullName": "Mistral: Codestral 2508",
    "description": "Mistral's cutting-edge language model for coding released end of July 2025. Codestral specializes in low-latency, high-frequency tasks such as fill-in-the-middle (FIM), code correction and test generation.\n\n[Blog Post](https://mistral.ai/news/codestral-25-08)",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Open Source",
    "contextWindow": "256,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1754079630,
    "categoryIds": [
      "code",
      "writing",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_coder_30b_a3b_instruct",
    "toolId": "t_qwen",
    "versionName": "3 Coder 30b A3b Instruct",
    "fullName": "Qwen: Qwen3 Coder 30B A3B Instruct",
    "description": "Qwen3-Coder-30B-A3B-Instruct is a 30.5B parameter Mixture-of-Experts (MoE) model with 128 experts (8 active per forward pass), designed for advanced code generation, repository-scale understanding, and agentic tool use. Built on the...",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Open Source",
    "contextWindow": "160,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1753972379,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen3_30b_a3b_instruct_2507",
    "toolId": "t_qwen",
    "versionName": "3 30b A3b Instruct 2507",
    "fullName": "Qwen: Qwen3 30B A3B Instruct 2507",
    "description": "Qwen3-30B-A3B-Instruct-2507 is a 30.5B-parameter mixture-of-experts language model from Qwen, with 3.3B active parameters per inference. It operates in non-thinking mode and is designed for high-quality instruction following, multilingual understanding, and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1753806965,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_235b_a22b_thinking_2507",
    "toolId": "t_qwen",
    "versionName": "3 235b A22b Thinking 2507",
    "fullName": "Qwen: Qwen3 235B A22B Thinking 2507",
    "description": "Qwen3-235B-A22B-Thinking-2507 is a high-performance, open-weight Mixture-of-Experts (MoE) language model optimized for complex reasoning tasks. It activates 22B of its 235B parameters per forward pass and natively supports up to 262,144...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1753449557,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_coder_free",
    "toolId": "t_qwen",
    "versionName": "3 Coder:free",
    "fullName": "Qwen: Qwen3 Coder 480B A35B (free)",
    "description": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over...",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Free",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1753230546,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen3_coder",
    "toolId": "t_qwen",
    "versionName": "3 Coder",
    "fullName": "Qwen: Qwen3 Coder 480B A35B",
    "description": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over...",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Open Source",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1753230546,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_google_gemini_2_5_flash_lite",
    "toolId": "t_google",
    "versionName": "2.5 Flash Lite",
    "fullName": "Google: Gemini 2.5 Flash Lite",
    "description": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1753200276,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_235b_a22b_2507",
    "toolId": "t_qwen",
    "versionName": "3 235b A22b 2507",
    "fullName": "Qwen: Qwen3 235B A22B Instruct 2507",
    "description": "Qwen3-235B-A22B-Instruct-2507 is a multilingual, instruction-tuned mixture-of-experts language model based on the Qwen3-235B architecture, with 22B active parameters per forward pass. It is optimized for general-purpose text generation, including instruction following,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "262,144 tokens",
    "platforms": "Web, API",
    "createdAt": 1753119555,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_devstral_medium",
    "toolId": "t_mistralai",
    "versionName": "Devstral Medium",
    "fullName": "Mistral: Devstral Medium",
    "description": "Devstral Medium is a high-performance code generation and agentic reasoning model developed jointly by Mistral AI and All Hands AI. Positioned as a step up from Devstral Small, it achieves...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1752161321,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_devstral_small",
    "toolId": "t_mistralai",
    "versionName": "Devstral Small",
    "fullName": "Mistral: Devstral Small 1.1",
    "description": "Devstral Small 1.1 is a 24B parameter open-weight language model for software engineering agents, developed by Mistral AI in collaboration with All Hands AI. Finetuned from Mistral Small 3.1 and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1752160751,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_small_3_2_24b_instruct",
    "toolId": "t_mistralai",
    "versionName": "Small 3.2 24b Instruct",
    "fullName": "Mistral: Mistral Small 3.2 24B",
    "description": "Mistral-Small-3.2-24B-Instruct-2506 is an updated 24B parameter model from Mistral optimized for instruction following, repetition reduction, and improved function calling. Compared to the 3.1 release, version 3.2 significantly improves accuracy on...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1750443016,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_2_5_flash",
    "toolId": "t_google",
    "versionName": "2.5 Flash",
    "fullName": "Google: Gemini 2.5 Flash",
    "description": "Gemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in \"thinking\" capabilities, enabling it to provide responses with greater...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1750172488,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_2_5_pro",
    "toolId": "t_google",
    "versionName": "2.5 Pro",
    "fullName": "Google: Gemini 2.5 Pro",
    "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1750169544,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_openai_o3_pro",
    "toolId": "t_openai",
    "versionName": "O3 Pro",
    "fullName": "OpenAI: o3 Pro",
    "description": "The o-series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o3-pro model uses more compute to think harder and provide consistently...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Enterprise",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1749598352,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_2_5_pro_preview",
    "toolId": "t_google",
    "versionName": "2.5 Pro Preview",
    "fullName": "Google: Gemini 2.5 Pro Preview 06-05",
    "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1749137257,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_r1_0528",
    "toolId": "t_deepseek",
    "versionName": "Deepseek R1 0528",
    "fullName": "DeepSeek: R1 0528",
    "description": "May 28th update to the [original DeepSeek R1](/deepseek/deepseek-r1) Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "163,840 tokens",
    "platforms": "Web, API",
    "createdAt": 1748455170,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_opus_4",
    "toolId": "t_anthropic",
    "versionName": "Opus 4",
    "fullName": "Anthropic: Claude Opus 4",
    "description": "Claude Opus 4 is benchmarked as the world’s best coding model, at time of release, bringing sustained performance on complex, long-running tasks and agent workflows. It sets new benchmarks in...",
    "bestFor": "Deep logical & mathematical reasoning",
    "pricingModel": "Enterprise",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1747931245,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_sonnet_4",
    "toolId": "t_anthropic",
    "versionName": "Sonnet 4",
    "fullName": "Anthropic: Claude Sonnet 4",
    "description": "Claude Sonnet 4 significantly enhances the capabilities of its predecessor, Sonnet 3.7, excelling in both coding and reasoning tasks with improved precision and controllability. Achieving state-of-the-art performance on SWE-bench (72.7%),...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1747930371,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemma_3n_e4b_it",
    "toolId": "t_google",
    "versionName": "Gemma 3n E4b It",
    "fullName": "Google: Gemma 3n 4B",
    "description": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "32,768 tokens",
    "platforms": "Web, API",
    "createdAt": 1747776824,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_medium_3",
    "toolId": "t_mistralai",
    "versionName": "Medium 3",
    "fullName": "Mistral: Mistral Medium 3",
    "description": "Mistral Medium 3 is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It balances state-of-the-art reasoning and multimodal performance with 8× lower cost...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1746627341,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_2_5_pro_preview_05_06",
    "toolId": "t_google",
    "versionName": "2.5 Pro Preview 05 06",
    "fullName": "Google: Gemini 2.5 Pro Preview 05-06",
    "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1746578513,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_30b_a3b",
    "toolId": "t_qwen",
    "versionName": "3 30b A3b",
    "fullName": "Qwen: Qwen3 30B A3B",
    "description": "Qwen3, the latest generation in the Qwen large language model series, features both dense and mixture-of-experts (MoE) architectures to excel in reasoning, multilingual support, and advanced agent tasks. Its unique...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1745878604,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_8b",
    "toolId": "t_qwen",
    "versionName": "3 8b",
    "fullName": "Qwen: Qwen3 8B",
    "description": "Qwen3-8B is a dense 8.2B parameter causal language model from the Qwen3 series, designed for both reasoning-heavy tasks and efficient dialogue. It supports seamless switching between \"thinking\" mode for math,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1745876632,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_14b",
    "toolId": "t_qwen",
    "versionName": "3 14b",
    "fullName": "Qwen: Qwen3 14B",
    "description": "Qwen3-14B is a dense 14.8B parameter causal language model from the Qwen3 series, designed for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,702 tokens",
    "platforms": "Web, API",
    "createdAt": 1745876478,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_32b",
    "toolId": "t_qwen",
    "versionName": "3 32b",
    "fullName": "Qwen: Qwen3 32B",
    "description": "Qwen3-32B is a dense 32.8B parameter causal language model from the Qwen3 series, optimized for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1745875945,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen3_235b_a22b",
    "toolId": "t_qwen",
    "versionName": "3 235b A22b",
    "fullName": "Qwen: Qwen3 235B A22B",
    "description": "Qwen3-235B-A22B is a 235B parameter mixture-of-experts (MoE) model developed by Qwen, activating 22B parameters per forward pass. It supports seamless switching between a \"thinking\" mode for complex reasoning, math, and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1745875757,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_openai_o4_mini_high",
    "toolId": "t_openai",
    "versionName": "O4 Mini High",
    "fullName": "OpenAI: o4 Mini High",
    "description": "OpenAI o4-mini-high is the same model as [o4-mini](/openai/o4-mini) with reasoning_effort set to high. OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1744824212,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_o3",
    "toolId": "t_openai",
    "versionName": "O3",
    "fullName": "OpenAI: o3",
    "description": "o3 is a well-rounded and powerful model across domains. It sets a new standard for math, science, coding, and visual reasoning tasks. It also excels at technical writing and instruction-following....",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1744823457,
    "categoryIds": [
      "code",
      "writing",
      "tasks"
    ]
  },
  {
    "id": "v_openai_o4_mini",
    "toolId": "t_openai",
    "versionName": "O4 Mini",
    "fullName": "OpenAI: o4 Mini",
    "description": "OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities. It supports tool use and demonstrates competitive reasoning...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1744820942,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4_1",
    "toolId": "t_openai",
    "versionName": "4.1",
    "fullName": "OpenAI: GPT-4.1",
    "description": "GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning. It supports a 1 million token context window and outperforms GPT-4o and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,047,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1744651385,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4_1_mini",
    "toolId": "t_openai",
    "versionName": "4.1 Mini",
    "fullName": "OpenAI: GPT-4.1 Mini",
    "description": "GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost. It retains a 1 million token context window and scores 45.1% on hard...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,047,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1744651381,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4_1_nano",
    "toolId": "t_openai",
    "versionName": "4.1 Nano",
    "fullName": "OpenAI: GPT-4.1 Nano",
    "description": "For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series. It delivers exceptional performance at a small size with its 1 million...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "1,047,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1744651369,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_chat_v3_0324",
    "toolId": "t_deepseek",
    "versionName": "Deepseek Chat V3 0324",
    "fullName": "DeepSeek: DeepSeek V3 0324",
    "description": "DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team. It succeeds the [DeepSeek V3](/deepseek/deepseek-chat-v3) model and performs really well...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "163,840 tokens",
    "platforms": "Web, API",
    "createdAt": 1742824755,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_openai_o1_pro",
    "toolId": "t_openai",
    "versionName": "O1 Pro",
    "fullName": "OpenAI: o1-pro",
    "description": "The o1 series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o1-pro model uses more compute to think harder and provide...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Enterprise",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1742423211,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_small_3_1_24b_instruct",
    "toolId": "t_mistralai",
    "versionName": "Small 3.1 24b Instruct",
    "fullName": "Mistral: Mistral Small 3.1 24B",
    "description": "Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities. It provides state-of-the-art performance in text-based reasoning and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1742238937,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemma_3_4b_it",
    "toolId": "t_google",
    "versionName": "Gemma 3 4b It",
    "fullName": "Google: Gemma 3 4B",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1741905510,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemma_3_12b_it",
    "toolId": "t_google",
    "versionName": "Gemma 3 12b It",
    "fullName": "Google: Gemma 3 12B",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1741902625,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_cohere_command_a",
    "toolId": "t_cohere",
    "versionName": "Command A",
    "fullName": "Cohere: Command A",
    "description": "Command A is an open-weights 111B parameter model with a 256k context window focused on delivering great performance across agentic, multilingual, and coding use cases. Compared to other leading proprietary...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "256,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1741894342,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_openai_gpt_4o_mini_search_preview",
    "toolId": "t_openai",
    "versionName": "4o Mini Search Preview",
    "fullName": "OpenAI: GPT-4o-mini Search Preview",
    "description": "GPT-4o mini Search Preview is a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1741818122,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4o_search_preview",
    "toolId": "t_openai",
    "versionName": "4o Search Preview",
    "fullName": "OpenAI: GPT-4o Search Preview",
    "description": "GPT-4o Search Previewis a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1741817949,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemma_3_27b_it",
    "toolId": "t_google",
    "versionName": "Gemma 3 27b It",
    "fullName": "Google: Gemma 3 27B",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1741756359,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_2_0_flash_lite_001",
    "toolId": "t_google",
    "versionName": "2.0 Flash Lite 001",
    "fullName": "Google: Gemini 2.0 Flash Lite",
    "description": "Gemini 2.0 Flash Lite offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5),...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "1,048,576 tokens",
    "platforms": "Web, API",
    "createdAt": 1740506212,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_saba",
    "toolId": "t_mistralai",
    "versionName": "Saba",
    "fullName": "Mistral: Saba",
    "description": "Mistral Saba is a 24B-parameter language model specifically designed for the Middle East and South Asia, delivering accurate and contextually relevant responses while maintaining efficient performance. Trained on curated regional...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "32,768 tokens",
    "platforms": "Web, API",
    "createdAt": 1739803239,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_o3_mini_high",
    "toolId": "t_openai",
    "versionName": "O3 Mini High",
    "fullName": "OpenAI: o3 Mini High",
    "description": "OpenAI o3-mini-high is the same model as [o3-mini](/openai/o3-mini) with reasoning_effort set to high. o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1739372611,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemini_2_0_flash_001",
    "toolId": "t_google",
    "versionName": "2.0 Flash 001",
    "fullName": "Google: Gemini 2.0 Flash",
    "description": "Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5). It...",
    "bestFor": "High-speed conversational logic",
    "pricingModel": "Pro",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1738769413,
    "categoryIds": [
      "code",
      "audio",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen2_5_vl_72b_instruct",
    "toolId": "t_qwen",
    "versionName": "2.5 Vl 72b Instruct",
    "fullName": "Qwen: Qwen2.5 VL 72B Instruct",
    "description": "Qwen2.5-VL is proficient in recognizing common objects such as flowers, birds, fish, and insects. It is also highly capable of analyzing texts, charts, icons, graphics, and layouts within images.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1738410311,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen_plus",
    "toolId": "t_qwen",
    "versionName": "Plus",
    "fullName": "Qwen: Qwen-Plus",
    "description": "Qwen-Plus, based on the Qwen2.5 foundation model, is a 131K context model with a balanced performance, speed, and cost combination.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "1,000,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1738409840,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_openai_o3_mini",
    "toolId": "t_openai",
    "versionName": "O3 Mini",
    "fullName": "OpenAI: o3 Mini",
    "description": "OpenAI o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding. This model supports the `reasoning_effort` parameter, which can be set to...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1738351721,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_small_24b_instruct_2501",
    "toolId": "t_mistralai",
    "versionName": "Small 24b Instruct 2501",
    "fullName": "Mistral: Mistral Small 3",
    "description": "Mistral Small 3 is a 24B-parameter language model optimized for low-latency performance across common AI tasks. Released under the Apache 2.0 license, it features both pre-trained and instruction-tuned versions designed...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "32,768 tokens",
    "platforms": "Web, API",
    "createdAt": 1738255409,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_r1_distill_qwen_32b",
    "toolId": "t_deepseek",
    "versionName": "Deepseek R1 Distill Qwen 32b",
    "fullName": "DeepSeek: R1 Distill Qwen 32B",
    "description": "DeepSeek R1 Distill Qwen 32B is a distilled large language model based on [Qwen 2.5 32B](https://huggingface.co/Qwen/Qwen2.5-32B), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). It outperforms OpenAI's o1-mini across various benchmarks, achieving new...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1738194830,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_r1_distill_llama_70b",
    "toolId": "t_deepseek",
    "versionName": "Deepseek R1 Distill Llama 70b",
    "fullName": "DeepSeek: R1 Distill Llama 70B",
    "description": "DeepSeek R1 Distill Llama 70B is a distilled large language model based on [Llama-3.3-70B-Instruct](/meta-llama/llama-3.3-70b-instruct), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). The model combines advanced distillation techniques to achieve high performance across...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1737663169,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_r1",
    "toolId": "t_deepseek",
    "versionName": "Deepseek R1",
    "fullName": "DeepSeek: R1",
    "description": "DeepSeek R1 is here: Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass....",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "163,840 tokens",
    "platforms": "Web, API",
    "createdAt": 1737381095,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_deepseek_deepseek_chat",
    "toolId": "t_deepseek",
    "versionName": "Deepseek Chat",
    "fullName": "DeepSeek: DeepSeek V3",
    "description": "DeepSeek-V3 is the latest model from the DeepSeek team, building upon the instruction following and coding abilities of the previous versions. Pre-trained on nearly 15 trillion tokens, the reported evaluations...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "163,840 tokens",
    "platforms": "Web, API",
    "createdAt": 1735241320,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_openai_o1",
    "toolId": "t_openai",
    "versionName": "O1",
    "fullName": "OpenAI: o1",
    "description": "The latest and strongest model family from OpenAI, o1 is designed to spend more time thinking before responding. The o1 model series is trained with large-scale reinforcement learning to reason...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Enterprise",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1734459999,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_cohere_command_r7b_12_2024",
    "toolId": "t_cohere",
    "versionName": "Command R7b 12 2024",
    "fullName": "Cohere: Command R7B (12-2024)",
    "description": "Command R7B (12-2024) is a small, fast update of the Command R+ model, delivered in December 2024. It excels at RAG, tool use, agents, and similar tasks requiring complex reasoning...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1734158152,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4o_2024_11_20",
    "toolId": "t_openai",
    "versionName": "4o 2024 11 20",
    "fullName": "OpenAI: GPT-4o (2024-11-20)",
    "description": "The 2024-11-20 version of GPT-4o offers a leveled-up creative writing ability with more natural, engaging, and tailored writing to improve relevance & readability. It’s also better at working with uploaded...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1732127594,
    "categoryIds": [
      "code",
      "writing",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_large_2411",
    "toolId": "t_mistralai",
    "versionName": "Large 2411",
    "fullName": "Mistral Large 2411",
    "description": "Mistral Large 2 2411 is an update of [Mistral Large 2](/mistralai/mistral-large) released together with [Pixtral Large 2411](/mistralai/pixtral-large-2411) It provides a significant upgrade on the previous [Mistral Large 24.07](/mistralai/mistral-large-2407), with notable...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1731978685,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_large_2407",
    "toolId": "t_mistralai",
    "versionName": "Large 2407",
    "fullName": "Mistral Large 2407",
    "description": "This is Mistral AI's flagship model, Mistral Large 2 (version mistral-large-2407). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement [here](https://mistral.ai/news/mistral-large-2407/)....",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1731978415,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_pixtral_large_2411",
    "toolId": "t_mistralai",
    "versionName": "Pixtral Large 2411",
    "fullName": "Mistral: Pixtral Large 2411",
    "description": "Pixtral Large is a 124B parameter, open-weight, multimodal model built on top of [Mistral Large 2](/mistralai/mistral-large-2411). The model is able to understand documents, charts and natural images. The model is...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1731977388,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen_2_5_coder_32b_instruct",
    "toolId": "t_qwen",
    "versionName": "2.5 Coder 32b Instruct",
    "fullName": "Qwen2.5 Coder 32B Instruct",
    "description": "Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). Qwen2.5-Coder brings the following improvements upon CodeQwen1.5: - Significantly improvements in **code generation**, **code reasoning**...",
    "bestFor": "Advanced coding and syntax assistance",
    "pricingModel": "Open Source",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1731368400,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_anthropic_claude_3_5_haiku",
    "toolId": "t_anthropic",
    "versionName": "3.5 Haiku",
    "fullName": "Anthropic: Claude 3.5 Haiku",
    "description": "Claude 3.5 Haiku features offers enhanced capabilities in speed, coding accuracy, and tool use. Engineered to excel in real-time applications, it delivers quick response times that are essential for dynamic...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1730678400,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_qwen_qwen_2_5_7b_instruct",
    "toolId": "t_qwen",
    "versionName": "2.5 7b Instruct",
    "fullName": "Qwen: Qwen2.5 7B Instruct",
    "description": "Qwen2.5 7B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2: - Significantly more knowledge and has greatly improved capabilities in coding and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1729036800,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_qwen_qwen_2_5_72b_instruct",
    "toolId": "t_qwen",
    "versionName": "2.5 72b Instruct",
    "fullName": "Qwen2.5 72B Instruct",
    "description": "Qwen2.5 72B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2: - Significantly more knowledge and has greatly improved capabilities in coding and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1726704000,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_cohere_command_r_08_2024",
    "toolId": "t_cohere",
    "versionName": "Command R 08 2024",
    "fullName": "Cohere: Command R (08-2024)",
    "description": "command-r-08-2024 is an update of the [Command R](/models/cohere/command-r) with improved performance for multilingual retrieval-augmented generation (RAG) and tool use. More broadly, it is better at math, code and reasoning and...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1724976000,
    "categoryIds": [
      "tasks",
      "code"
    ]
  },
  {
    "id": "v_cohere_command_r_plus_08_2024",
    "toolId": "t_cohere",
    "versionName": "Command R Plus 08 2024",
    "fullName": "Cohere: Command R+ (08-2024)",
    "description": "command-r-plus-08-2024 is an update of the [Command R+](/models/cohere/command-r-plus) with roughly 50% higher throughput and 25% lower latencies as compared to the previous Command R+ version, while keeping the hardware footprint...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1724976000,
    "categoryIds": [
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4o_2024_08_06",
    "toolId": "t_openai",
    "versionName": "4o 2024 08 06",
    "fullName": "OpenAI: GPT-4o (2024-08-06)",
    "description": "The 2024-08-06 version of GPT-4o offers improved performance in structured outputs, with the ability to supply a JSON schema in the respone_format. Read more [here](https://openai.com/index/introducing-structured-outputs-in-the-api/). GPT-4o (\"o\" for \"omni\") is...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1722902400,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_nemo",
    "toolId": "t_mistralai",
    "versionName": "Nemo",
    "fullName": "Mistral: Mistral Nemo",
    "description": "A 12B parameter model with a 128k token context length built by Mistral in collaboration with NVIDIA. The model is multilingual, supporting English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "131,072 tokens",
    "platforms": "Web, API",
    "createdAt": 1721347200,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4o_mini_2024_07_18",
    "toolId": "t_openai",
    "versionName": "4o Mini 2024 07 18",
    "fullName": "OpenAI: GPT-4o-mini (2024-07-18)",
    "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1721260800,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4o_mini",
    "toolId": "t_openai",
    "versionName": "4o Mini",
    "fullName": "OpenAI: GPT-4o-mini",
    "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1721260800,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_google_gemma_2_27b_it",
    "toolId": "t_google",
    "versionName": "Gemma 2 27b It",
    "fullName": "Google: Gemma 2 27B",
    "description": "Gemma 2 27B by Google is an open model built from the same research and technology used to create the [Gemini models](/models?q=gemini). Gemma models are well-suited for a variety of...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "8,192 tokens",
    "platforms": "Web, API",
    "createdAt": 1720828800,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4o",
    "toolId": "t_openai",
    "versionName": "4o",
    "fullName": "OpenAI: GPT-4o",
    "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1715558400,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4o_2024_05_13",
    "toolId": "t_openai",
    "versionName": "4o 2024 05 13",
    "fullName": "OpenAI: GPT-4o (2024-05-13)",
    "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1715558400,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mixtral_8x22b_instruct",
    "toolId": "t_mistralai",
    "versionName": "Mixtral 8x22b Instruct",
    "fullName": "Mistral: Mixtral 8x22B Instruct",
    "description": "Mistral's official instruct fine-tuned version of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b). It uses 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Its strengths include: - strong math, coding,...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "65,536 tokens",
    "platforms": "Web, API",
    "createdAt": 1713312000,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4_turbo",
    "toolId": "t_openai",
    "versionName": "4 Turbo",
    "fullName": "OpenAI: GPT-4 Turbo",
    "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.\n\nTraining data: up to December 2023.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1712620800,
    "categoryIds": [
      "code",
      "video",
      "tasks"
    ]
  },
  {
    "id": "v_anthropic_claude_3_haiku",
    "toolId": "t_anthropic",
    "versionName": "3 Haiku",
    "fullName": "Anthropic: Claude 3 Haiku",
    "description": "Claude 3 Haiku is Anthropic's fastest and most compact model for\nnear-instant responsiveness. Quick and accurate targeted performance.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-haiku)\n\n#multimodal",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "200,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1710288000,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_large",
    "toolId": "t_mistralai",
    "versionName": "Large",
    "fullName": "Mistral Large",
    "description": "This is Mistral AI's flagship model, Mistral Large 2 (version `mistral-large-2407`). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement [here](https://mistral.ai/news/mistral-large-2407/)....",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1708905600,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_3_5_turbo_0613",
    "toolId": "t_openai",
    "versionName": "3.5 Turbo 0613",
    "fullName": "OpenAI: GPT-3.5 Turbo (older v0613)",
    "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "4,095 tokens",
    "platforms": "Web, API",
    "createdAt": 1706140800,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4_turbo_preview",
    "toolId": "t_openai",
    "versionName": "4 Turbo Preview",
    "fullName": "OpenAI: GPT-4 Turbo Preview",
    "description": "The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Dec 2023. **Note:** heavily rate limited by OpenAI while...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1706140800,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4_1106_preview",
    "toolId": "t_openai",
    "versionName": "4 1106 Preview",
    "fullName": "OpenAI: GPT-4 Turbo (older v1106)",
    "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.\n\nTraining data: up to April 2023.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "128,000 tokens",
    "platforms": "Web, API",
    "createdAt": 1699228800,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_mistralai_mistral_7b_instruct_v0_1",
    "toolId": "t_mistralai",
    "versionName": "7b Instruct V0.1",
    "fullName": "Mistral: Mistral 7B Instruct v0.1",
    "description": "A 7.3B parameter model that outperforms Llama 2 13B on all benchmarks, with optimizations for speed and context length.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Open Source",
    "contextWindow": "4,096 tokens",
    "platforms": "Web, API",
    "createdAt": 1695859200,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_3_5_turbo_instruct",
    "toolId": "t_openai",
    "versionName": "3.5 Turbo Instruct",
    "fullName": "OpenAI: GPT-3.5 Turbo Instruct",
    "description": "This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations. Training data: up to Sep 2021.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "4,095 tokens",
    "platforms": "Web, API",
    "createdAt": 1695859200,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_3_5_turbo_16k",
    "toolId": "t_openai",
    "versionName": "3.5 Turbo 16k",
    "fullName": "OpenAI: GPT-3.5 Turbo 16k",
    "description": "This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost. Training data: up...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "16,385 tokens",
    "platforms": "Web, API",
    "createdAt": 1693180800,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4_0314",
    "toolId": "t_openai",
    "versionName": "4 0314",
    "fullName": "OpenAI: GPT-4 (older v0314)",
    "description": "GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14. Training data: up to Sep 2021.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Enterprise",
    "contextWindow": "8,191 tokens",
    "platforms": "Web, API",
    "createdAt": 1685232000,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_3_5_turbo",
    "toolId": "t_openai",
    "versionName": "3.5 Turbo",
    "fullName": "OpenAI: GPT-3.5 Turbo",
    "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Pro",
    "contextWindow": "16,385 tokens",
    "platforms": "Web, API",
    "createdAt": 1685232000,
    "categoryIds": [
      "code",
      "tasks"
    ]
  },
  {
    "id": "v_openai_gpt_4",
    "toolId": "t_openai",
    "versionName": "4",
    "fullName": "OpenAI: GPT-4",
    "description": "OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning...",
    "bestFor": "General reasoning and tasks",
    "pricingModel": "Enterprise",
    "contextWindow": "8,191 tokens",
    "platforms": "Web, API",
    "createdAt": 1685232000,
    "categoryIds": [
      "code",
      "tasks"
    ]
  }
];
