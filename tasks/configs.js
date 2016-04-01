/**
 * Created by lnwf9885 on 17/03/2016.
 */
module.exports = {
    bower: {
        root: "client/bower_components"
    },
    browserify : {
        transform: [],
        debug: true
    },
    lint: {
        exptions: {
            templates: "!client/src/js/templates.js"
        }
    },
    tmp: "tmp/",
    sources: {
        client: {
            templates: "client/src/js/templates/**/*.hbs",
            js: {
                root: "client/src/js/",
                files: "client/src/js/**/*.js",
                main: "client/src/js/main.js"
            },
            tests: "client/tests/**/*.js",
            less: "client/src/less/**/*.less",
            assets: ["client/src/assets/**/*"],
            fonts: "client/src/fonts/**/*",
        },
        tasks: "tasks/*.js"
    },
    dist: {
        public: "public/",
        prod: {
            public: "public/prod/",
            fonts: "public/prod/fonts/",
            assets: "public/prod/assets/",
            css: "public/prod/css/",
            scripts: "public/prod/js/"
        },
        testing: {
            public: "public/test/",
            fonts: "public/test/fonts/",
            assets: "public/test/assets/",
            css: "public/test/css/",
            scripts: "public/test/js/"
        },
        dev: {
            public: "public/dev/",
            fonts: "public/dev/fonts/",
            assets: "public/dev/assets/",
            css: "public/dev/css/",
            scripts: "public/dev/js/"
        }
    }
};