const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');

const capabilities = require('./e2e/support/helpers/capabilities')

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'example-test',
  tests: './e2e/*_test.js',
  output: './output',
  helpers: {
    Appium: capabilities.loaderCapabilities(),
    Mochawesome: {
      uniqueScreenshotNames: true
    }
  },
  include: {
    I: './steps_file.js',
    apis: "./e2e/support/helpers/apis.js",
    scroll: "./e2e/support/helpers/scroll.js",
    hooks: "./e2e/support/helpers/hooks.js",
    settings: "./e2e/support/screens/Settings.js"
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
  },
  mocha: {
    reporterOptions: {
      reportDir: "output"
    }
  },
}