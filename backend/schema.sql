-- AI Comparison Web App - Raw MySQL Database Schema (Phase 4: 2026 Landscape & Text-First UI)

-- 1. Create Users Table (Updated for Firebase/OAuth)
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) PRIMARY KEY, -- Firebase UID
    email VARCHAR(255) UNIQUE NOT NULL,
    display_name VARCHAR(255),
    photo_url TEXT,
    auth_provider VARCHAR(50) NOT NULL DEFAULT 'email', -- 'email', 'google.com', 'apple.com'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Create Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT IGNORE INTO categories (id, name) VALUES 
('code', 'AI for Code / Vibecode'), 
('tasks', 'AI for Tasks'), 
('writing', 'AI for Writing'), 
('video', 'AI for Photo/Video Generation'),
('audio', 'AI for Audio/Music');

-- 3. Create Tools Table (Parent)
-- Removed 'logo_url' per Phase 4 requirements.
CREATE TABLE IF NOT EXISTS tools (
    id VARCHAR(100) PRIMARY KEY,
    category_id VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    website_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- 4. Create Tool Versions Table (Child)
-- Represents specific models/versions (e.g., "ChatGPT-5.4 Pro", "Gemini 3.1 Pro")
CREATE TABLE IF NOT EXISTS tool_versions (
    id VARCHAR(100) PRIMARY KEY,
    tool_id VARCHAR(100) NOT NULL,
    version_name VARCHAR(255) NOT NULL, -- e.g. "5.4 Pro", "3.1 Pro"
    full_name VARCHAR(255) NOT NULL,    -- e.g. "ChatGPT-5.4 Pro"
    description TEXT,
    best_for VARCHAR(255),              -- e.g. "Native computer use"
    pricing_model VARCHAR(50),          -- 'Free', 'Pro', 'Enterprise', 'Open Source'
    context_window VARCHAR(100),        -- e.g. "2M tokens"
    platforms VARCHAR(255),             -- e.g. "Web, iOS, Android, API"
    release_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tool_id) REFERENCES tools(id) ON DELETE CASCADE
);

-- 5. Create Votes Table
-- No unique constraint on (user_id, version_id). Users can vote multiple times for the exact same tool version.
CREATE TABLE IF NOT EXISTS votes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    version_id VARCHAR(100) NOT NULL,
    score INT NOT NULL CHECK (score >= 1 AND score <= 5), -- 5=S, 4=A, 3=B, 2=C, 1=D
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (version_id) REFERENCES tool_versions(id) ON DELETE CASCADE
);

-- 6. Helper View: Version Rankings Aggregation
-- Removed 'logo_url' per Phase 4 requirements.
CREATE OR REPLACE VIEW version_rankings AS
SELECT 
    tv.id AS version_id,
    tv.full_name,
    t.category_id,
    tv.best_for,
    COUNT(v.id) AS total_votes,
    COALESCE(AVG(v.score), 0) AS average_score,
    CASE 
        WHEN AVG(v.score) >= 4.5 THEN 'S'
        WHEN AVG(v.score) >= 3.5 AND AVG(v.score) < 4.5 THEN 'A'
        WHEN AVG(v.score) >= 2.5 AND AVG(v.score) < 3.5 THEN 'B'
        WHEN AVG(v.score) >= 1.5 AND AVG(v.score) < 2.5 THEN 'C'
        WHEN AVG(v.score) > 0 AND AVG(v.score) < 1.5 THEN 'D'
        ELSE 'Unranked'
    END AS tier
FROM 
    tool_versions tv
JOIN 
    tools t ON tv.tool_id = t.id
LEFT JOIN 
    votes v ON tv.id = v.version_id
GROUP BY 
    tv.id, tv.full_name, t.category_id, tv.best_for;

-- ---------------------------------------------------------
-- MASSIVE 2026 SEED DATA (Translated from Hebrew Research Report)
-- ---------------------------------------------------------

