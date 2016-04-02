/**
 * Created by lnwf9885 on 17/03/2016.
 */
var gulp = require("gulp");
var server = require("./server");
var config = require("./configs");

/**
 * watch task
 *
 * watch sources to dynamically build files whenever it's needed
 * used for development
 */
module.exports = function(){
    gulp.watch(config.sources.tasks, ["scripts:linting"]);
    gulp.watch(config.sources.client.js.files, ["scripts:dirty"]);
    gulp.watch(config.sources.client.templates, ["scripts:dirty"]);
    gulp.watch(config.sources.client.less, ["less"]);
    gulp.watch(config.sources.client.assets, ["assets"]);
    gulp.watch([config.dist.public + "/**/*"], server.livereload)
}