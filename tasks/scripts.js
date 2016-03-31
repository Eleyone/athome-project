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
module.exports = function(env){

    console.log("Generate client app scripts")
    console.log("['" + config.sources.client.js + "' to '" + config.dist[env].scripts + "']")

    options = _.extend(config.browserify, {
        transform: []
    });

    if (env === 'prod') {
        options.transform.push("uglifyify");
    }

    return gulp.src(config.sources.client.js)
        .pipe((env === 'prod') ?  plugins.plumber() : plugins.util.noop())
        .pipe(plugins.browserify(options))
        .pipe(gulp.dest(config.dist[env].scripts))
}