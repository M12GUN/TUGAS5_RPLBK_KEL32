// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot for React 18
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
