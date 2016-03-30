/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require('backbone.marionette'),
    HomeController = require('./controllers/home');

module.exports = Controller = Mn.Controller.extend({
    initialize: function () {
        App.core.vent.trigger('app:log', 'Controller: Initializing');
    },
    renderView: function (view) {
        this.destroyCurrentView(view);
        App.core.vent.trigger('app:log', 'Controller: Rendering new view.');
        $('#athome-client-app').html(view.render().el);
    },
    destroyCurrentView: function (view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            App.core.vent.trigger('app:log', 'Controller: Destroying existing view.');
            window.App.views.currentView.close();
        }
        window.App.views.currentView = view;
    },
    home: HomeController,
});