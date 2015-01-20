
var resolve = require("resolve");

var pkg = require('./package.json'), _mn = pkg.name;

var gulp = require(resolve.sync('gulp', { basedir: process.cwd() }));

var config = {}; // Use the instance given by the factory;
var argv; // Use the given by the factory;

module.exports = function(_config, _argv){
  argv = _argv;
  config = _config;
};

gulp.task('hello', [_mn + ':hello']);

////

gulp.task(_mn + ':hello', function(){
  console.log('Hello from ' + _mn);
});
