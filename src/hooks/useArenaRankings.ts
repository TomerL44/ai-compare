/**
 * ============================================================
 * ARENA_TIER_LIST_FEATURE — Hook for Arena AI leaderboard data
 * ============================================================
 * 
 * This hook loads the auto-generated arenaRankings.json file 
 * which is updated daily by scripts/syncTierList.ts.
 * 
 * TO REMOVE THIS FEATURE: Delete this file and remove its 
 * import from TierList.tsx (search "ARENA_TIER_LIST_FEATURE")
 * ============================================================
 */

import { useState, useEffect } from 'react';

export interface ArenaTierEntry {
  model: string;
  vendor: string;
  score: number;
  rank: number;
  tier: 'A' | 'B' | 'C' | 'D';
  votes: number;
}

export interface ArenaRankingsData {
  lastUpdated: string;
  source: string;
  leaderboard: string;
  totalModels: number;
  tiers: {
    A: ArenaTierEntry[];
    B: ArenaTierEntry[];
    C: ArenaTierEntry[];
    D: ArenaTierEntry[];
  };
  allModels: ArenaTierEntry[];
}

export function useArenaRankings() {
  const [data, setData] = useState<ArenaRankingsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRankings = async () => {
      try {
        // Dynamic import of JSON data
        const imported = await import('../data/arenaRankings.json');
        setData(imported.default as ArenaRankingsData);
        setError(null);
      } catch (err) {
        console.warn('[Arena Rankings] Could not load arenaRankings.json:', err);
        setError('Arena rankings data not available. Run: npm run sync-tierlist');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    loadRankings();
  }, []);

  return { data, loading, error };
}
