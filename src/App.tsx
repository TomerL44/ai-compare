import { useState, useMemo } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import AgentCard from './components/compare/AgentCard';
import ComparisonTable from './components/compare/ComparisonTable';
import TierList from './components/tierlist/TierList';
import DetailModal from './components/shared/DetailModal';
import { CATEGORIES } from './data/agents';
import type { ToolVersion } from './data/agents';
import { useAIModels } from './hooks/useAIModels';
import { Sparkles, ArrowRightLeft, ListMinus } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

type ViewMode = 'compare' | 'tierlist';

function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('compare');
  const [selectedVersionForDetails, setSelectedVersionForDetails] = useState<ToolVersion | null>(null);

  const { tools, toolVersions, rankings } = useAIModels(activeCategory);

  // Filter specific versions based on category of their parent tools
  const filteredVersions = useMemo(() => {
    if (!activeCategory) return toolVersions;
    return toolVersions.filter(v => {
      const parent = tools.find(t => t.id === v.toolId);
      return parent?.categoryId === activeCategory;
    });
  }, [activeCategory, tools, toolVersions]);

  const comparedVersions = useMemo(() => {
    return comparisonList.map(id => toolVersions.find(v => v.id === id)!).filter(Boolean);
  }, [comparisonList, toolVersions]);

  const handleToggleCompare = (versionId: string) => {
    setComparisonList(prev => {
      if (prev.includes(versionId)) {
        return prev.filter(id => id !== versionId);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, versionId];
    });
  };

  const handleRemoveCompare = (versionId: string) => {
    setComparisonList(prev => prev.filter(id => id !== versionId));
    if (comparisonList.length <= 1) {
      setIsComparisonOpen(false);
    }
  };

  const handleOpenDetails = (version: ToolVersion) => {
    setSelectedVersionForDetails(version);
  };

  const activeCategoryName = CATEGORIES.find(c => c.id === activeCategory)?.name || 'All AI Tools';

  return (
    <div className="min-h-screen text-white font-sans selection:bg-indigo-500/30">
      <Navbar onSelectSearchItem={handleOpenDetails} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Discover the best AI tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
              Find Your Perfect AI <span className="text-indigo-400">Agent</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Compare top AI assistants, or explore the community-ranked Tier Lists.
            </p>
          </div>

          <div className="flex items-center bg-black/20 p-1 rounded-2xl border border-white/10 backdrop-blur-md self-center md:self-auto flex-shrink-0">
            <button
              onClick={() => setViewMode('compare')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                viewMode === 'compare' 
                  ? 'bg-white/10 text-white shadow-lg' 
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <ArrowRightLeft className="w-4 h-4" />
              Compare
            </button>
            <button
              onClick={() => setViewMode('tierlist')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                viewMode === 'tierlist' 
                  ? 'bg-white/10 text-white shadow-lg' 
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <ListMinus className="w-4 h-4" />
              Tier List
            </button>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
          
          <div className="flex-1 w-full min-w-0">
            {viewMode === 'compare' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVersions.map(version => (
                  <AgentCard
                    key={version.id}
                    agent={version}
                    isCompared={comparisonList.includes(version.id)}
                    dynamicScore={rankings[version.id] || 0}
                    onToggleCompare={handleToggleCompare}
                    onClickDetails={() => handleOpenDetails(version)}
                    disabled={comparisonList.length >= 3}
                  />
                ))}
                
                {filteredVersions.length === 0 && (
                  <div className="col-span-full py-12 text-center text-white/40">
                    <p>No AI tools found for this category.</p>
                  </div>
                )}
              </div>
            ) : (
              <TierList 
                versions={filteredVersions} 
                categoryName={activeCategoryName}
                rankings={rankings}
                onOpenDetails={handleOpenDetails}
              />
            )}
          </div>
        </div>
      </main>

      {viewMode === 'compare' && comparisonList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 sm:p-6 flex justify-center z-40 pointer-events-none">
          <div className="bg-[#1a1a24]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-6 pointer-events-auto animate-in slide-in-from-bottom-5">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {comparedVersions.map(v => {
                  return (
                    <div 
                      key={v.id}
                      className="w-10 h-10 rounded-full border-2 border-[#1a1a24] bg-indigo-900/50 flex items-center justify-center ring-1 ring-white/10 shadow-lg"
                    >
                      <span className="text-xs font-bold text-indigo-200">{v.fullName.charAt(0)}</span>
                    </div>
                  );
                })}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white">
                  {comparisonList.length} of 3 selected
                </p>
                <p className="text-xs text-white/50">Click compare to view details</p>
              </div>
            </div>
            
            <div className="flex gap-3 ml-auto">
              <button
                onClick={() => setComparisonList([])}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                Clear
              </button>
              <button
                onClick={() => setIsComparisonOpen(true)}
                disabled={comparisonList.length < 2}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-white/10 disabled:text-white/30 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-200"
              >
                <ArrowRightLeft className="w-4 h-4" />
                Compare
              </button>
            </div>
          </div>
        </div>
      )}

      {isComparisonOpen && (
        <ComparisonTable 
          agents={comparedVersions} 
          onRemove={handleRemoveCompare} 
          onClose={() => setIsComparisonOpen(false)} 
        />
      )}

      {selectedVersionForDetails && (
        <DetailModal
          version={selectedVersionForDetails}
          parentTool={tools.find(t => t.id === selectedVersionForDetails.toolId)}
          onClose={() => setSelectedVersionForDetails(null)}
        />
      )}
      <Analytics />
    </div>
  );
}

export default App;
