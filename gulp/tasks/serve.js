'use strict';

var gulp = require('gulp');

module.exports = gulp.task('serve', function () {
  if (!release)
    {
      var connect = require('connect'),
          nodemon = require('gulp-nodemon');
      var options = {
        script: 'bin/www',
        ext: 'js html jade',
        tasks: ['lintExpress'],
        ignore: [
          "*.test.js",
          "build/*",
          "src/*",
          "tmp/*"
        ],
        env: {'NODE_ENV': 'development'}
      };
      return nodemon(options);
    }
});
