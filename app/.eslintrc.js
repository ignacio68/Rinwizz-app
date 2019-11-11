module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/recommended',
    "eslint:recommended"
    // "prettier/vue",
    // 'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  //   plugins: ['vue', 'prettier'],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": 0
    // 'no-unused-vars': ["error", {"args": "none"}],
    // "vue/component-name-in-template-casing": ["error", "PascalCase"]
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  }
}
