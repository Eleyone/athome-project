/**
 * Created by lnwf9885 on 29/03/2016.
 */
var config = require('./tasks/vars');
var rimraf = require("rimraf")

module.exports = function(env){
    rimraf.sync(config.tmp)
    rimraf.sync(config.dist[env].public)
}