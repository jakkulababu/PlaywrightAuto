// @ts-check
const { devices } = require("@playwright/test");
const { trace } = require("console");

const config = {
  testDir: "./tests",
  /* Maximum time to run one test*/
  timeout: 30 * 30000,
  expect: { timeout: 10000 },

  // Run all tests in parallel.
  fullyParallel: false,

  reporter: "html",

  projects :[
    {
      name : 'Chrome execution'
    }
  ]
  
};

module.exports = config;
