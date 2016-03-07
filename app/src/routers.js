/**
 * Created by lnwf9885 on 07/03/2016.
 */
module.exports.initialize = function(app) {
    app.get('/', require('./controllers/index').index);
    app.use('/api', require('./routers/oauth2'));
    app.use('/api', require('./routers/client'));
    app.use('/api', require('./routers/user'));
    app.use('/api', require('./routers/book'));
    app.use('/api', require('./routers/shelf'));
};