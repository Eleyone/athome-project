/**
 * Created by lnwf9885 on 29/03/2016.
 */
var gulp = require("gulp")
var plugins = require("gulp-load-plugins")(); // tous les plugins de package.json
var config = require("./configs");

module.exports = function() {
    return plugins.bower()
        .pipe(gulp.dest(config.bower.root))
};