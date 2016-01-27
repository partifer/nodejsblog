'use strict';

var gulp = require('gulp');
var connect = require('connect');
var staticServer = connect();

module.exports = gulp.task('serve', function (next) {
  if (!release){
    var staticServerPath = BUILD_FOLDER;
    staticServer.use(connect.static(staticServerPath)).listen(process.env.PORT || config.ports.staticServer, next);
  }
});
