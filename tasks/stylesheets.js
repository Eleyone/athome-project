/**
 * Created by lnwf9885 on 29/03/2016.
 */
var gulp = require("gulp")
var config = require('./configs');
var plugins = require('gulp-load-plugins')();

module.exports = function (env) {
    console.log('Generating CSS');
    return gulp.src(config.sources.client.less)
        .pipe((env === 'prod') ?  plugins.plumber() : plugins.util.noop())
        .pipe(plugins.less())
        .pipe(gulp.dest(config.dist[env].css));
}