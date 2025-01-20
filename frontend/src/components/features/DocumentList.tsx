// components/features/DocumentList.tsx
import React from 'react';
import { BookOpen } from 'lucide-react';
import { useDocuments } from '@/hooks/useDocuments';
import { formatFileSize, formatRelativeTime } from '@/utils/helpers';

export const DocumentList: React.FC = () => {
  const { documents } = useDocuments();

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-4">
        <h2 className="font-semibold text-gray-700 mb-4">Recent Documents</h2>
        
        {documents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No documents uploaded yet</p>
          </div>
        ) : (
          <div className="space-y-2">
            {documents.map((doc) => (
              <div 
                key={doc.id}
                className="p-3 rounded-lg hover:bg-cyan-50 cursor-pointer group transition-all"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-cyan-100 rounded">
                    <BookOpen className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {doc.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">
                        {formatFileSize(doc.size)}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-500">
                        {formatRelativeTime(doc.uploadedAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};