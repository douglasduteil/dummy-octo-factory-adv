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

channels.views = {
  src : viewsSrcChannel
}

////

var identiy = through2.obj()

// View

function viewsSrcChannel(src, preprocess){
  preprocess = preprocess || identiy;
  src = src || config.src;

  return combine(
    preprocess,
    gulp.dest(src.tmp)
  );
}

////
