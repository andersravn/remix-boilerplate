/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        '@remix-run/eslint-config',
        '@remix-run/eslint-config/node',
        'eslint:recommended',
        'plugin:you-dont-need-lodash-underscore/compatible', // https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
        'plugin:sonarjs/recommended', // https://github.com/SonarSource/eslint-plugin-sonarjs
        'plugin:regexp/recommended', // https://github.com/ota-meshi/eslint-plugin-regexp
        'plugin:import/recommended', // https://www.npmjs.com/package/eslint-plugin-import
        'plugin:import/typescript', //  https://github.com/import-js/eslint-plugin-import
        'plugin:array-func/recommended', // https://github.com/freaktechnik/eslint-plugin-array-func
        'plugin:react/recommended', // https://github.com/jsx-eslint/eslint-plugin-react
        'plugin:jsx-a11y/recommended' // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    ],

    plugins: [
        'sort-keys-fix',
        '@stylistic/eslint-plugin', // https://eslint.style/packages/default
        '@stylistic/eslint-plugin-jsx' // https://eslint.style/packages/jsx
    ],

    parserOptions: {
        ecmaVersion: 2020
    },

    rules: {
        'no-console': process.env.NODE_ENV !== 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV !== 'production' ? 'warn' : 'off',
        'no-useless-constructor': 'off',
        'standard/no-callback-literal': 'off',
        'eqeqeq': ['error', 'smart'],
        'object-shorthand': ['error', 'properties'],
        'no-return-assign': 'off',
        'prefer-promise-reject-errors': 'off',
        'no-prototype-builtins': 'off',
        'anchor-is-valid': 0,
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
        'prefer-template': 'error',
        'sort-keys-fix/sort-keys-fix': 'error',

        // Code smell rules
        'sonarjs/no-nested-template-literals': 'off',
        'sonarjs/cognitive-complexity': ['error', 25],
        'sonarjs/no-duplicate-string': ["error", { "threshold": 6 }],

        // Import rules
        'import/default': 'off',
        'import/no-unresolved': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-self-import': 'error',
        'sort-imports': ['error', { 'ignoreCase': true, 'ignoreDeclarationSort': true }],
        'import/newline-after-import': ['error', { count: 1 }],

        // Typescript rules
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/type-annotation-spacing': 'error',

        // NextJS rules
        '@next/next/no-html-link-for-pages': 'off',

        // React/JSX rules
        'react/jsx-no-undef': 1,
        'react/jsx-no-comment-textnodes': 1,
        'react/jsx-boolean-value': 1,
        'react/jsx-no-duplicate-props': 1,
        'react/jsx-key': 1,
        'react/jsx-fragments': [2, 'element'],
        'react/no-access-state-in-setstate': 1,
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-pascal-case': ['error'],

        // Stylistic rules
        '@stylistic/indent': ['error', 4],
        '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true }],
        '@stylistic/jsx-quotes': [2, 'prefer-double'],
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/space-before-blocks': ['error', 'always'],
        '@stylistic/space-in-parens': ['error', 'never'],
        '@stylistic/comma-spacing': ['error', { before: false, after: true }],
        '@stylistic/keyword-spacing': ['error', { 'after': true, 'before': true }],
        '@stylistic/arrow-spacing': ['error', { 'after': true, 'before': true }],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/template-curly-spacing': ['error', 'never'],
        '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
        '@stylistic/space-before-function-paren': ['error', 'never'],
        '@stylistic/padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: 'block' },
            { blankLine: 'always', prev: 'block', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block-like' },
            { blankLine: 'always', prev: 'block-like', next: '*' }
        ],
        '@stylistic/member-delimiter-style': ['error', {
            multiline: { delimiter: 'semi', requireLast: true },
            singleline: { delimiter: 'semi', requireLast: true },
            multilineDetection: 'brackets'
        }],
        '@stylistic/jsx/jsx-sort-props': 1,
        '@stylistic/jsx/jsx-props-no-multi-spaces': 1,
        '@stylistic/jsx-self-closing-comp': 2,
        '@stylistic/jsx/jsx-closing-bracket-location': ['error', 'after-props'],
        '@stylistic/jsx/jsx-curly-brace-presence': ['error', 'never'],
        '@stylistic/jsx/jsx-curly-newline': ['error', 'never'],
        '@stylistic/jsx/jsx-curly-spacing': ['error', 'never'],
        '@stylistic/jsx/jsx-equals-spacing': ['error', 'never'],
        '@stylistic/jsx/jsx-first-prop-new-line': ['error', 'never'],
        '@stylistic/jsx/jsx-max-props-per-line': ['error', { maximum: 4 }],
        '@stylistic/jsx/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            afterOpening: 'never',
            beforeClosing: 'never',
            beforeSelfClosing: 'never'
        }],
        '@stylistic/jsx/jsx-wrap-multilines': ['error', {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line'
        }],
    },
    
    ignorePatterns: [
        '**/*.cjs',
        '**/*.mjs',
        '.eslintrc.cjs',
        '**/*.js',
        '**/*.json',
        'node_modules',
        'public',
        'styles',
        'coverage',
        'dist',
        '**/*.mock.ts',
        '**/*d.ts',
        '**/*.stories.tsx',
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.stub.ts',
        '**/*.stub.tsx',
        '**/*.stubs.ts',
        '**/*.stubs.tsx'
    ],

    parser: '@typescript-eslint/parser',
    
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },

        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            },

            node: {
                extensions: [
                    '.js',
                    '.jsx'
                ]
            }
        }
    }
};
