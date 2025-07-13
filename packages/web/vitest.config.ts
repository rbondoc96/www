import { resolve } from 'node:path';
import pluginReact from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [tsconfigPaths(), pluginReact()],
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
