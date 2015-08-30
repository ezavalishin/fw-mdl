var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./www/",
            https:false
        }
    });
    gulp.watch('./src/less/*.less', ['less']);
    gulp.watch('./src/js/*.js', ['js'], browserSync.reload);
    gulp.watch('./src/*.html', ['html']);
});
gulp.task('less', function() {
  	return gulp.src('./src/less/*.less')
    .pipe(less({
      	paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest('./www/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./www/js'))
    .pipe(browserSync.stream());
});

gulp.task('html', function() {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./www'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
	gulp.watch('./src/less/*.less', ['less']);
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./src/*.html', ['html']);
});