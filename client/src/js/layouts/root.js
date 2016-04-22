/**
 * Backbone.Marionette.LayoutView component attached to body element
 */
var Marionette = require("backbone.marionette")
Tempaltes = require("../templates");

module.exports = Marionette.LayoutView.extend({
    el: 'body',
    template: Tempaltes.layouts.root,
    regions: {
        header: "#header",
        main: "#main"
    },
    initialize: function () {
        this.render();
    }
});
