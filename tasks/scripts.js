/**
 * Created by lnwf9885 on 29/03/2016.
 */
var gulp = require("gulp");
var _ = require('underscore');
var config = require('./configs');
var plugins = require('gulp-load-plugins')();

/**
 * task scripts
 *
 * creates a browserify bundle from `scripts/index`
 */
module.exports = function(){

    console.log("Generate client app scripts")
    console.log("['" + config.sources.client.js.main + "' to '" + config.dist[global.APP_ENV].scripts + "']")

    var options = _.extend({
        transform: []
    }, config.browserify);

    if (global.APP_ENV === 'prod') {
        options.transform.push("uglifyify");
    }

    return gulp.src(config.sources.client.js.main)
        .pipe((global.APP_ENV === 'prod') ?  plugins.plumber() : plugins.util.noop())
        .pipe(plugins.browserify(options))
        .pipe(gulp.dest(config.dist[global.APP_ENV].scripts))
}