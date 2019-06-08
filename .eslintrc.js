// ESLint configuration
// http://eslint.org/docs/user-guide/configuring

const rulesDirPlugin = require('eslint-plugin-rulesdir')
rulesDirPlugin.RULES_DIR = 'tools/eslint-rules'


module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'css-modules/no-unused-class': [0],
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [
      'warning',
      {
        components: ['Link'],
        specialLink: ['route'],
      },
    ],

    'jsx-a11y/click-events-have-key-events': 'warning',
    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error',

    // All of our extra rules
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'import/no-named-as-default': 'error',
    'import/prefer-default-export': 'warning',
    'no-alert': 'error',
    'no-bitwise': 'error',
    'react/prop-types': 'error',
    'react/forbid-prop-types': 'warning',
    'react/no-multi-comp': ['warning', { ignoreStateless: true }],
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        allowBind: false,
        ignoreRefs: true,
        allowArrowFunctions: false,
      },
    ],
    'jsx-a11y/label-has-for': 'warning',
    'jsx-a11y/no-static-element-interactions': 'warning',
    'jsx-a11y/click-events-have-key-events': 'warning',

    // custom local rules
    'rulesdir/redux-actions': 'error',
    }
};