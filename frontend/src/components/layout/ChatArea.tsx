// components/layout/ChatArea.tsx
import React from 'react';
import { Send, MessageSquare, AlertCircle } from 'lucide-react';
import { ChatMessages } from '../features/ChatMessages';

interface ChatAreaProps {
  onSendMessage: (message: string) => void;
}

export const ChatArea: React.FC<ChatAreaProps> = ({ onSendMessage }) => {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <ChatMessages />
      
      <div className="p-4 border-t border-cyan-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Ask about your documents..."
                className="w-full px-4 py-3 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent pl-12"
              />
              <MessageSquare className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            </div>
            <button 
              onClick={() => onSendMessage('test')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send</span>
            </button>
          </div>
          
          <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4" />
              <span>Questions are answered based on your uploaded documents</span>
            </div>
            <button className="text-cyan-600 hover:text-cyan-700">
              Clear conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};