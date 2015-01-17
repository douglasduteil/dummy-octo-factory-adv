
var path = require('path');
var spawn = require('child_process').spawn;
var resolve = require("resolve");

var pkg = require('./package.json'), _mn = pkg.name;
var channels = require('dummy-channels');

var karma = require('karma').server;
var gulp = require(resolve.sync('gulp', { basedir: process.cwd() }));

var config = {}; // Use the instance given by the factory;
var argv; // Use the given by the factory;

module.exports = function(_config, _argv){
  argv = _argv;
  config = _config;

  channels.use(config);
};


gulp.task('karma', [_mn + ':karma']);
gulp.task('test', [_mn + ':test']);
gulp.task('hello', [_mn + ':hello']);

gulp.task('ng:src/scripts', [_mn + ':src/scripts']);

////

gulp.task(_mn + ':src/scripts', function(){

  var src = config.src;

  return gulp.src(src.scripts, { cwd: src.cwd, base: src.cwd })
    .pipe(channels.scripts.src())
  ;
});

gulp.task(_mn + ':hello', function(){
  console.log('Hello from ' + _mn);
});

gulp.task(_mn + ':test', function(cb){
  karma.start({
    // TODO Add options to customize the path
    configFile: path.resolve(__dirname,'karma.conf.js')
  }, cb);
});

gulp.task(_mn + ':karma', function(cb){
  argv = argv || [];
  var command = path.join(__dirname, 'node_modules', 'karma', 'bin', 'karma');
  command += argv.length ? ' ' + argv.join(' ') : '';
  return spawn('sh', ['-c', command], { stdio: 'inherit' })
    .on('exit', cb) // TODO enhance error message here
  ;
});
