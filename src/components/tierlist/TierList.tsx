import React, { useState } from 'react';
import type { ToolVersion } from '../../data/agents';

import { cn } from '../../utils/utils';
import { Heart, Activity } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import AuthModal from '../shared/AuthModal';

interface TierListProps {
  versions: ToolVersion[];
  categoryName: string;
  rankings: Record<string, number>;
  onOpenDetails: (version: ToolVersion) => void;
}

const TIERS = [
  { id: 'S', name: 'Awesome', color: 'bg-pink-500/20 border-pink-500/40 text-pink-400', threshold: 4.5 },
  { id: 'A', name: 'Cool', color: 'bg-orange-500/20 border-orange-500/40 text-orange-400', threshold: 3.5 },
  { id: 'B', name: 'Normal', color: 'bg-yellow-600/20 border-yellow-600/40 text-yellow-500', threshold: 2.5 },
  { id: 'C', name: 'Bad', color: 'bg-yellow-400/20 border-yellow-400/40 text-yellow-300', threshold: 1.5 },
  { id: 'D', name: 'Horrible', color: 'bg-green-500/20 border-green-500/40 text-green-400', threshold: 0 },
];

export const MOCK_AVERAGES: Record<string, number> = {
  'v_chatgpt_4o': 4.8,
  'v_claude_opus_4_6': 4.9,
  'v_cursor_1': 4.7,
  'v_gemini_3_1_pro': 3.9,
  'v_copilot_1': 3.8,
  'v_jasper_1': 2.6,
  'v_sora_1': 4.6,
  'v_runway_gen2': 3.8
};

const TierRow = ({ tier, versions, rankings, onOpenDetails, onVote }: { tier: typeof TIERS[0], versions: ToolVersion[], rankings: Record<string, number>, onOpenDetails: (v: ToolVersion) => void, onVote: (id: string) => void }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-[140px] bg-black/20 border border-white/5 rounded-2xl overflow-hidden mb-4 shadow-lg hover:border-white/10 transition-colors">
      <div className={cn("md:w-32 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/5", tier.color)}>
        <span className="text-4xl font-black drop-shadow-md mb-1">{tier.id}</span>
        <span className="text-xs font-bold uppercase tracking-wider">{tier.name}</span>
      </div>
      <div className="flex-1 p-4 flex flex-wrap gap-4 items-center content-start">
        {versions.length === 0 ? (
          <div className="w-full h-full flex items-center justify-center text-white/20 text-sm font-medium italic">
            No tools ranked in this tier yet
          </div>
        ) : (
          versions.map(version => {
            const score = rankings[version.id] || 0;
            return (
              <div 
                key={version.id}
                className="group relative flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-3 pr-4 transition-all cursor-pointer w-[280px]"
                onClick={() => onOpenDetails(version)}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 relative flex-shrink-0 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all">
                  <span className="text-lg font-black text-white/50 group-hover:text-indigo-300 transition-colors">{version.fullName.charAt(0)}</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-xl">
                    <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">View</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate group-hover:text-indigo-300 transition-colors">{version.fullName}</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Activity className="w-3 h-3 text-white/40" />
                    <span className="text-xs font-medium text-white/50">Avg: {score.toFixed(1)}</span>
                  </div>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onVote(version.id);
                  }}
                  className="p-2 rounded-full bg-black/20 text-white/40 hover:text-pink-400 hover:bg-pink-500/10 border border-transparent hover:border-pink-500/20 transition-all ml-auto"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const TierList: React.FC<TierListProps> = ({ versions, categoryName, rankings: initialRankings, onOpenDetails }) => {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [rankings, setRankings] = useState<Record<string, number>>(initialRankings);
  const [votingVersion, setVotingVersion] = useState<ToolVersion | null>(null);

  // Sync local rankings when props change
  React.useEffect(() => {
    setRankings(initialRankings);
  }, [initialRankings]);

  const getTierForScore = (score: number) => {
    if (score === 0) return 'D';
    for (const tier of TIERS) {
      if (score >= tier.threshold) return tier.id;
    }
    return 'D';
  };

  const handleInitVote = (versionId: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    const version = versions.find(v => v.id === versionId);
    if (version) setVotingVersion(version);
  };

  const handleCastVote = (score: number) => {
    if (!votingVersion) return;
    
    setRankings(prev => {
      const current = prev[votingVersion.id] || score;
      // Mock math for updating the average locally
      const newScore = (current * 10 + score) / 11; 
      return { ...prev, [votingVersion.id]: newScore };
    });
    setVotingVersion(null);
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">{categoryName} Tier List</h2>
          <p className="text-white/60 text-sm">Real-time community rankings based on user votes.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300">
          <Activity className="w-4 h-4" />
          <span className="text-sm font-medium">Live updating</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 relative">
        {TIERS.map(tier => {
          const tierVersions = versions.filter(v => getTierForScore(rankings[v.id] || 0) === tier.id).sort((a,b) => (rankings[b.id] || 0) - (rankings[a.id] || 0));
          return (
            <TierRow 
              key={tier.id} 
              tier={tier} 
              versions={tierVersions} 
              rankings={rankings}
              onOpenDetails={onOpenDetails}
              onVote={handleInitVote} 
            />
          );
        })}
      </div>

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}

      {votingVersion && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setVotingVersion(null)} />
          <div className="relative bg-[#1a1a24] border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-sm">
            <h3 className="text-xl font-bold text-white mb-2 text-center">Cast Your Vote</h3>
            <p className="text-white/60 text-sm text-center mb-6">How would you rank <span className="font-bold text-white">{votingVersion.fullName}</span>?</p>
            
            <div className="grid grid-cols-5 gap-2">
              {TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => handleCastVote(
                    tier.id === 'S' ? 5 : 
                    tier.id === 'A' ? 4 : 
                    tier.id === 'B' ? 3 : 
                    tier.id === 'C' ? 2 : 1
                  )}
                  className={`flex flex-col items-center p-3 rounded-xl border border-white/10 hover:border-white/30 transition-all ${tier.color} bg-opacity-10 hover:bg-opacity-20`}
                >
                  <span className="text-2xl font-black mb-1 drop-shadow-md">{tier.id}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">{tier.name}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-white/30 text-center mt-6">Voting helps update community tiers in real-time.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TierList;
