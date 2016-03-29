/**
 * Created by lnwf9885 on 17/03/2016.
 */
module.exports = {
    bower: './client/bower_components',
    sources: {
        client: {
            templates: "/client/src/js/templates/**/*.hbs",
            js: "/client/src/js/**/*.js",
            tests: "/client/tests/**/*.js",
            less: "/client/src/less/**/*.less",
            assets: "/client/src/assets/**/*",
            fonts: "/client/src/fonts/**/*",
            bower: {
                path: "/client/bower_component/"
            },
        },
        tasks: "/tasks/*.js"
    },
    tmp: "/tmp/",
    dist: {
        public: "/public/",
        prod: {
            fonts: "/public/prod/fonts/",
            assets: "/public/prod/assets/",
            css: "/public/prod/css/",
            scripts: "/public/prod/js/"
        },
        testing: {
            fonts: "/public/test/fonts/",
            assets: "/public/test/assets/",
            css: "/public/test/css/",
            scripts: "/public/test/js/"
        },
        dev: {
            fonts: "/public/dev/fonts/",
            assets: "/public/dev/assets/",
            css: "/public/dev/css/",
            scripts: "/public/dev/js/"
        }
    }
};