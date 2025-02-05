import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../src/ContextAPI/AuthContext';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
