/**
 * Created by lnwf9885 on 17/03/2016.
 */
var Marionette = require('backbone.marionette');

module.exports = DefaultRouter = Marionette.AppRouter.extend({
    appRoutes: {
        '#': 'home',
        'profil/:id': 'profil',
        'register': 'register'
    }
});
