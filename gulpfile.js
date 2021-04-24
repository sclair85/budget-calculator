const gulp = require('gulp');
const {src, dest, parallel} = require('gulp');

function html() {
  return src('src/*.html').pipe(dest('dist'));
}

function styles() {
  return src('src/styles/*.css').pipe(dest('dist/css'));
}

function scripts() {
  return src('src/scripts/*.js').pipe(dest('dist/js'));
}

function images() {
  return src('src/img/*').pipe(dest('dist/images'));
}

exports.default = parallel(html, styles, scripts, images);
