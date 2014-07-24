var gulp = require('gulp');
var gutil = require('gulp-util');
var nwBuilder = require('node-webkit-builder');

// node-webkit-builder task
gulp.task('build', function() {
  var nw = new nwBuilder({
      // Version of node-webkit-builder to use
      version: '0.9.2',
      // Folder, containing the node-webkit app
      files: [ './nwApp/**'],
      // Target platforms
      platforms: ['osx', 'win', 'linux32', 'linux64']
  });

  // Register logging function
  nw.on('log', function (msg) {
      gutil.log('node-webkit-builder:', msg);
  });

  // Build returns a promise, return it so the task isn't called in parallel
  return nw.build().catch(function (err) {
      gutil.log('node-webkit-builder', err);
  });
});

// Add default gulp task as alias to build task
gulp.task('default', ['build']);
