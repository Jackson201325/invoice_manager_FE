module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['jsx-control-statements', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    //'airbnb',
    'prettier',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  globals: {
    PROD: true,
    LOCAL: true,
    If: true,
    Else: true,
    For: true,
    Choose: true,
    When: true,
    Otherwise: true
  },
  // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
  rules: {
    // Typescript
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    'arrow-body-style': [1, 'as-needed'],
    'eol-last': [2, 'always'], // enforces that files end with a newline
    'func-names': 0,
    'no-console': [1, { allow: ['info', 'warn', 'error'] }],
    'no-debugger': 1,
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 0 }],
    'no-param-reassign': 1,
    'no-plusplus': 0,
    'no-shadow': 1,
    'jsx-a11y/no-onchange': 'warn',
    'no-underscore-dangle': 1,
    'no-unused-expressions': [2, { allowShortCircuit: true }],
    '@typescript-eslint/explicit-function-return-type': [
      // fix
      'off',
      { allowExpressions: true, allowTypedFunctionExpressions: true }
    ],
    '@typescript-eslint/interface-name-prefix': [1, { prefixWithI: 'always' }],
    curly: [2, 'all'],

    'no-nested-ternary': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'jsx-a11y/no-autofocus': 0,

    // JSX <If> Plugin
    'jsx-control-statements/jsx-choose-not-empty': 1,
    'jsx-control-statements/jsx-for-require-each': 1,
    'jsx-control-statements/jsx-for-require-index': 0,
    'jsx-control-statements/jsx-for-require-of': 1,
    'jsx-control-statements/jsx-if-require-condition': 1,
    'jsx-control-statements/jsx-if-single-child': 0, // Plugin supports multiple children for an if statement (yay!)
    'jsx-control-statements/jsx-otherwise-once-last': 1,
    'jsx-control-statements/jsx-use-if-tag': 0, // this will warn if you use a terinary instead of If tag. Will turn this on when ready to update legacy code
    'jsx-control-statements/jsx-when-require-condition': 1,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/jsx-no-undef': ['error', { allowGlobals: true }]

    /* WIP
    // React
    'react/display-name': 0,
    'react/jsx-boolean-value': 1, //check
    'react/jsx-sort-props': 0,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-fragments': [2, 'syntax'],
    'react/jsx-no-target-blank': [0, { enforceDynamicLinks: 'never' }],
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0, // allow non-required props to no have default values
    'react/jsx-filename-extension': 0, // allows JSX in js files
    'react/sort-comp': 0, // Don't enforce a react prototype order
    'react/forbid-prop-types': 0,
    'react/jsx-no-bind': 0,
    'react/no-unused-prop-types': 1, // fix
    
    'react/jsx-pascal-case': 0,
    'react/prefer-stateless-function': 0,
    'react/no-string-refs': 1, // fix
    'react/no-find-dom-node': 1, // fix
    'react/no-array-index-key': 0,
    'react/prefer-es6-class': 0, // allow createClass for now, until legacy code migrated
    'react/default-props-match-prop-types': 1, // fix
    'react/no-access-state-in-setstate': 1, // fix
    'react/no-unused-state': 1,
    'react/jsx-curly-brace-presence': [2, 'never'],
    'lines-between-class-members': 0,
    'react/button-has-type': 1,

    'jsx-a11y/label-has-for': 0, // fix?
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,

    


    '@typescript-eslint/no-use-before-define': [
      'warn',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      2,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true, varsIgnorePattern: '^_$' },
    ],
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-use-before-define': 1, // fix
    '@typescript-eslint/class-name-casing': 1,
    '@typescript-eslint/camelcase': ['warn', { properties: 'never' }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/array-type': 1,
    */
  },
  settings: {
    jsx: true,
    // flowtype: {
    //   onlyFilesWithFlowAnnotation: true,
    // },
    react: {
      version: 'detect'
    }
  }
};
