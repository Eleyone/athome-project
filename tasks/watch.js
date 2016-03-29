/**
 * Created by lnwf9885 on 17/03/2016.
 */
var gulp = require("gulp")
var server = require("./server")
var vars = require("./vars")

/**
 * watch task
 *
 * watch sources to dynamically build files whenever it's needed
 * used for development
 */
module.exports = function(){
    gulp.watch(vars.sources.tasks, ["scripts:linting"])

    gulp.watch(vars.sources.js, ["scripts"])

    gulp.watch(vars.sources.less, ["less"])

    gulp.watch(vars.sources.templates, ["templates"])

    gulp.watch(vars.sources.assets, ["assets"])

    gulp.watch([vars.dist.public + "/**/*"], server.livereload)
}