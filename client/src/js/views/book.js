/**
 * Created by lnwf9885 on 24/03/2016.
 */
define([
    'marionette',
    'handlebars'
], function(Mn, JST) {
    return BookItemView = Mn.ItemView.extend({
        template: JST['book'],
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        events: {
            'click': 'showDetails'
        },
        showDetails: function () {
            window.AtHome.core.vent.trigger('app:log', 'Contacts View: showDetails hit.');
            window.AtHome.controller.book(this.model.id);
        }
    });
});