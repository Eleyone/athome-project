/**
 * Created by lnwf9885 on 17/03/2016.
 */
define([
    'marionette'
], function (Mn) {
    var DefaultRouter = Mn.AppRouter.extend({
        appRoutes: {
            '#': 'home',
            'profil/:id': 'profil',
            'register': 'register'
        }
    });

    return DefaultRouter;
});