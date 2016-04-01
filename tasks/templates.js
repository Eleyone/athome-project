/**
 * Created by lnwf9885 on 30/03/2016.
 */
var gulp = require("gulp");
var config = require("./configs");
var plugins = require("gulp-load-plugins")();


module.exports = function() {
    console.log("Compiling Handelbars templates");
    console.log(config.sources.client.templates, config.sources.client.js.root);
    return gulp.src(config.sources.client.templates)
        .pipe((global.APP_ENV === "prod") ?  plugins.plumber() : plugins.util.noop())
        .pipe(plugins.handlebars())
        .pipe(plugins.wrap("Handlebars.template(<%= contents %>)"))
        .pipe(plugins.declare({
            root: "module.exports",
            noRedeclare: true, // Avoid duplicate declarations
            processName: function(filePath) {
                var path = filePath.replace(/client[\\/]src[\\/]js[\\/]templates[\\/]/g, "");
                return plugins.declare.processNameByPath(path);
            }
        }))
        .pipe(plugins.concat("templates.js"))
        .pipe(plugins.wrap("var Handlebars = require('handlebars');\n\n<%= contents %>"))
        .pipe(gulp.dest(config.sources.client.js.root));
};