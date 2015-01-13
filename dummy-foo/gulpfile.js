
var facto = require('dummy-facto');
var gulp = require('gulp');

facto.use(gulp);

// gulp ng:install
// >>> to install the makinas

// gulp hello
// >>> "Hello from dummy-makina-hello-karma"

// gulp test
// >>> runs karma start from a makina

// gulp karma --eArgv='start node_modules/dummy-makina-hello-karma/karma.conf.js --single-run'
// >>> runs karma from a makina
