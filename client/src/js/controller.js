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
            window.AtHome.views = Views;
        },
        home: HomeController
    });
});