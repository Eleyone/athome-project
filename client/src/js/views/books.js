/**
 * Created by lnwf9885 on 24/03/2016.
 */
define([
    'marionette',
    '/views/book'
], function(Mn, BookView){
    return BookCollectionView = Mn.CollectionView.extend({
        initialize: function() {
            this.listenTo(this.collection, 'change', this.render);
        },
        itemView: BookView
    });
});