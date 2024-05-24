module.exports = {
  ignorePatterns: ["node_modules/", "dist/", "nuxt.proxyoverride.ts"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "no-console": 0,
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-setup-props-destructure": 0,
    "vue/no-multiple-template-root": 0,
    "vue/no-v-model-argument": 0,
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: "_",
        caughtErrors: "none",
      },
    ],
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "avoid",
        semi: true,
        tabWidth: 2,
        useTabs: false,
        vueIndentScriptAndStyle: true,
        singleQuote: false,
        trailingComma: "es5",
        printWidth: 120,
      },
    ],
  },
};
