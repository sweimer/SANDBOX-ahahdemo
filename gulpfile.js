const gulp = require('gulp');
// Gulp Sass for assets
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp.src('assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

// Define the default task
gulp.task('default', gulp.series('sass'));
