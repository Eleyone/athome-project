/**
 * Created by lnwf9885 on 31/03/2016.
 */
var gulp = require("gulp");
var plugins = require('gulp-load-plugins')();
var config = require("./configs");

/**
 * task scripts:linting
 *
 * jshint + jscs
 */
module.exports = function(){
    console.log('Linting JS sources');
    return gulp.src([
        config.sources.client.js.files,
        config.sources.tasks,
        config.sources.client.tests,
        config.lint.exptions.templates
    ])
        .pipe((global.APP_ENV === 'prod') ?  plugins.plumber() : plugins.util.noop())
        .pipe(plugins.jscs())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter("jshint-stylish"))
        .pipe(plugins.jshint.reporter("fail"))
}