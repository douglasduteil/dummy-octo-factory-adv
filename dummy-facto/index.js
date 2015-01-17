'use strict';

var npm = require("npm");
var path = require("path");
var extend = require("util")._extend;
var resolve = require("resolve");
var argv = require('yargs').argv;
var gulp = require(resolve.sync('gulp', { basedir: process.cwd() }));

var targetPkg = (function(){
  try{ return require(path.join(process.cwd(), 'package.json')); }
  catch (err) { return ''; }
}());

var defaults = {
  src : {
    cwd: 'src',
    tmp : '.tmp',
    scripts: '{scripts,modules/*}/**/*.js'
  },
  scriptBaseProcess : {
    pattern: false,
    transform: function fakeTransformer(){ return {}; },
    transformOptions: null
  }
};

module.exports = ngFacto;

////

function ngFacto(){}

ngFacto.use = function(_config){
  if (!(targetPkg && targetPkg.ngFacto)){
    return;
  }

  var config = extend(defaults, _config);

  ////
  // Require all available makinas

  // extract the ending arguments with the eArgv flag 'cause gulp-cli
  // keeps on parsing args after the '--'
  // Note: by convention argv is an array, so is eArgv.
  var endingArgv = (argv.eArgv ||  '').split(' ');

  Object
    .keys(targetPkg.ngFacto.makinas || {})
    .map(function toMakinaPath(makinaName){
      try { return resolve.sync(makinaName, { basedir: process.cwd() });}
      catch (err) { return ''; }
    })
    .filter(function onlyValidePath(makinaPath){
      // only launch existing makinas
      return !!makinaPath;
    })
    .map(function requireMakina(makinaPath){
      require(makinaPath)(config, endingArgv);
    });

};

////
// The install task.
// Will install all the described "makinasVersions" form the package.json
// under the meta-key "ngFacto"

gulp.task('ng:install', function(cb){

  npm.load(null, function(er){
    if (er) return cb(er);

    var makinasVersions = Object
      .keys(targetPkg.ngFacto.makinas)
      .map(function(makinaName){
        return makinaName + '@' + targetPkg.ngFacto.makinas[makinaName];
      });

    npm.commands.install(makinasVersions,
      function(er){
        if (er) return cb(er);
        cb();
      }
    );

  });
})
