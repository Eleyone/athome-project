/**
 * Created by lnwf9885 on 29/03/2016.
 */
var gulp = require("gulp")
// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

var config = require('./tasks/vars');

gulp.task('bower', function() {
    return plugins.bower()
        .pipe(gulp.dest(configs.bower))
});