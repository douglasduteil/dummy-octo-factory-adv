module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['test/*.spec.js'],
    reporters: ['progress'],
    browsers: ['Chrome'],
  });
};
