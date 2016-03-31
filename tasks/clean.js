/**
 * Created by lnwf9885 on 29/03/2016.
 */
var config = require('./configs');
var rimraf = require("rimraf");

module.exports = function(){
    console.log('Cleaning temp folder', config.tmp);
    rimraf.sync(config.tmp)
    console.log('Cleaning temp folder', config.dist[global.APP_ENV].public);
    rimraf.sync(config.dist[global.APP_ENV].public)
}