/**
 * Created by lnwf9885 on 24/03/2016.
 */
define([
    'marionette',
    'view',
    'controllers/home'
], function(Mn, Views, HomeController){
    return Controller = Mn.Controller.extend({
        initialize: function(){
            AtHome.core.vent.trigger('app:log', 'Controller: Initializing');
        },
        renderView: function(view) {
            this.destroyCurrentView(view);
            AtHome.core.vent.trigger('app:log', 'Controller: Rendering new view.');
            $('#athome-client-app').html(view.render().el);
        },
        destroyCurrentView: function(view) {
            if (!_.isUndefined(window.AtHome.views.currentView)) {
                AtHome.core.vent.trigger('app:log', 'Controller: Destroying existing view.');
                window.AtHome.views.currentView.close();
            }
            window.AtHome.views.currentView = view;
        },
        home: HomeController,
    });
});