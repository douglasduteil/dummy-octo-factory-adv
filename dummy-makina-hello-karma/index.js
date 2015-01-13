
var path = require('path');
var spawn = require('child_process').spawn;

var pkg = require('./package.json'), _mn = pkg.name;

var karma = require('karma').server;

module.exports = function(gulp, argv){

  gulp.task('karma', [_mn + ':karma']);
  gulp.task('test', [_mn + ':test']);
  gulp.task('hello', [_mn + ':hello']);

  ////

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
};
