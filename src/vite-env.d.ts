/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly DEV: boolean;
    readonly MODE: 'development' | 'production';
    readonly PROD: boolean;
    readonly VITE_RESUME_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
