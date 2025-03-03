module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-newline": "off",
        "array-bracket-spacing": "off",
        "array-callback-return": "warn",
        "array-element-newline": "off",
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "block-scoped-var": "off",
        "block-spacing": "warn",
        "brace-style": "off",
        "callback-return": "off",
        "camelcase": [
            "warn",
            {
                "properties": "never"
            }
        ],
        "capitalized-comments": "off",
        "class-methods-use-this": "error",
        "comma-dangle": "warn",
        "comma-spacing": "off",
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": "off",
        "computed-property-spacing": [
            "warn",
            "never"
        ],
        "consistent-return": "off",
        "consistent-this": "off",
        "curly": "error",
        "default-case": "off",
        "dot-location": "error",
        "dot-notation": "off",
        "eol-last": "warn",
        "eqeqeq": "off",
        "for-direction": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": [
            "warn",
            "never"
        ],
        "func-style": [
            "warn",
            "expression"
        ],
        "generator-star-spacing": "error",
        "getter-return": "warn",
        "global-require": "error",
        "guard-for-in": "off",
        "handle-callback-err": "error",
        "id-blacklist": "error",
        "id-length": "off",
        "id-match": "error",
        "indent": "off",
        "indent-legacy": "off",
        "init-declarations": "off",
        "jsx-quotes": "error",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "line-comment-position": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": "off",
        "lines-around-directive": "error",
        "max-depth": "warn",
        "max-len": "off",
        "max-lines": "off",
        "max-nested-callbacks": "error",
        "max-params": [
            "error",
            9
        ],
        "max-statements": "off",
        "max-statements-per-line": "warn",
        "new-cap": "off",
        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "off",
        "no-buffer-constructor": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-case-declarations": "warn",
        "no-confusing-arrow": "error",
        "no-continue": "warn",
        "no-console": "warn",
        "no-constant-condition": "warn",
        "no-cond-assign": "warn",
        "no-div-regex": "error",
        "no-delete-var": "off",
        "no-duplicate-imports": "error",
        "no-else-return": "warn",
        "no-empty-function": "warn",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "off",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-extra-boolean-cast": "warn",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "warn",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-inner-declarations": [
            "warn",
            "functions"
        ],
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "warn",
        "no-loop-func": "warn",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-multi-assign": "off",
        "no-multi-spaces": "off",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "off",
        "no-mixed-spaces-and-tabs": "warn",
        "no-native-reassign": "error",
        "no-negated-condition": "warn",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "warn",
        "no-new": "off",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "off",
        "no-path-concat": "error",
        "no-plusplus": "off",
        "no-process-env": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "warn",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-redeclare": "warn",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "error",
        "no-sync": "error",
        "no-tabs": "off",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "off",
        "no-undef-init": "warn",
        "no-undefined": "off",
        "no-underscore-dangle": "warn",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "warn",
        "no-unused-expressions": "error",
        "no-unused-vars": [
            "error",
            { "vars": "all", "args": "none"},
        ],
        "no-use-before-define": "warn",
        "no-useless-escape": "warn",
        "no-useless-call": "warn",
        "no-useless-computed-key": "error",
        "no-useless-concat": "off",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "off",
        "no-var": "off",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "warn",
        "no-with": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "object-property-newline": [
            "error",
            {
                "allowMultiplePropertiesPerLine": true
            }
        ],
        "object-shorthand": "off",
        "one-var": "off",
        "one-var-declaration-per-line": [
            "warn",
            "initializations"
        ],
        "operator-assignment": [
            "warn",
            "always"
        ],
        "operator-linebreak": "warn",
        "padded-blocks": "off",
        "padding-line-between-statements": "error",
        "prefer-arrow-callback": "off",
        "prefer-numeric-literals": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-spread": "off",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": "off",
        "radix": "warn",
        "require-jsdoc": "error",
        "rest-spread-spacing": "error",
        "semi": "error",
        "semi-spacing": "warn",
        "semi-style": [
            "error",
            "last"
        ],
        "sort-imports": "error",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-in-parens": "off",
        "space-infix-ops": "off",
        "space-unary-ops": "warn",
        "spaced-comment": "off",
        "strict": [
            "error",
            "never"
        ],
        "switch-colon-spacing": "warn",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": [
            "error",
            "never"
        ],
        "vars-on-top": "off",
        "wrap-iife": "off",
        "wrap-regex": "warn",
        "yield-star-spacing": "error",
        "yoda": [
            "error",
            "never"
        ],
        "prefer-const": "off"
    },
    "globals": {
        "Zarafa": true,
        "_": true,
        "container": true,
        "Ext": true,
        "pgettext": true,
        "ngettext": true,
        "npgettext": true,
        "urlActionData": true,
        "resizeLoginBox": true,
        "tinymce": true,
        "userManager": true,
        "DOMPurify": true,
    }
};