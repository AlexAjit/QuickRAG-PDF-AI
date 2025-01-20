import React from 'react';
import { FileText, Settings, Upload } from 'lucide-react';

interface HeaderProps {
  activeTab: 'chat' | 'documents'; // Make this match your valid tabs
  onTabChange: (tab: 'chat' | 'documents') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  // Explicitly type the tabs array
  const tabs: ('chat' | 'documents')[] = ['chat', 'documents'];

  return (
    <nav className="bg-white border-b border-cyan-100 shadow-sm fixed w-full z-10">
      <div className="max-w-[1920px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                QuickRAG
              </span>
            </div>

            <div className="hidden md:flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeTab === tab
                      ? 'bg-cyan-50 text-cyan-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => onTabChange(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all">
              <Upload className="w-4 h-4" />
              <span>Upload PDF</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};