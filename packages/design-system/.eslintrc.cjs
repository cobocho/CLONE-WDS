/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/react.js', 'plugin:storybook/recommended'],
  ignorePatterns: ['rollup.config.js', 'dist'],
  overrides: [
    {
      files: ['src/**/*.spec.tsx'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
}
