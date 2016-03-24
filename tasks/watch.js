/**
 * Created by lnwf9885 on 17/03/2016.
 */
var gulp = require("gulp")
var server = require("./server")
var paths = require("./paths")

/**
 * watch task
 *
 * watch sources to dynamically build files whenever it's needed
 * used for development
 */
module.exports = function(){
    gulp.watch(paths.sources.tasks, ["scripts:linting"])

    gulp.watch(paths.sources.js, ["scripts"])

    gulp.watch(paths.sources.less, ["less"])

    gulp.watch(paths.sources.templates, ["templates"])

    gulp.watch(paths.sources.assets, ["assets"])

    gulp.watch([paths.dist.public + "/**/*"], server.livereload)
}