var App = require("./app"),
    $ = require("jquery");

// Fix < IE8
$.ajaxSetup({cache: false});

global.AtHome = new App();
console.log(AtHome, AtHome.core);

AtHome.start();