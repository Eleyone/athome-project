/**
 * Created by lnwf9885 on 24/03/2016.
 */
var BookCollection = require("../collections/book"),
    BookCollectionView = require("../views/book/list");

module.exports = function () {
    var globalCh = Backbone.Wreqr.radio.channel("atHome");
    globalCh.trigger("app:log", "Controller home.js");

    var collection = new BookCollection();
    var view = new BookCollectionView({
        collection: collection
    });
    this.renderView(view);
    window.AtHome.router.navigate("#");
};