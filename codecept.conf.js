const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
   // I: './steps_file.js'
    I: './steps/contactPage-steps.js'
  },

  gherkin: {
    features: './tests/*.feature',
    steps: [
      './steps/contactPage-steps.js'
    ]
  },

  include: {
    contactPage: './pages/contactPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'coceceptExample',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {}
  }
}