import React, { useState, useRef, useEffect } from 'react';
import { Bot, Github, Search, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import AuthModal from '../shared/AuthModal';
import { TOOL_VERSIONS } from '../../data/agents';
import type { ToolVersion } from '../../data/agents';

interface NavbarProps {
  onSelectSearchItem: (version: ToolVersion) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSelectSearchItem }) => {
  const { user, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ToolVersion[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const results = TOOL_VERSIONS.filter(v => 
      v.fullName.toLowerCase().includes(query) || 
      v.description.toLowerCase().includes(query)
    );
    setSearchResults(results.slice(0, 5)); // Limit to top 5 hits
  }, [searchQuery]);

  const handleSelectResult = (version: ToolVersion) => {
    onSelectSearchItem(version);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0d0d0d]/80 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-500/20 rounded-lg backdrop-blur-sm border border-indigo-500/30">
                <Bot className="h-6 w-6 text-indigo-400" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white/90">
                AI<span className="text-indigo-400">Compare</span>
              </span>
            </div>
            
            <div className="hidden md:block flex-1 max-w-md mx-8" ref={searchRef}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-white/40" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-black/20 text-white/90 placeholder-white/40 focus:outline-none focus:bg-black/40 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-all"
                  placeholder="Search tools & versions..."
                />

                {isSearchOpen && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a24] border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
                    {searchResults.map(result => {
                      return (
                        <button
                          key={result.id}
                          onClick={() => handleSelectResult(result)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center">
                            <span className="text-sm font-bold text-white/50">{result.fullName.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">{result.fullName}</div>
                            <div className="text-xs text-white/50 truncate w-48">{result.bestFor}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
                {isSearchOpen && searchQuery.trim() !== '' && searchResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a24] border border-white/10 rounded-2xl shadow-2xl p-4 text-center text-sm text-white/50">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="text-white/60 hover:text-white transition-colors duration-200 hidden sm:block">
                <Github className="h-5 w-5" />
              </button>

              <div className="h-6 w-px bg-white/10 hidden sm:block mx-2"></div>

              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-white/80 hidden sm:block">
                    {user.displayName}
                  </span>
                  <button 
                    onClick={logout}
                    className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    title="Sign out"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-transparent text-white px-4 py-2 rounded-xl font-medium transition-all duration-200"
                >
                  <UserCircle className="h-5 w-5" />
                  <span className="hidden sm:inline">Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
};

export default Navbar;
