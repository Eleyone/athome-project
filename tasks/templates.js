/**
 * Created by lnwf9885 on 30/03/2016.
 */
var gulp = require("gulp");
var config = require('./configs');
var plugins = require('gulp-load-plugins')();


module.exports = function(env) {
    console.log('Compiling Handelbars templates');
    return gulp.src(config.sources.client.templates)
        .pipe((env === 'prod') ?  plugins.plumber() : plugins.util.noop())
        .pipe(plugins.handlebars())
        .pipe(plugins.defineModule('plain', {
            require: { Handlebars: 'handlebars'},
            wrapper: 'var Handlebars = require(\'handlebars\');\n module.exports[\'<%= name %>\'] = <%= handlebars %>'
        }))
        .pipe(plugins.concat('templates.js'))
        .pipe(gulp.dest(config.sources.client['js-root']));
};