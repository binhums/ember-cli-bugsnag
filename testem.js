/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": [
    "phantomjs",
    "chrome"
  ],
  "launch_in_dev": [
    "chrome"
  ]
};
