module.exports = {
    plugins: [
        '@stylistic/stylelint-plugin'
    ],

    extends: [
        'stylelint-config-recommended',
        'stylelint-config-standard',
    ],

    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'use',
                    'mixin',
                    'include'
                ]
            }
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: [
                    'deep',
                    'slotted',
                    'global'
                ]
            }
        ],
        '@stylistic/declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
        '@stylistic/indentation': 4,
        'custom-property-pattern': null,
        'selector-class-pattern': null,
        'custom-property-empty-line-before': null,
        'keyframes-name-pattern': null,
        'color-function-notation': null,
        'alpha-value-notation': null,
        'property-no-vendor-prefix': null,
        'custom-property-no-missing-var-function': null,
        '@stylistic/max-line-length': null, // Otherwise tailwind won't work well
        '@stylistic/string-quotes': 'single',
        'value-keyword-case': [
            'lower',
            {
                'camelCaseSvgKeywords': true
            }
        ]
    }
};
