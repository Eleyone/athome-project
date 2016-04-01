/**
 * Created by arnaud on 02/03/16.
 */
// Requis
var gulp = require("gulp");

global.APP_ENV = "prod";
var i = process.argv.indexOf("--env");
if (i > -1) {
    global.APP_ENV = process.argv[i + 1];
}

gulp.task("clean", require("./tasks/clean"));

// static assets
gulp.task("assets", require("./tasks/assets"));
gulp.task("fonts", require("./tasks/fonts"));

// generated assets
gulp.task("scripts:all", ["scripts:templates", "scripts:linting"], require("./tasks/scripts"));
gulp.task("scripts:dirty", ["scripts:templates"], require("./tasks/scripts"));
gulp.task("scripts:templates", require("./tasks/templates"));
gulp.task("scripts:linting", require("./tasks/scripts-linting"));
gulp.task("stylesheets", require("./tasks/stylesheets"));

// build
gulp.task("dist", [
    "clean",
    "assets",
    "scripts:all",
    "stylesheets"
]);

// dev tasks
gulp.task("server", ["dist"], require("./tasks/server").start);
gulp.task("watch", ["dist"], require("./tasks/watch"));
gulp.task("bower", require("./tasks/bower"));

gulp.task("default", [
    "dist",
    "server",
    "watch"
]);