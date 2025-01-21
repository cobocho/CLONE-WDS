/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/react.js'],
  ignorePatterns: ['rollup.config.js', 'dist'],
}
