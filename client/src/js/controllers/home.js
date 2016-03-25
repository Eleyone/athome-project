/**
 * Created by lnwf9885 on 24/03/2016.
 */
define([
    'marionette',
    'views/books',
    'colletions/book'
], function() {
    return function(BookCollectionView, BookCollection) {
        var collection = new BookCollection();
        var view = new BookCollectionView({
            collection: collection
        });
        this.renderView(view);
        window.AtHome.router.navigate('#');
    }
});