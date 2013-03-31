define([

    // Libraries
    'backbone',
    'marionette',
    'controller'
],

function(Backbone, Marionette, controller) {

    'use strict';

    var AppRouter = Backbone.Marionette.AppRouter.extend({

        appRoutes: {
            '': 'handleIndexRoute'
        }
    });

    return new AppRouter({ controller: controller });
});
