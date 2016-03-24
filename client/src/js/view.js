/**
 * Created by lnwf9885 on 24/03/2016.
 */
define([
    'views/book',
    'views/books',
], function(BookItemView, BookCollectionView){
    return Views = {
        bookItemView: new BookItemView(),
        bookCollectionView: new BookCollectionView()
    };
});