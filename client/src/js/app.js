/**
 * Created by lnwf9885 on 30/03/2016.
 */

var Marionette = require("backbone.marionette"),
    Backbone = require("backbone"),
    RootLayout = require("./layouts/root"),
    ModalLayout = require("./layouts/modal"),
    Router = require("./router");

var App = Marionette.Application.extend({
    getRootLayout: function () {
        return this.root;
    },
    setRootLayout: function () {
        this.root = new RootLayout();
    },
    getModalLayout: function () {
        return this.modal;
    },
    setModalLayout: function () {
        this.modal = new ModalLayout();
    },
    onStart: function () {
        App.router = new Router();
        Backbone.history.start({
            pushState: !(window.history && window.history.pushState),
            hashChange: true,
            root: "/",
            silent: true
        });
    },
    onBeforeStart: function () {
        this.setRootLayout();
        this.setModalLayout();
    }
});

module.exports = new App();