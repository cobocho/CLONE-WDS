module.exports = {
  // 기존 설정...
  overrides: [
    {
      files: ['vitest.config.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
