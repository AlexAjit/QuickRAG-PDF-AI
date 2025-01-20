// components/layout/Sidebar.tsx
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Search, Filter, BookOpen, Clock, RotateCcw } from 'lucide-react';
import { DocumentList } from '../features/DocumentList';
import { ProcessingStatus } from '../features/ProcessingStatus';

interface SidebarProps {
  visible: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ visible }) => {
  return (
    <div className={`w-80 bg-white border-r border-cyan-100 flex flex-col transition-all ${
      visible ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="p-4 border-b border-cyan-100">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input 
            type="text"
            placeholder="Search documents..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
      </div>

      <DocumentList />  
      <ProcessingStatus />
    </div>
  );
};