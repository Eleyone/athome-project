/**
 * Created by lnwf9885 on 29/03/2016.
 */
var gulp = require("gulp");
var config = require('./configs');
var plugins = require('gulp-load-plugins')();

module.exports = function(){
    console.log('Copying fonts');
    return gulp.src(config.sources.client.fonts)
        .pipe(gulp.dest(config.dist[env].fonts))
}