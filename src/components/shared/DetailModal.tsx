import React from 'react';
import type { ToolVersion, Tool } from '../../data/agents';
import { X, Check } from 'lucide-react';
import { cn } from '../../utils/utils';

interface DetailModalProps {
  version: ToolVersion;
  parentTool: Tool | undefined;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ version, parentTool, onClose }) => {
  if (!version || !parentTool) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 mb-safe">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl overflow-hidden flex flex-col bg-[#111116] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-indigo-500/20 blur-[100px] pointer-events-none" />

        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02] relative z-10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-indigo-500/10 border border-indigo-500/20 shadow-inner">
               <span className="text-2xl font-black text-indigo-400">{parentTool.company.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight">{version.fullName}</h2>
              <p className="text-indigo-300/80 font-bold text-xs tracking-[0.2em] uppercase mt-1">{parentTool.company}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 relative z-10 overflow-auto max-h-[70vh]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-2">Summary</h3>
                <p className="text-white/80 leading-relaxed">{version.description}</p>
              </section>
              
              <section>
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-2">Best For</h3>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  <Check className="w-4 h-4" />
                  <span className="font-medium text-sm">{version.bestFor}</span>
                </div>
              </section>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Key Info</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs text-white/40 mb-1">Pricing Model</dt>
                    <dd>
                      <span className={cn(
                        "px-2 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wider",
                        version.pricingModel === 'Free' ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                        version.pricingModel === 'Pro' ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                        "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                      )}>
                        {version.pricingModel}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-white/40 mb-1">Context Window</dt>
                    <dd className="text-sm text-white font-medium">{version.contextWindow}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-white/40 mb-1">Platforms</dt>
                    <dd className="text-sm text-white/80">{version.platforms}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="flex gap-4 border-t border-white/10 pt-6">
            <a 
              href={parentTool.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex justify-center py-3 px-4 rounded-xl font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200"
            >
              Visit {parentTool.name} Website
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailModal;
