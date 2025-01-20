// app/layout.tsx (or your root layout file)

import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        {children}
      </body>
    </html>
  );
};

export default Layout;