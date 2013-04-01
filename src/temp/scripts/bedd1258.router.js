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
            'recipes-home': 'handleRecipesHomeRoute',
            'recipes': 'handleRecipesRoute',
            'products-home': 'handleProductsHomeRoute',
            'products/:category': 'handleProductsRoute',
            'social': 'handleSocialRoute'
        }
    });

    return new AppRouter({ controller: controller });
});
