/**
 * Created by lnwf9885 on 30/03/2016.
 */
var gulp = require("gulp")
// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

var config = require('./tasks/vars');


module.exports = function(env) {
    gulp.src(config.sources.client.templates)
        .pipe(plugins.handlebars())
        .pipe(plugins.defineModule('plain', {
            require: { Handlebars: 'handlebars'},
            wrapper: 'var Handlebars = require(\'handlebars\');\n module.exports[\'<%= name %>\'] = <%= handlebars %>'
        }))
        .pipe(plugins.concat('templates.js'))
        .pipe(gulp.dest(config.client['js-root']));
};