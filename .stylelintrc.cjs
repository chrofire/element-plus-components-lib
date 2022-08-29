/* eslint-env node */
/** @type {import('stylelint').Config} */
module.exports = {
    processors: [],
    extends: [
        // 拓展 stylelint 兼容 scss
        'stylelint-config-standard-scss',
        // 拓展 stylelint 兼容 vue (依赖 postcss-html)
        'stylelint-config-recommended-vue'
    ],
    ignoreFiles: ['node_modules/**/*', 'dist/**/*'],
    rules: {
        indentation: 4,
        'rule-empty-line-before': [
            'always',
            {
                except: [
                    'after-rule',
                    'after-single-line-comment',
                    'inside-block-and-after-rule',
                    'inside-block',
                    'first-nested'
                ]
            }
        ],
        'no-empty-source': null,
        'block-no-empty': null,
        'selector-pseudo-class-no-unknown': null,
        'selector-pseudo-element-no-unknown': null,
        'no-duplicate-selectors': null,
        'at-rule-no-unknown': null,
        'selector-class-pattern': null
    }
}