module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "import/no-absolute-path": "error",
    "import/no-unresolved":"off",
    "import/extensions":"off",
    "class-methods-use-this":"off",
    "@typescript-eslint/indent": "off",
    "no-useless-constructor":"off",
    "no-useless-catch": "off"
  },
};
