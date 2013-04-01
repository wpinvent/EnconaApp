define([

	// Libraries
	'jquery',
	'lodash',
	'backbone',
	'marionette',
	'app',

	// Views
	'views/home-view',
	'views/recipes-home-view',
	'views/recipes-view',
	'views/products-home-view',
	'views/products-view'
],

function($, _, Backbone, Marionette, App, HomeView, RecipesHomeView, RecipesView, ProductsHomeView, ProductsView) {

	'use strict';

	return {

		handleIndexRoute: function() {

			console.log('handleIndexRoute:');

			App.main.show(new HomeView({
				model: App.models.settingsModel
			}));
		},

		handleRecipesHomeRoute: function() {

			var recipesCollection = App.getRecipesCollection();
			var recipesHomeView = new RecipesHomeView({
				collection: recipesCollection
			});

			// Need to load the data first if it isn't already cached
			if (!recipesCollection.length) {
				recipesCollection.fetch({
					success: function() {
						App.main.show(recipesHomeView);
					}
				});
			} else {
				// TODO: bit of repetition here .. maybe use a helper method for show
				App.main.show(recipesHomeView);
			}
		},

		handleRecipesRoute: function() {

			console.log('handleRecipesRoute:');

			App.main.show(new RecipesView({
				collection: App.getRecipesCollection()
			}));
		},

		handleProductsHomeRoute: function() {

			console.log('handleProductsHomeRoute:');

			var productsCollection = App.getProductsCollection();
			var productsHomeView = new ProductsHomeView({
				collection: productsCollection
			});

			// Need to load the data first if it isn't already cached
			if (!productsCollection.length) {
				productsCollection.fetch({
					success: function() { App.main.show(productsHomeView); }
				});
			} else {
				App.main.show(productsHomeView);
			}
		},

		handleProductsRoute: function(category) {

			console.log('handleProductsRoute', category);

			App.main.show(new ProductsView({
				collection: App.getProductsCollection(category)
			}));
		},

		handleSocialRoute: function() {
			console.log('handleSocialRoute:');
		}
	};
});