-- Insert Tools (Parents)
INSERT IGNORE INTO tools (id, category_id, name, company, website_url) VALUES 
('t_openai', 'code', 'ChatGPT', 'OpenAI', 'https://chat.openai.com'),
('t_google', 'code', 'Gemini', 'Google', 'https://gemini.google.com'),
('t_anthropic', 'code', 'Claude', 'Anthropic', 'https://claude.ai'),
('t_meta', 'tasks', 'Llama', 'Meta', 'https://ai.meta.com'),
('t_deepseek', 'tasks', 'DeepSeek', 'DeepSeek', 'https://deepseek.com'),
('t_mistral', 'tasks', 'Mistral', 'Mistral AI', 'https://mistral.ai'),
('t_alibaba', 'tasks', 'Qwen', 'Alibaba', 'https://qwenlm.github.io'),
('t_moonshot', 'code', 'Kimi', 'Moonshot AI', 'https://kimi.moonshot.cn'),
('t_xai', 'tasks', 'Grok', 'xAI', 'https://grok.x.ai'),

('t_nano_banana', 'video', 'Nano Banana', 'Google', 'https://gemini.google.com/images'),
('t_midjourney', 'video', 'Midjourney', 'Midjourney', 'https://midjourney.com'),
('t_ideogram', 'video', 'Ideogram', 'Ideogram', 'https://ideogram.ai'),
('t_flux', 'video', 'Flux', 'Black Forest Labs', 'https://blackforestlabs.ai'),

('t_runway', 'video', 'Runway', 'Runway', 'https://runwayml.com'),
('t_luma', 'video', 'Luma AI', 'Luma AI', 'https://lumalabs.ai/dream-machine'),
('t_kling', 'video', 'Kling', 'Kuaishou', 'https://kling.kuaishou.com'),

('t_suno', 'audio', 'Suno', 'Suno AI', 'https://suno.com'),
('t_udio', 'audio', 'Udio', 'Udio', 'https://udio.com'),
('t_elevenlabs', 'audio', 'ElevenLabs', 'ElevenLabs', 'https://elevenlabs.io'),

('t_cursor', 'code', 'Cursor', 'Anysphere', 'https://cursor.sh'),
('t_windsurf', 'code', 'Windsurf', 'Codeium', 'https://codeium.com/windsurf'),
('t_replit', 'code', 'Replit', 'Replit', 'https://replit.com'),

('t_perplexity', 'tasks', 'Perplexity', 'Perplexity AI', 'https://perplexity.ai'),
('t_characterai', 'writing', 'Character.AI', 'Character.AI', 'https://character.ai');


-- Insert Tool Versions (Children)
INSERT IGNORE INTO tool_versions (id, tool_id, version_name, full_name, description, best_for, pricing_model, context_window, platforms) VALUES 

-- OpenAI
('v_gpt_54_pro', 't_openai', '5.4 Pro', 'ChatGPT-5.4 Pro', 'Breakthrough model featuring native computer use and agentic UI navigation without human intervention. Reaches a new paradigm in reasoning with an 18% reduction in factual errors and native Codex-level coding capability.', 'Native computer use and UI navigation', 'Enterprise', '2M tokens', 'Web, API, Desktop'),
('v_gpt_o3_pro', 't_openai', 'o3 Pro', 'ChatGPT o3 Pro', 'Deep reasoning model specializing in complex logic, mathematics, and long-form coding via Chain-of-Thought processing before answering.', 'Deep mathematical and coding reasoning', 'Pro', '200k tokens', 'Web, API'),
('v_gpt_oss_120b', 't_openai', 'OSS 120B', 'GPT-OSS 120B', 'OpenAI''s open-weights model targeted at local deployments with high security requirements. Offers adjustable reasoning effort.', 'Secure local deployment in VPCs', 'Open Source', '128k tokens', 'Local, API'),

-- Google
('v_gemini_31_pro', 't_google', '3.1 Pro', 'Gemini 3.1 Pro', 'Google''s cutting-edge flagship capable of "Vibe coding" and multi-step physical planning. Scored 100% on AIME 2025 high-school math tests and 91.9% on GPQA Diamond.', 'Vibe coding & physical agentic actions', 'Pro', '2M+ tokens', 'Web, Vertex AI, API'),
('v_gemini_25_flash', 't_google', '2.5 Flash', 'Gemini 2.5 Flash', 'High-speed model balancing latency with capable reasoning. Integrates real-time audio and conversational processing.', 'Low-latency agentic conversations', 'Free', '1M tokens', 'Web, API'),

