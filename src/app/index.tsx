import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Providers from './providers/index.ts';
import App from './App.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
