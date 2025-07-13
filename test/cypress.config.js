const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "http://172.18.0.3:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 720, 
    viewportWidth: 1280,
  },
});
