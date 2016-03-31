/**
 * Created by lnwf9885 on 29/03/2016.
 */
var config = require('./configs');
var rimraf = require("rimraf");

module.exports = function(env){
    console.log('Cleaning temp folder', config.tmp);
    rimraf.sync(config.tmp)
    console.log('Cleaning temp folder', config.dist[env].public);
    rimraf.sync(config.dist[env].public)
}