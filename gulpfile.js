var gulp        = require('gulp'), 
    sass        = require('gulp-sass'), 
    browserSync = require('browser-sync'); 
    cssmin      = require('gulp-cssmin');
    rename      = require('gulp-rename');
    plumber     = require('gulp-plumber');
    del         = require('del');
    gcmq        = require('gulp-group-css-media-queries');
 
gulp.task('sass', function () {
    return gulp.src('./static/assets/sass/style.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError)) 
        .pipe(gcmq())
        .pipe(gulp.dest('./static/assets/css')) 
        // .pipe(browserSync.reload({stream: true})) 
});


// gulp.task('browser-sync', function() {
//     browserSync({ 
//         server: { 
//             baseDir: './app' 
//         },
//         open: true,
//         notify: false
//     });
// });

gulp.task('watch', [/*'browser-sync',*/ 'sass'], function() {
    gulp.watch('./static/assets/sass/**/*.scss', ['sass']);
    // gulp.watch('./app/*.html', browserSync.reload);
    // gulp.watch('./app/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);
  
gulp.task('min-css', function () {
    gulp.src('./static/assets/css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./static/assets/css'));
});

// gulp.task('copy', function () {
//     return gulp.src([
//         'app/css/style.css',
//         'app/img/**',
//         'app/**/*.html',
//         'app/webfonts/*.*',
//         'app/js/*.js'
//         ], {
//             base: 'app'
//         })
//         .pipe(gulp.dest('build'));
// });

// gulp.task('clean', function () {
//     return del('build')
// });

// gulp.task('build', ['min-css', 'copy']);