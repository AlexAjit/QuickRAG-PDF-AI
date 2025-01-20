
// components/features/ProcessingStatus.tsx
import React from 'react';
import { Clock, RotateCcw } from 'lucide-react';

export const ProcessingStatus: React.FC = () => {
  return (
    <div className="p-4 border-t border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <Clock className="w-5 h-5 text-cyan-600 animate-pulse" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">Processing</p>
          <p className="text-xs text-gray-500 truncate">
            Analyzing document content...
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="animate-spin">
            <RotateCcw className="w-4 h-4 text-cyan-600" />
          </div>
        </div>
      </div>
    </div>
  );
};