module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // "extends": "plugin:react/recommended",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-undef": "error",
  },
};
