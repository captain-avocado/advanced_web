'use strict';
const path = require('path');
const del = require('del');

const gulp = require('gulp');
const $gp = require('gulp-load-plugins')();

const browserSync = require('browser-sync').create();

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');


const paths = {
    src: path.join(__dirname, 'src/'),
    dest: path.join(__dirname, 'dest/')
};

function clean() {
    return del(paths.dest);
}

//обработчик ошибок gulp
const reportError = function(error) {
    const LINE = (error.line) ? 'LINE ' + (error.line) : '';
  
    $gp.notify.onError({
        title: `[${error.plugin}] ${LINE}`,
        message: error.message,
        sound: 'Beep'
    })(error);
    this.emit('end');
};

function styles() {
    return gulp.src(paths.src + 'styles/main.scss')
    .pipe($gp.plumber({
        errorHandler: reportError
    }))
    .pipe($gp.sourcemaps.init())
    .pipe($gp.sassGlob())
    .pipe($gp.sass())
    .pipe($gp.stylelint({
        reporters: [
          {formatter: 'string', console: true}
        ],
        fix: true
      }))
    .pipe($gp.groupCssMediaQueries())
    .pipe($gp.autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
    }))
    .pipe($gp.cssUnit({
        type: 'px-to-rem',
        rootSize: 16
    }))
    .pipe($gp.cssnano({
        reduceIdents: false
    }))
    .pipe($gp.rename({  suffix: '.min'  }))
    .pipe($gp.sourcemaps.write('/'))
    .pipe(gulp.dest(paths.dest + 'styles/'))
    .pipe(browserSync.stream());
}

function templates() {
    return gulp.src('views/pages/*.pug')
    .pipe($gp.plumber({
        errorHandler: reportError
    }))
    .pipe($gp.pug({ pretty: true }))
    .pipe(gulp.dest(paths.dest));
}

function scripts() {
    return gulp.src([paths.src + 'scripts/*.js', paths.src + 'admin/main.js'])
    .pipe($gp.plumber({
        errorHandler: reportError
    }))
    .pipe($gp.sourcemaps.init())
    .pipe($gp.webpack(webpackConfig, webpack))
    // .pipe($gp.uglify())
    // .pipe($gp.concat('scripts.min.js'))
    .pipe($gp.sourcemaps.write('/'))
    .pipe(gulp.dest(paths.dest + 'scripts/'));
}

//параметры svg-спрайта
const svgConfig = {
    mode: {
        symbol: {
            sprite: '../sprite.svg',
            example: {
                dest: '../tmp/spriteSvgDemo.html'
            }
        }
    }
};

//создание svg-спрайта
function sprite() {
    return gulp.src(paths.src + 'images/icons/*.svg')
        .pipe($gp.svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe($gp.cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe($gp.replace('&gt;', '>'))
        .pipe($gp.svgSprite(svgConfig))
        .pipe(gulp.dest(paths.dest + 'images'));
}

//перенос изображений
function images() {
    return gulp.src([paths.src + 'images/**/*.*', `!${paths.src}images/icons/*.svg`])
    // .pipe($gp.imagemin({ progressive: true }))
    .pipe($gp.rename({dirname: ''}))
    .pipe(gulp.dest(paths.dest + 'images'));
}

//перенос шрифтов
function fonts() {
    return gulp.src([paths.src + 'fonts/**/*.*'])
    .pipe($gp.rename({dirname: ''}))
    .pipe(gulp.dest(paths.dest + 'fonts'));
}

//перенос шрифтов fontAwesome
function fontAwesome() {
    return gulp.src(['node_modules/font-awesome/fonts/*.woff2', 'node_modules/font-awesome/fonts/*.woff'])
      .pipe(gulp.dest(paths.dest + 'fonts/'));
}

function watch() {
    gulp.watch(paths.src + 'styles/**/*.scss', styles);
    gulp.watch([paths.src + 'scripts/**/*.js', paths.src + 'admin/**/*.*'], scripts);
    gulp.watch('views/**/*.pug', templates);
    // gulp.watch(`views/**/*`).on("change", browserSync.reload);
    gulp.watch(paths.src + 'images/icons/*.svg', sprite);
    gulp.watch(paths.src + 'images/**/*.*', images);
    gulp.watch(paths.src + 'fonts/**/*.*', fonts);
}

function nodemon(done) {
    let started = false;
    $gp.nodemon({
        script: 'server.js',
        watch: 'server.js',
        env: { NODE_ENV: "development" },
    })
    .on('start', () => {
        if (started) return;
        done();
        started = true;
    });
}

function browserSyncFunc(done) {
    browserSync.init({
        proxy: 'http://localhost:3000',
        port: 8080,
        open: true,
        notify: false,
    });
    browserSync.watch(paths.dest + '**/*.*', browserSync.reload);
}


gulp.task('clean', clean);
gulp.task('styles', styles);
gulp.task('templates', templates);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('sprite', sprite);
gulp.task('fonts', fonts);
gulp.task('font-awesome', fontAwesome);
gulp.task('watch', watch);

gulp.task('nodemon', nodemon);
gulp.task('browserSyncTask', browserSyncFunc);
gulp.task('server', gulp.series('nodemon', 'browserSyncTask'));


gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, templates, sprite, images, scripts, fonts, fontAwesome)
));

gulp.task('default', gulp.series(
    'build',
    gulp.parallel('server', 'watch')
));

