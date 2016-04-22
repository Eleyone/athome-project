/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require("backbone.marionette"),
    Templates = require("../../templates");

module.exports = Marionette.ItemView.extend({
    template: Templates.book.detail,
    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    }
});