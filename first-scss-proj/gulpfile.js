var gulp = require('gulp');
var sass = require('gulp-sass');

 gulp.task('scss', function() {
    return gulp.src('app/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/assets/css'))
});
gulp.task('watch', function () {
    gulp.watch('app/assets/scss/**/*.scss', gulp.series('scss'))
        }
    );

gulp.task('default', gulp.series('scss', 'watch'));