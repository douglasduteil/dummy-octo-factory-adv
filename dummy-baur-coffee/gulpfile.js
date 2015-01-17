
var facto = require('dummy-facto');
var gulp = require('gulp');

var config = {
  src : {
    cwd: 'src',
    tmp : '.tmp',
    scripts: '{scripts,modules/*}/**/*.coffee'
  },
  scriptBaseProcess : {
    pattern: '**/*.coffee',
    transform: require('gulp-coffee'),
    transformOptions: {}
  }
};

facto.use(config);

// gulp ng:install
// >>> to install the makinas

// gulp hello
// >>> "Hello from dummy-makina-hello-karma"

// gulp test
// >>> runs karma start from a makina

// gulp karma --eArgv='start node_modules/dummy-makina-hello-karma/karma.conf.js --single-run'
// >>> runs karma from a makina
