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
            '': 'handleIndexRoute',
            'recipes': 'handleRecipesRoute',
            'products': 'handleProductsRoute',
            'social': 'handleSocialRoute'
        }
    });

    return new AppRouter({ controller: controller });
});
