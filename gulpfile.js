/**
 * Created by arnaud on 02/03/16.
 */
// Requis
var gulp = require('gulp');

var env = "dev", i = process.argv.indexOf("--env");
if (i >- 1) {
    env = process.argv[i+1];
}

gulp.task("clean", require("./tasks/clean")(env))

// static assets
gulp.task("assets", require("./tasks/assets")(env))
gulp.task("fonts", require("./tasks/fonts")(env))

// generated assets
gulp.task("templates", require("./tasks/templates")(env))
gulp.task("scripts", ["scripts:linting"], require("./tasks/scripts")(env))
gulp.task("scripts:linting", require("./tasks/scripts-linting")(env))
gulp.task("stylesheets", require("./tasks/stylesheets")(env))
gulp.task("stylesheets:all", ["icons"], require("./tasks/stylesheets")(env)) // for first run, to ensure icon css is fresh & ready

// build
gulp.task("dist", [
    "clean",
    "assets",
    "icons",
    "templates",
    "scripts",
    "stylesheets:all"
])

// dev tasks
gulp.task("server", ["dist"], require("./tasks/server").start)
gulp.task("watch", ["dist"], require("./tasks/watch"))

gulp.task("default", [
    "dist",
    "server",
    "watch"
])