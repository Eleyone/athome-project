/**
 * Created by lnwf9885 on 29/03/2016.
 */
var gulp = require("gulp");
var config = require("./configs");

module.exports = function(){
    return gulp.src(config.sources.client.fonts)
        .pipe(gulp.dest(config.dist[global.APP_ENV].fonts))
}