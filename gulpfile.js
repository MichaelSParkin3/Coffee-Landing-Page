var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
let babel = require('gulp-babel');
var minifyJS = require('gulp-uglify');
const minify = require('gulp-babel-minify');

// task
gulp.task('compressCSS', function() {
  gulp
    .src('./styles/css/main.css') // path to your file
    .pipe(minifyCSS())
    .pipe(gulp.dest('./minify-css'));
});

gulp.task('compressJS', function() {
  gulp
    .src('./js/slider.js') // path to your file
    .pipe(
      minify({
        mangle: {
          keepClassName: true
        }
      })
    )
    .pipe(gulp.dest('./minify-js'));
});
