'use strict';

var through2 = require('through2');
var combine = require('stream-combiner')
var resolve = require('resolve');

var gulp = require(resolve.sync('gulp', { basedir: process.cwd() }));
var config; // Use the instance given by the makina;

var channels = exports;

channels.use = function(_config){
  config = _config;
}

// Dummy sample emulating folder with objects.

channels.scripts = {
  base: scriptBaseChannel,
  src : scriptSrcChannel
}

////

var identiy = through2.obj();

// Scripts Base
// ============

var rename = require('gulp-rename');
var gulpif = require('gulp-if');

function scriptBaseChannel(){
  var process = config.scriptBaseProcess;
  return combine(
    gulpif(process.pattern, process.transform(process.transformOptions)),
    gulpif(process.pattern, rename(function(path) { path.extname = '.js'; }))
  );
}

// Scripts Src
// ===========

var sourcemaps = require('gulp-sourcemaps');

function scriptSrcChannel(src, preprocess){
  preprocess = preprocess || identiy;
  src = src || config.src;

  return combine(
    sourcemaps.init(),
    scriptBaseChannel(),
    sourcemaps.write(),
    gulp.dest(src.tmp)
  );
}

////
