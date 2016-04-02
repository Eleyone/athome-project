/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require("backbone.marionette"),
    Template = require("../../templates");

var BookDetailsView = Marionette.View.extend({
    template: Template.book.details,
    initialize: function () {

    }
});

module.exports = BookDetailsView;