import React from 'react';
import type { ToolVersion } from '../../data/agents';
import { TOOLS } from '../../data/agents';
import { X } from 'lucide-react';
import { cn } from '../../utils/utils';

interface ComparisonTableProps {
  agents: ToolVersion[];
  onRemove: (id: string) => void;
  onClose: () => void;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ agents, onRemove, onClose }) => {
  if (agents.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 mb-safe">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col bg-[#111116] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-indigo-500/20 blur-[100px] pointer-events-none" />

        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02] relative z-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            Comparison <span className="text-indigo-400 font-medium text-lg">({agents.length} Models)</span>
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-auto flex-1 p-6 relative z-10 custom-scrollbar">
          <div className="min-w-[800px]">
            {/* Headers */}
            <div className="grid grid-cols-[200px_1fr] gap-6 mb-8">
              <div className="font-medium text-white/40 flex items-end pb-4 border-b border-white/10">Feature</div>
              <div className="grid gap-6 border-b border-white/10 pb-4" style={{ gridTemplateColumns: `repeat(${agents.length}, minmax(0, 1fr))` }}>
                {agents.map(agent => {
                  const parent = TOOLS.find(t => t.id === agent.toolId);
                  return (
                    <div key={agent.id} className="relative bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center">
                      <button
                        onClick={() => onRemove(agent.id)}
                        className="absolute -top-3 -right-3 p-1.5 bg-[#1a1a24] border border-white/10 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors shadow-lg"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 mb-3 shadow-inner">
                         <span className="text-2xl font-black text-indigo-400/80">
                           {agent.fullName.charAt(0)}
                         </span>
                      </div>
                      <h3 className="font-bold text-white text-lg">{agent.fullName}</h3>
                      <p className="text-xs text-white/50">{parent?.company}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Core Fields */}
            <div className="space-y-6">
              {[
                { label: 'Best For', key: 'bestFor' },
                { label: 'Pricing Model', key: 'pricingModel' },
                { label: 'Context Window', key: 'contextWindow' },
                { label: 'Platforms', key: 'platforms' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-[200px_1fr] gap-6 items-center py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors rounded-xl px-2">
                  <div className="font-semibold text-white/70 text-sm tracking-wide">{row.label}</div>
                  <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${agents.length}, minmax(0, 1fr))` }}>
                    {agents.map(agent => {
                      const val = agent[row.key as keyof ToolVersion];
                      return (
                        <div key={agent.id} className="text-sm text-white/90">
                          {row.key === 'pricingModel' ? (
                            <span className={cn(
                              "px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border inline-block",
                              val === 'Free' ? "bg-green-500/10 text-green-400 border-green-500/20" : 
                              val === 'Pro' ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : 
                              "bg-purple-500/10 text-purple-400 border-purple-500/20"
                            )}>
                              {val as React.ReactNode}
                            </span>
                          ) : (
                            val as React.ReactNode
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              
              {/* Description specific rendering */}
              <div className="grid grid-cols-[200px_1fr] gap-6 items-start py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors rounded-xl px-2">
                <div className="font-semibold text-white/70 text-sm tracking-wide mt-1">Summary</div>
                <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${agents.length}, minmax(0, 1fr))` }}>
                    {agents.map(agent => (
                       <div key={agent.id} className="text-sm text-white/60 leading-relaxed max-w-[280px]">
                         {agent.description}
                       </div>
                    ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
