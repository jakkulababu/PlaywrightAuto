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

  projects: [
    {
      name: "Chrome execution",
      use: {
        browserName: "chromium",
        headless: false,
        screenshot: "on",
        // trace : "on", // To capture all action snapshot before and after
        trace: "retain-on-failure", // To capture only failure case for all action snapshot before and after
        // viewport : {width:1650,height:750},

      },
    }
    ,
    // {
    //   name: "Safari Execution",
    //   use: {
    //     browserName: "webkit",
    //     headless: true,
    //     screenshot: "on",
    //     // trace : "on", // To capture all action snapshot before and after
    //     trace: "retain-on-failure", // To capture only failure case for all action snapshot before and after
    //   },
    // },
  ],
};

module.exports = config;
