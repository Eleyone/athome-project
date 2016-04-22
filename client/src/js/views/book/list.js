/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require("backbone.marionette"),
    Templates = require("../../templates"),
    BookItemView = require("./list-item");


module.exports = Marionette.CompositeView.extend({
    template: Templates.book.list,
    initialize: function () {
        this.listenTo(this.collection, "change", this.render);
    },
    itemView: BookItemView
});