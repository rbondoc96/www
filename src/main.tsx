import '@/styles/index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from '@/root';

const rootElement = document.getElementById('root');

if (rootElement === null) {
    throw new Error('Root element not found');
}

createRoot(rootElement).render(
    <StrictMode>
        <Root />
    </StrictMode>,
);
