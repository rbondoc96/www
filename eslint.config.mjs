// @ts-check

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
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
        ignores: ['./**/*.scss'],
    },
    {
        name: 'base',
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            parserOptions: {
                sourceType: 'module',
            },
        },
        plugins: {
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
        files: ['./eslint.config.mjs', './vitest.config.ts', './src/**/*{js,cjs,mjs,s,cts,mts}'],
        rules: {
            'import/no-nodejs-modules': 'off',
        },
    },
    {
        name: 'web',
        files: ['./src/**/*.{jsx,tsx}'],
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
    ...flatCompat.config({
        extends: ['next'],
    }),
    eslint.configs.recommended,
    pluginPrettierRecommended,
    tseslint.configs.recommended,
]);
