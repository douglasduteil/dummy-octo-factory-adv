module.exports = function(config) {
  config.set({
    basePath: process.cwd(),
    frameworks: ['jasmine'],
    files: ['test/*.spec.js'],
    reporters: ['progress'],
    browsers: ['Chrome'],
  });
};
