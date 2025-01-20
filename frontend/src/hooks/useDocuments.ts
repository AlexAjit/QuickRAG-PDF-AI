// hooks/useDocuments.ts
import { useState, useCallback } from 'react';

interface Document {
  id: string;
  name: string;
  size: number;
  uploadedAt: Date;
}

export const useDocuments = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const uploadDocument = useCallback(async (file: File) => {
    setIsUploading(true);
    try {
      // API call to upload document
      const formData = new FormData();
      formData.append('file', file);
      
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newDoc: Document = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        uploadedAt: new Date()
      };
      
      setDocuments(prev => [...prev, newDoc]);
    } catch (error) {
      console.error('Error uploading document:', error);
    } finally {
      setIsUploading(false);
    }
  }, []);

  return {
    documents,
    isUploading,
    uploadDocument
  };
};
