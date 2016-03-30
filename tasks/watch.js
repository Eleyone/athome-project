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

    gulp.watch(vars.sources.client.js, ["scripts"])

    gulp.watch(vars.sources.client.less, ["less"])

    gulp.watch(vars.sources.client.templates, ["templates"])

    gulp.watch(vars.sources.client.assets, ["assets"])

    gulp.watch([vars.dist.public + "/**/*"], server.livereload)
}