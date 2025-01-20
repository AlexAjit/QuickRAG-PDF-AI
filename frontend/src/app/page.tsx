'use client';

import { useState } from 'react';
import { Header } from '../components/layout/Header'; // Ensure the path is correct
import { Sidebar } from '../components/layout/Sidebar';
import { ChatArea } from '../components/layout/ChatArea';
import { useDocuments } from '../hooks/useDocuments';
import { useChat } from '../hooks/useChat';

const Page = () => {
  // State for active tab ('chat' or 'documents')
  const [activeTab, setActiveTab] = useState<'chat' | 'documents'>('chat');

  // State to toggle sidebar visibility
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Custom hooks for document and chat functionality
  const { documents, isUploading, uploadDocument } = useDocuments();
  const { sendMessage } = useChat();

  // Handle tab change from Header
  const handleTabChange = (tab: 'chat' | 'documents') => {
    setActiveTab(tab); // Update active tab
    setSidebarVisible(tab === 'documents'); // Show sidebar only for 'documents'
  };

  // Handle sending chat messages
  const handleSendMessage = (message: string) => {
    if (message.trim()) {
      sendMessage(message);
    }
  };

  // Handle document upload
  const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadDocument(file);
    }
  };

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="flex flex-1 pt-16">
        {/* Sidebar - Visible only for 'documents' tab */}
        <Sidebar visible={sidebarVisible} />

        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Chat Area */}
          {activeTab === 'chat' && <ChatArea onSendMessage={handleSendMessage} />}

          {/* Documents Tab Content */}
          {activeTab === 'documents' && (
            <div className="p-4 space-y-4">
              {/* Upload Section */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Your Documents</h2>
                <label
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all cursor-pointer"
                  htmlFor="upload-input"
                >
                  Upload Document
                </label>
                <input
                  id="upload-input"
                  type="file"
                  className="hidden"
                  onChange={handleDocumentUpload}
                />
              </div>

              {/* Document List or Upload Status */}
              <div className="mt-4 space-y-4">
                {isUploading ? (
                  <div>Uploading...</div>
                ) : documents.length === 0 ? (
                  <div>No documents uploaded yet</div>
                ) : (
                  documents.map((doc) => (
                    <div key={doc.id} className="flex justify-between items-center border p-4 rounded-md">
                      <div>
                        <h3 className="font-semibold">{doc.name}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(doc.uploadedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400">
                        {(doc.size / 1024).toFixed(2)} KB
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;