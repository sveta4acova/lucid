var gulp = require('gulp'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pug = require('gulp-pug'),
    newer = require('gulp-newer'),
    svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore'),
    htmllint = require('gulp-htmllint'),
    fancyLog = require('fancy-log'),
    colors = require('ansi-colors'),
    browserSync = require('browser-sync').create();

var imgSrc = './src/images/common/**/*',
    imgDest = './public/assets/images/common';

function htmllintReporter(filepath, issues) {
  if (issues.length > 0) {
    issues.forEach(function (issue) {
      fancyLog(colors.cyan('[gulp-htmllint] ') + colors.white(filepath + ' [' + issue.line + ',' + issue.column + ']: ') + colors.red('(' + issue.code + ') ' + issue.msg));
    });

    process.exitCode = 1;
  }
}

gulp.task('styles', function() {
  return gulp.src([
      './src/stylus/settings/normalize.styl',
      './src/stylus/settings/settings.styl',
      './src/stylus/settings/fonts.styl',
      './src/stylus/settings/common.styl',
      './src/stylus/settings/animations.styl',
      './src/stylus/main/**/*.styl',
      './src/stylus/media/**/*.styl'
    ])
    .pipe(concat('styles.styl'))
    .pipe(stylus())
    .pipe(autoprefixer('last 8 version', 'safari 5', 'ie 8', 'firefox 10', 'opera 12', 'chrome 30', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(gulp.dest('./public/assets/css/'));
});

gulp.task('js', function() {
  return gulp.src(['./src/js/common/globals.js','./src/js/common/events.js', './src/js/*.js'])
    .pipe(concat('main.js', {newLine: ';'}))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('pug', function(){
  return gulp.src('./src/templates/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('imagemin', function(){
  gulp.src(imgSrc)
    .pipe(newer(imgDest))
    .pipe(imagemin({
      progressive: true,
      optimizationLevel: 1,
      interlaced: true
    }))
    .pipe(gulp.dest(imgDest));
});

gulp.task('svg', function(){
  return gulp.src('src/images/svg-sprite/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest("public/assets/images/svg-sprite"));
});

gulp.task('validHtml', function () {
  return gulp.src('public/index.html')
    .pipe(htmllint({
      rules: {
        'img-req-alt': 'allownull',
        'indent-width': false,
        'id-class-style': false,
        'line-end-style': false
      }
    }, htmllintReporter));
});

gulp.task('serve', function(){
  browserSync.init({
    server: 'public'
  });
  browserSync.watch('public/**/*.*').on('change', browserSync.reload)
});

gulp.task('build', ['styles', 'js', 'pug', 'imagemin', 'svg']);

gulp.task('default', ['serve','build'], function(){
  gulp.watch('./src/stylus/**/*.styl', ['styles']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/templates/**/*.pug', ['pug']);
});

