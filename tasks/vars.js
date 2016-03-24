/**
 * Created by lnwf9885 on 17/03/2016.
 */
module.exports = {
    sources: {
        client: {
            templates: "/client/src/js/templates/**/*.hbs",
            js: "/client/src/js/**/*.js",
            tests: "/client/tests/**/*.js",
            less: "/client/src/less/**/*.less",
            assets: "/client/src/assets/**/*",
            fonts: "/client/src/fonts/**/*"
        },
        tasks: "/tasks/*.js"
    },
    tmp: "/tmp/",
    dist: {
        public: "/public/",
        prod: {
            icons: "/public/prod/fonts/",
            assets: "/public/prod/assets/",
            css: "/public/prod/css/",
            scripts: "/public/prod/js/"
        },
        dev: {
            icons: "/public/dev/fonts/",
            assets: "/public/dev/assets/",
            css: "/public/dev/css/",
            scripts: "/public/dev/js/"
        }
    }
};