-- Anthropic
('v_claude_46_opus', 't_anthropic', 'Opus 4.6', 'Claude Opus 4.6', 'Anthropic''s gold-standard model featuring extended and adaptive thinking. Automatically scales processing resources dynamically based on prompt complexity.', 'Logical agency & reasoning orchestration', 'Enterprise', 'N/A', 'Web, API, AWS Bedrock'),
('v_claude_46_sonnet', 't_anthropic', 'Sonnet 4.6', 'Claude Sonnet 4.6', 'The definitive choice for software engineers. Shattered SWE Bench coding records with an 82% problem resolution rate. Masterful usage of Artifacts.', 'Advanced Agentic Coding', 'Pro', 'N/A', 'Web, API, IDEs'),

-- Meta
('v_llama4_scout', 't_meta', 'Scout 17B-16E', 'Llama 4 Scout', 'A Mixture-of-Experts architecture featuring a record-breaking 10 million token context window. Processes at an astounding 2600 tokens per second on consumer hardware via FP8 quantization.', 'Ultra-long context repository indexing', 'Open Source', '10M tokens', 'Local, Cloud VMs'),

-- DeepSeek
('v_deepseek_v3', 't_deepseek', 'V3 Base', 'DeepSeek V3', 'A massive 671B parameter model operating on only 37B active parameters per token. Shattered global pricing monopolies by drastically reducing API processing costs.', 'Cost-effective scalable reasoning', 'Open Source', '256k tokens', 'API, Local'),
('v_deepseek_r1', 't_deepseek', 'R1', 'DeepSeek R1', 'An open-source (MIT License) reasoning model trained via strict Reinforcement Learning (RL), bringing GPT-4.5 level logic processing out of localized walls.', 'Open-source logic validation', 'Open Source', '64k tokens', 'Local, Cloud VMs'),

-- Mistral
('v_mistral_large_3', 't_mistral', 'Large 3', 'Mistral Large 3', '675B parameter flagship compliant with European AI act regulations. Superb multilingual agentic capability with a minimal computational footprint.', 'Sovereign and regulated AI processing', 'Enterprise', '256k tokens', 'API, Azure, Local'),
('v_codestral_2508', 't_mistral', 'Codestral 25.08', 'Codestral 25.08', 'Masterful Fill-in-the-Middle (FIM) model that decreases continuous coding errors by 50% compared to previous generations. Fully deployable within isolated networks.', 'Private VPC IDE autocompletion', 'Open Source', 'N/A', 'Local, IDE Extensions'),

-- Alibaba & Moonshot
('v_qwen_35_397b', 't_alibaba', '3.5 397B', 'Qwen 3.5 397B', 'Alibaba''s absolute beast of an open-weights model, fully integrating multimodal visual understanding with agentic reasoning out-of-the-box.', 'Heavy local multimodal agency', 'Open Source', 'N/A', 'Local'),
('v_kimi_k25', 't_moonshot', 'K2.5', 'Kimi K2.5', 'Features "Agent Swarm" architecture to coordinate 100 parallel sub-agents to solve one massive problem. Excels at generating pixel-perfect UI code directly from mockups or demo videos.', 'Visual coding & Swarm orchestration', 'Pro', 'Large', 'Web, API'),

-- xAI
('v_grok_41', 't_xai', '4.1 Thinking', 'Grok 4.1', 'Integrated flawlessly with X, featuring real-time reality comprehension, vastly improved Emotional Quotient (EQ), and 64% boost in user preference blind-tests.', 'Real-time social data ingestion', 'Pro', 'N/A', 'Web, Mobile (X App)'),

