/**
 * Created by lnwf9885 on 24/03/2016.
 */
define([
    'marionette'
], function() {
    return function() {
        var view = window.AtHome.views.bookCollectionView;
        this.renderView(view);
        window.AtHome.router.navigate('#');
    }
});