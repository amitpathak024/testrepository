// including plugins
var gulp = require('gulp')
    , minifyHtml = require("gulp-minify-html"),
      minifyCss = require("gulp-minify-css");

// task
gulp.task('minify-html', function () {
    gulp.src('./Html/*.html') // path to your files
        .pipe(minifyHtml())
        .pipe(gulp.dest('Templates'));
});

// task
gulp.task('minify-css', function () {
    gulp.src('./CSS/*.css') // path to your file
        .pipe(minifyCss())
        .pipe(gulp.dest('Style/CSS'));
});