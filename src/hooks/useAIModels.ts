import { useState, useEffect } from 'react';
import { TOOLS as INITIAL_TOOLS, TOOL_VERSIONS as INITIAL_TOOL_VERSIONS } from '../data/agents';
import type { Tool, ToolVersion } from '../data/agents';
import { MOCK_AVERAGES } from '../components/tierlist/TierList';

export interface RankingData {
  agentId: string;
  totalVotes: number;
  averageScore: number;
  tier: string;
}

export function useAIModels(categoryId: string | null) {
  const [tools, setTools] = useState<Tool[]>(INITIAL_TOOLS);
  const [toolVersions, setToolVersions] = useState<ToolVersion[]>(INITIAL_TOOL_VERSIONS);
  const [rankings, setRankings] = useState<Record<string, number>>(MOCK_AVERAGES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchDynamicData = async () => {
      setLoading(true);
      try {
        // Fetch tools and tool_versions from the backend (assuming the endpoints exist or will exist)
        // We use Promise.allSettled to ensure our app doesn't crash if the endpoints aren't available yet
        const [toolsRes, versionsRes, rankingsRes] = await Promise.allSettled([
          fetch('http://localhost:3001/api/tools').then(res => res.ok ? res.json() : Promise.reject()),
          fetch('http://localhost:3001/api/tool_versions').then(res => res.ok ? res.json() : Promise.reject()),
          fetch(`http://localhost:3001/api/rankings/${categoryId || 'all'}`).then(res => res.ok ? res.json() : Promise.reject())
        ]);

        if (isMounted) {
          if (toolsRes.status === 'fulfilled' && toolsRes.value) setTools(toolsRes.value);
          if (versionsRes.status === 'fulfilled' && versionsRes.value) setToolVersions(versionsRes.value);
          
          if (rankingsRes.status === 'fulfilled' && rankingsRes.value) {
            const dynamicRankings: Record<string, number> = {};
            rankingsRes.value.forEach((r: RankingData) => {
              dynamicRankings[r.agentId] = r.averageScore;
            });
            // Merge with local mock averages as a fallback for agents not returned by backend
            setRankings(prev => ({ ...prev, ...dynamicRankings }));
          }
        }
      } catch (error) {
        console.error('[Frontend] Error fetching dynamic data from backend:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchDynamicData();

    return () => {
      isMounted = false;
    };
  }, [categoryId]);

  return { tools, toolVersions, rankings, loading, setRankings };
}
