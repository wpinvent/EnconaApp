require([

    'jquery',
    'backbone',
    'app',

    // Main router
    'router'
],

function($, Backbone, App, router) {

    'use strict';

    function start() {

        console.log('start:');

        App.Router = router;
        App.start();
    }

    function onDeviceReady(isDevice) {
        console.log('onDeviceReady: running on a device: ' + (isDevice !== false));
        start();
    }

    if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
        // This is running on a device so waiting for deviceready event
        document.addEventListener('deviceready', onDeviceReady, false);
    } else {
        // On desktop don't have to wait for anything
        onDeviceReady(false);
    }
});