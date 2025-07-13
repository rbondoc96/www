// @ts-check

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const flatCompat = new FlatCompat({
    baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export default tseslint.config([
    {
        name: 'ignores',
        ignores: [
            './**/*.scss',
            'packages/*/node_modules/**',
            'packages/*/.next/**',
            'packages/*/dist/**',
            'packages/studio/.sanity/**',
        ],
    },
    {
        name: 'base',
        files: ['packages/**/*.{js,mjs,cjs,ts,jsx,tsx}', '*.{js,mjs,cjs,ts}'],
        languageOptions: {
            ecmaVersion: 'latest',
            parserOptions: {
                sourceType: 'module',
            },
        },
        plugins: {
            'import': pluginImport,
            'simple-import-sort': pluginSimpleImportSort,
        },
        rules: {
            'no-redeclare': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                },
            ],
            'sort-imports': 'off',
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'import/no-nodejs-modules': 'error',
            'import/order': 'off',
            'simple-import-sort/exports': 'warn',
            'simple-import-sort/imports': [
                'error',
                {
                    // prettier-ignore
                    groups: [
                        ['^\\u0000'],
                        [
                            '^node:',
                            '^@?\\w',
                            '^~(/.*|$)',
                            '^!(/.*|$)',
                            '^@(/.*|$)',
                        ],
                        ['^', '^\\.'],
                    ],
                },
            ],
        },
    },
    {
        name: 'allow-nodejs-modules',
        files: [
            './eslint.config.mjs',
            './packages/web/vitest.config.ts',
            './packages/web/src/**/*{js,cjs,mjs,ts,cts,mts}',
            './packages/studio/**/*.{js,mjs,cjs,ts}',
        ],
        rules: {
            'import/no-nodejs-modules': 'off',
        },
    },
    {
        name: 'web',
        files: ['./packages/web/src/**/*.{jsx,tsx}'],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            'jsx-a11y': pluginJsxA11y,
            'react': pluginReact,
            'react-hooks': pluginReactHooks,
        },
        rules: {
            ...pluginJsxA11y.configs.recommended.rules,
            ...pluginReact.configs.recommended.rules,
            ...pluginReactHooks.configs['recommended-latest'].rules,
            'react/react-in-jsx-scope': 'off',
            'react-hooks/exhaustive-deps': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    ...flatCompat
        .config({
            extends: ['next'],
        })
        .map((config) => ({
            ...config,
            files: config.files?.map((file) => `packages/web/${file}`) || ['packages/web/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        })),
    eslint.configs.recommended,
    pluginPrettierRecommended,
    tseslint.configs.recommended,
]);