-- Video & Image Generation (Sleek Visual Tools)
('v_nano_banana_2', 't_nano_banana', '2', 'Nano Banana 2', 'Google''s Gemini 3.1 Flash Image. Incredibly fast generation with multi-lingual typography support. Retains unbreakable consistency across 5 characters and 14 distinct objects within 4K renders.', 'Perfect typographics and localized visuals', 'Free', 'N/A', 'Web'),
('v_midjourney_v8', 't_midjourney', 'V8', 'Midjourney V8', 'The unquestioned leader in artistic cinematography. V8 deployed new massive server clusters for hyper-detailed depth simulations and perfect skin/hand anatomy.', 'Artistic cinema & photography simulation', 'Pro', 'N/A', 'Discord, Web'),
('v_flux_2_pro', 't_flux', 'Flux.2 Pro', 'Flux.2 Pro', 'Permits multi-reference control inputs for determining styles versus subject identities. Reaches 4MP resolution photorealism natively on 16GB VRAM cards.', 'Local photorealistic synthesis', 'Open Source', 'N/A', 'Local, UI nodes'),
('v_runway_gen45', 't_runway', 'Gen-4.5', 'Runway Gen-4.5', 'Transformed from a video generator into a General World Model. Features pixel-perfect physics simulation, native environmental audio (Foley), and infinite multi-shot editing.', 'Native audio VFX physics simulation', 'Enterprise', 'N/A', 'Web, API'),
('v_luma_ray314', 't_luma', 'Ray 3.14', 'Luma Ray 3.14', 'First reasoning-driven video editor producing true 16bit HDR renders. Allows direct character identity planting mapped perfectly onto existing live-action 1080p clips.', 'Post-production and HDR color grading', 'Pro', 'N/A', 'Web'),
('v_kling_26', 't_kling', '2.6 Pro', 'Kling 2.6 Pro', 'Achieves the impossible by generating perfectly lip-synced video alongside human voices, all while handling continuous complex movement tracking for up to 30 seconds.', 'Lip-synced audiovisual generation', 'Pro', 'N/A', 'Web'),

-- Audio & Music
('v_suno_v5', 't_suno', 'V5 Studio', 'Suno V5', 'Transforms text completely into a full studio DAW output workspace. Supports high-fidelity MIDI extraction, separated stems, and advanced emotional expression.', 'Studio music generation & stem extraction', 'Pro', 'N/A', 'Web'),
('v_udio_26', 't_udio', 'Udio 2026', 'Udio 2026', 'Empowered by chat-to-edit capabilities (Meloty AI) enabling users to literally text changes into the song. Legally sources via the Merlin collective.', 'Chat-driven music editing & tracking', 'Pro', 'N/A', 'Web'),
('v_eleven_v3_voice', 't_elevenlabs', 'Eleven v3', 'ElevenLabs v3', 'Allows purely textual voice design (e.g. "Scratchy old witch") without traditional voice cloning. Includes in-line audio tags like [whispers] and highly complex pronunciation control.', 'Zero-shot voice design & audio tags', 'Enterprise', 'N/A', 'Web, API'),
('v_voxtral_realtime', 't_mistral', 'Voxtral Realtime', 'Voxtral Realtime', 'Open-source 4B parameter model built strictly for real-time customer service voice streaming. Experiences under 200ms latency without skipping.', 'Real-time conversational streaming', 'Open Source', 'N/A', 'Local, API'),

-- Code (IDEs & Companions)
('v_cursor_26', 't_cursor', '2026', 'Cursor', 'The default IDE for the AI era. Autonomously reads across thousands of files to apply full architecture refactors directly using tools like Claude 4.6.', 'Autonomous codebase-wide refactors', 'Pro', 'Large via API', 'Desktop IDE'),
('v_replit_agent3', 't_replit', 'Agent 3', 'Replit Agent 3', 'Perfect tool for non-engineers. Translates a raw text prompt straight into a functional deployed application, complete with database provisioning.', 'Text-to-Prototype zero-setup deployment', 'Pro', 'N/A', 'Web IDE'),

-- Research & Social
('v_sonar_council', 't_perplexity', 'Model Council', 'Perplexity Model Council', 'Runs a single query across multiple apex models (GPT-5.4, Claude 4.6, Gemini 3) simultaneously to calculate a consensus. Nullifies hallucination risks for high-stakes enterprise decisions.', 'High-stakes consensus research', 'Enterprise', 'Large', 'Web, API'),
('v_character_pip', 't_characterai', 'PipSqueak', 'Character.ai PipSqueak', 'Companions possessing long-term emotional memory and interactive multi-modal real-time audio chat capabilities.', 'Virtual companionship and roleplay', 'Free', 'Extensive', 'Web, App');
