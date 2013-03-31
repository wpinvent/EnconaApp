define([

	// Libraries
	'jquery',
	'lodash',
	'backbone',
	'marionette',
	'app',

	// Views
	'views/home-view',
	'views/recipes-view',
	'views/products-view'
],

function($, _, Backbone, Marionette, App, HomeView, RecipesView, ProductsView) {

	'use strict';

	return {

		handleIndexRoute: function() {

			console.log('handleIndexRoute:');

			App.main.show(new HomeView({
				model: App.models.settingsModel
			}));
		},

		handleRecipesRoute: function() {

			console.log('handleRecipesRoute:');

			var recipesCollection = App.getRecipesCollection();
			var recipesView = new RecipesView({ collection: recipesCollection });

			// Need to load the data first if it isn't already cached
			if (!recipesCollection.length) {
				recipesCollection.fetch({
					success: function() {
						App.main.show(recipesView);
					}
				});
			} else {
				// TODO: bit of repetition here .. maybe use a helper method for show
				App.main.show(recipesView);
			}
		},

		handleProductsRoute: function() {

			console.log('handleProductsRoute:');

			var productsCollection = App.getProductsCollection();
			var productsView = new ProductsView({ collection: productsCollection });

			// Need to load the data first if it isn't already cached
			if (!productsCollection.length) {
				productsCollection.fetch({
					success: function() { App.main.show(productsView); }
				});
			} else {
				App.main.show(productsView);
			}
		},

		handleSocialRoute: function() {
			console.log('handleSocialRoute:');
		}
	};
});