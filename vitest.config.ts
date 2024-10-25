import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

import { dirname } from './helpers';

const __dirname = dirname(import.meta.url);

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    test: {
        environment: 'jsdom',
        include: ['__tests__/**/*.spec.{ts,tsx}'],
        setupFiles: [resolve(__dirname, '__tests__/setup.ts')],
    },
});