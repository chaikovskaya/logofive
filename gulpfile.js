const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "/contacts.html"
        }
    });
    gulp.watch('./*.html').on('change', browserSync.reload);
}
exports.watch = watch;

let def = gulp.series(watch);
gulp.task('default', def);