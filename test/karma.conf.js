module.exports = function (config) {
    config.set({
      browsers: [ "Chrome" ],
      frameworks: [ "mocha", "chai" ],
      basePath: "../",
      files: [
        "dist/js/main.js",
        "test/test.js"
      ],
      reporters: [ "mocha" ]
    });
  };
  