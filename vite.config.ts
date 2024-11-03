import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv, type PluginOption } from 'vite';

type UmamiConfig = {
    url?: string;
    websiteId?: string;
};

function injectUmamiAnalytics(mode: string, config: UmamiConfig): PluginOption {
    return {
        name: 'inject-umami-analytics',
        transformIndexHtml: (html) => {
            if (mode !== 'production' || !config.url || !config.websiteId) {
                return html.replace(/<!-- Umami Analytics -->/, '');
            }

            return html.replace(
                /<!-- Umami Analytics -->/,
                `<script defer src="${config.url}" data-website-id="${config.websiteId}"></script>`,
            );
        },
    };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, __dirname);

    return {
        plugins: [
            react(),
            injectUmamiAnalytics(mode, { url: env['VITE_UMAMI_SCRIPT_URL'], websiteId: env['VITE_UMAMI_WEBSITE_ID'] }),
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
    };
});
