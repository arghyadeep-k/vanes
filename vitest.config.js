const { defineConfig } = require('vitest/config');

module.exports = defineConfig({
  test: {
    globals: true,
    include: ['test/**/*.js'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
