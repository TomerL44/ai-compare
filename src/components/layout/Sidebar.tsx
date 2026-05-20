import React from 'react';
import { CATEGORIES } from '../../data/agents';
import { Code2, ListTodo, PenTool, Video, LayoutGrid } from 'lucide-react';
import { cn } from '../../utils/utils';

interface SidebarProps {
  activeCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'code':
      return <Code2 className="w-5 h-5" />;
    case 'tasks':
      return <ListTodo className="w-5 h-5" />;
    case 'writing':
      return <PenTool className="w-5 h-5" />;
    case 'video':
      return <Video className="w-5 h-5" />;
    default:
      return <LayoutGrid className="w-5 h-5" />;
  }
};

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <aside className="w-full md:w-72 lg:w-80 flex-shrink-0">
      <div className="sticky top-24 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
        <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4 px-2">
          Categories
        </h3>
        <ul className="space-y-2 flex flex-row overflow-x-auto md:flex-col md:overflow-x-visible pb-2 md:pb-0">
          <li>
            <button
              onClick={() => onSelectCategory(null)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-all duration-200 whitespace-nowrap",
                activeCategory === null
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
              )}
            >
              <LayoutGrid className="w-5 h-5" />
              <span className="font-medium">All Tools</span>
            </button>
          </li>
          
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onSelectCategory(category.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-all duration-200 whitespace-nowrap",
                  activeCategory === category.id
                    ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
                )}
              >
                {getCategoryIcon(category.id)}
                <span className="font-medium">{category.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
