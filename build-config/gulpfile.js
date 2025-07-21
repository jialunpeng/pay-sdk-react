const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

// 编译组件样式（未压缩）
gulp.task('less', function () {
  return gulp
    .src(['../components/**/index.less', '!../components/style/index.less'])
    .pipe(less())
    .pipe(gulp.dest('../dist/es'))
    .pipe(gulp.dest('../dist/lib'));
});

// 编译组件样式（压缩版本）
gulp.task('less-min', function () {
  return gulp
    .src(['../components/**/index.less', '!../components/style/index.less'])
    .pipe(less())
    .pipe(
      cleanCSS({
        level: {
          1: {
            all: true,
            normalizeUrls: false,
          },
          2: {
            all: false,
            removeDuplicateRules: true,
            removeDuplicateFontRules: true,
            removeEmpty: true,
          },
        },
      })
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('../dist/es'))
    .pipe(gulp.dest('../dist/lib'));
});

// 替换 JS 文件中的 .less 为 .css
gulp.task('replace-less-es', function () {
  return gulp
    .src(['../dist/es/**/*.js', '../dist/es/**/*.ts'])
    .pipe(replace(/\.less/g, '.css'))
    .pipe(gulp.dest('../dist/es'));
});

// 替换 CommonJS 中的 .less 为 .css
gulp.task('replace-less-lib', function () {
  return gulp
    .src('../dist/lib/**/*.js')
    .pipe(replace(/\.less/g, '.css'))
    .pipe(gulp.dest('../dist/lib'));
});

// 编译全局样式（未压缩）
gulp.task('build-global-style', function () {
  return gulp
    .src('../components/style/index.less')
    .pipe(less())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('../dist/css'));
});

// 编译全局样式（压缩版本）
gulp.task('build-global-style-min', function () {
  return gulp
    .src('../components/style/index.less')
    .pipe(less())
    .pipe(
      cleanCSS({
        level: {
          1: {
            all: true,
            normalizeUrls: false,
          },
          2: {
            all: false,
            removeDuplicateRules: true,
            removeDuplicateFontRules: true,
            removeEmpty: true,
          },
        },
      })
    )
    .pipe(rename('index.min.css'))
    .pipe(gulp.dest('../dist/css'));
});

// 默认任务：生成未压缩版本
exports.default = gulp.series(
  'less',
  'replace-less-es',
  'replace-less-lib',
  'build-global-style'
);

// 生成压缩版本
exports.min = gulp.series(
  'less-min',
  'replace-less-es',
  'replace-less-lib',
  'build-global-style-min'
);

// 生成所有版本（未压缩 + 压缩）
exports.all = gulp.series(
  'less',
  'less-min',
  'replace-less-es',
  'replace-less-lib',
  'build-global-style',
  'build-global-style-min'
);
