import '@/styles/index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app';

const rootElement = document.getElementById('root');

if (rootElement === null) {
    throw new Error('Root element not found');
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
