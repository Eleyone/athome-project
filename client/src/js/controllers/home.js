/**
 * Created by lnwf9885 on 24/03/2016.
 */
var BookCollection = require("../collections/book"),
    BookCollectionView = require("../views/book/list");

module.exports = function () {
    var collection = new BookCollection();
    var view = new BookCollectionView({
        collection: collection
    });
    this.renderView(view);
    atHome.router.navigate('#');
};