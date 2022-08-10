const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //setupNodeEvents => en versiones anteriores es el folder de pluggins
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [ createEsbuildPlugin(config)]
      });
      
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://localhost:8080/cypage/",
    chromeWebSecurity: false,
  },
});
