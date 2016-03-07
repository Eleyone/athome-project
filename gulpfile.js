/**
 * Created by arnaud on 02/03/16.
 */
// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var configs = {
    src : './client/src',
    dest : './public/', // dossier à livrer
    bower: './client/bower_components'
};

gulp.task('bower', function() {
    return plugins.bower()
        .pipe(gulp.dest(configs.bower))
});

gulp.task('css', function () {
    return gulp.src(configs.src + '/less/styles.less')
        .pipe(plugins.less())
        .pipe(gulp.dest(configs.dest + '/css'));
});

gulp.task('icons', function() {
    return gulp.src(configs.bower + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest(configs.dest + '/fonts'));
});