const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
      setupNodeEvents(on, config) {
    
      },
    },
  },
  fixturesFolder: false,
  video: false,
})
