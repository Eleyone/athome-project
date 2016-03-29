/**
 * Created by lnwf9885 on 29/03/2016.
 */
var gulp = require("gulp")
// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

var config = require('./tasks/vars');


module.exports = function (env) {
    return gulp.src(configs.src + '/less/styles.less')
        .pipe((env === 'prod') ?  plugins.plumber() : util.noop())
        .pipe(plugins.less())
        .pipe(gulp.dest(configs.dest + '/css'));
}