var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    rename = require('gulp-rename');

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(4000);
});

gulp.task('default', ['express'], function() {

});

gulp.task('styles', function() {
return sass('styles/scss', { style: 'expanded' })
    .pipe(gulp.dest('scss'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(gulp.dest('styles'))
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('styles/scss/*.scss', ['styles']);
});