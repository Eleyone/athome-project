/**
 * Created by lnwf9885 on 29/03/2016.
 */
var gulp = require("gulp");
var config = require("./configs");

module.exports = function(){
    console.log("Copying assets");
    return gulp.src(config.sources.client.assets)
        .pipe(gulp.dest(config.dist[global.APP_ENV].assets))
}