/**
 * Created by lnwf9885 on 29/03/2016.
 */
var gulp = require("gulp")
var config = require('./configs');
var plugins = require('gulp-load-plugins')();

module.exports = function () {
    console.log('Generating CSS');
    return gulp.src(config.sources.client.less)
        .pipe((global.APP_ENV === 'prod') ?  plugins.plumber() : plugins.util.noop())
        .pipe(plugins.less())
        .pipe((global.APP_ENV === 'prod') ?  plugins.minifyCss() : plugins.util.noop())
        .pipe(gulp.dest(config.dist[global.APP_ENV].css));
}