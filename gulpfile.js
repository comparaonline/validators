var gulp = require('gulp');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var rename = require('gulp-rename');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  var bundle = browserify('./src/validators.js', { standalone: 'Validators' })
    .transform(babelify, { presets: ["es2015"] })
    .bundle();

  bundle
    .pipe(source('validators.js'))
    .pipe(gulp.dest('./dist'));

  bundle
    .pipe(source('validators.js'))
    .pipe(streamify(uglify()))
    .pipe(rename('validators.min.js'))
    .pipe(gulp.dest('./dist'));
});
