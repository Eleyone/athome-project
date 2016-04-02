/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require("backbone.marionette"),
    Templates = require("../../templates");

var bookItemView = Marionette.ItemView.extend({
    template: Templates.book["list-item"],
    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },
    events: {
        "click": "showDetails"
    },
    showDetails: function () {
        window.App.core.vent.trigger("app:log", "Contacts View: showDetails hit.");
        window.App.controller.book(this.model.id);
    }
});

var BookCollectionView = Marionette.CollectionView.extend({
    initialize: function () {
        this.listenTo(this.collection, "change", this.render);
    },
    itemView: bookItemView
});

module.exports = BookCollectionView;