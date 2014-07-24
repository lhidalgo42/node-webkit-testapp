var gulp = require("gulp");
var gutil = require('gulp-util');
var nwBuilder = require("node-webkit-builder");

gulp.task("build", function() {
  var nw = new nwBuilder({
      version: '0.9.2',
      files: [ './nwApp/**']
  });

  nw.on('log', function (msg) {
      gutil.log('node-webkit-builder', msg);
  });

  // Build returns a promise, return it so the task isn't called in parallel
  return nw.build().catch(function (err) {
      gutil.log('node-webkit-builder', err);
  });
});

// add default gulp task as alias to build task
gulp.task("default", ["build"]);
