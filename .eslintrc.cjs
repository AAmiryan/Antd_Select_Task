module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/recommended",
    "prettier" 
],
overrides: [
  {
    "files": ["*.tsx", "*.ts"],
    "rules": {
      "react/prop-types": "off"
    }
  }
],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project":  ['tsconfig.json', 'tsconfig.node.json'],
    "tsconfigRootDir": "./",
},
  plugins: ['react-refresh', "react", "react-hooks", "@typescript-eslint", "import", "prettier"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-duplicate-imports": "error",
    "eol-last": 1,
    "react/react-in-jsx-scope": "off",
    "no-multiple-empty-lines": [
      "error",
      {
       "max": 1,
       "maxEOF": 0
      }
   ],
   "@typescript-eslint/restrict-plus-operands": "error",
   "no-console": "warn",
   "no-unused-vars":["error", { "args": "none" }],
   "no-trailing-spaces": "error",
   "prettier/prettier": "error",
   "import/order": [
    "error",
    {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "always"
    }
  ],
  "react/jsx-one-expression-per-line": [0]
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    },
    "react": {
      "version": "detect"
    }
  }
}
