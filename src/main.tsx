import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ← ADD THIS
import './index.css';
import App from './App.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/next';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Analytics />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
