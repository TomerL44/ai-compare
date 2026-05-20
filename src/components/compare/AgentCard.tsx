import React, { useState } from 'react';
import type { ToolVersion } from '../../data/agents';
import { TOOLS } from '../../data/agents';
import { ArrowRightLeft, Info, Activity, Heart } from 'lucide-react';

interface AgentCardProps {
  agent: ToolVersion;
  isCompared: boolean;
  dynamicScore?: number;
  onToggleCompare: (id: string) => void;
  onClickDetails: () => void;
  disabled?: boolean;
}

const AgentCard: React.FC<AgentCardProps> = ({ 
  agent, 
  isCompared,
  dynamicScore = 0,
  onToggleCompare, 
  onClickDetails,
  disabled 
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const parent = TOOLS.find(t => t.id === agent.toolId);
  const company = parent?.company || 'Unknown';

  return (
    <div className="group relative flex flex-col bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10">
      
      {/* Top Banner / Color Accent */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex w-full justify-between items-start mb-4">
          <div 
            className="flex w-full items-start justify-between cursor-pointer group/title gap-3"
            onClick={onClickDetails}
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover/title:text-indigo-400 transition-colors break-words leading-tight tracking-wide">
                {agent.fullName}
              </h3>
              
              <div className="flex items-center gap-1.5 mb-1.5">
                <Activity className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium text-white/80 tracking-wide">Avg: {dynamicScore.toFixed(1)}</span>
              </div>
              
              <p className="text-xs font-semibold text-white/40 truncate uppercase tracking-widest">{company}</p>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFavorite(!isFavorite);
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0 ${
                  isFavorite 
                    ? 'bg-pink-500/20 text-pink-500 border border-pink-500/30' 
                    : 'bg-white/5 hover:bg-pink-500/10 text-white/40 hover:text-pink-400 border border-transparent'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 group-hover/title:bg-indigo-500/20 text-white/40 group-hover/title:text-indigo-400 transition-colors shrink-0">
                 <Info className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/70 text-sm mb-6 flex-1 line-clamp-2">
          {agent.description}
        </p>

        <div className="flex items-center gap-3 mb-6">
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${
            agent.pricingModel === 'Free' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
            agent.pricingModel === 'Pro' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
            'bg-purple-500/10 text-purple-400 border-purple-500/20'
          }`}>
            {agent.pricingModel}
          </span>
          <span className="text-xs text-white/40">•</span>
          <span className="text-xs font-medium text-white/60">{agent.contextWindow}</span>
        </div>

        <div className="pt-4 border-t border-white/5 flex gap-3">
          <button
            onClick={onClickDetails}
            className="flex-1 py-2.5 px-4 rounded-xl text-sm font-medium border border-white/10 hover:bg-white/5 text-white transition-all"
          >
            Details
          </button>
          <button
            onClick={() => onToggleCompare(agent.id)}
            disabled={!isCompared && disabled}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              isCompared 
                ? 'bg-indigo-600 border border-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' 
                : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
            } ${(!isCompared && disabled) ? 'opacity-50 cursor-not-allowed hidden' : ''}`}
          >
            <ArrowRightLeft className="w-4 h-4" />
            {isCompared ? 'Remove' : 'Compare'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
