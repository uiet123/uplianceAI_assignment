import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StateContext from './ContextAPI/StateContext';
import { AuthProvider } from './ContextAPI/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateContext>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StateContext>
);