/**
 * Created by lnwf9885 on 21/04/2016.
 */
var Marionette = require("backbone.marionette"),
    Templates = require("../../templates");

module.exports = Marionette.ItemView.extend({
    template: Templates.book["list-item"],
    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },
    events: {
        "click": "showDetails"
    },
    showDetails: function () {
    }
});