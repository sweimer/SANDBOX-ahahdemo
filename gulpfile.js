const gulp = require('gulp');
// Gulp Sass for assets
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp.src('assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

// Define the test task
gulp.task('test', function (done) {
  console.log('Gulp is running successfully!');
  done(); // Signal that the task is complete
});

// Define the build task (currently runs only 'sass')
gulp.task('build', gulp.series('sass'));

// Define the default task
gulp.task('default', gulp.series('sass'));
