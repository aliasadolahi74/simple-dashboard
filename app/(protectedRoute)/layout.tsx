import React from 'react';
import ProtectedRoute from '@/src/common/ProtectedRoute';

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
};

export default Layout;