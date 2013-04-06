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
	'views/recipe-detail-view',

	'views/products-home-view',
	'views/products-view',
	'views/product-detail-view',

	'views/social-view'
],

function($, _, Backbone, Marionette, App, HomeView, RecipesHomeView, RecipesView, RecipeDetailView, ProductsHomeView, ProductsView, ProductDetailView, SocialView) {

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
				settings: App.models.settingsModel,
				collection: App.getRecipesCollection()
			}));
		},

		handleRecipeDetailRoute: function(recipe) {

			console.log('handleRecipeDetailRoute:', recipe);

			App.main.show(new RecipeDetailView({
				model: App.getRecipesCollection().getByCid(recipe)
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

			console.log('handleProductsRoute:', category);

			App.main.show(new ProductsView({
				settings: App.models.settingsModel,
				collection: App.getProductsCollection(category)
			}));
		},

		handleProductDetailRoute: function(product) {

			console.log('handleProductDetailView:', product);

			App.main.show(new ProductDetailView({
				model: App.getProductsCollection().getByCid(product)
			}));
		},

		handleSocialRoute: function() {

			console.log('handleSocialRoute:');

			App.main.show(new SocialView());
		}
	};
});