const gulp = require('gulp');

gulp.task('copy_data_json', function(done) {
  gulp.src(['src/assets/**'])
    .pipe(gulp.dest('dist/assets'));
  done();
});
