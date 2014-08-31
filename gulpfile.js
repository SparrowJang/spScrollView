var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('server', function () {
  connect.server({
    root: ['bower_components', '../'],
    port: 8000,
    livereload: true
  });
  require('opn')('http://localhost:8000/sp-scroll-view')
});
