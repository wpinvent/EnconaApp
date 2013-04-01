define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// App
	'app',

	// Views
	'views/recipe-view',

	// Templates
	'text!templates/recipes.html'
],

function($, _, Backbone, Marionette, App, RecipeView, template) {

	'use strict';

	var RecipesView = Backbone.Marionette.CompositeView.extend({

		template: _.template(template),

		itemView: RecipeView,

		initialize: function() {
			// console.log('initialize: ');
		},

		// Override default Marionette method so we can grab the recipes
		// filtered by heat level rather than the entire collection.
		showCollection: function() {

			var that = this;
			var ItemView;

			_.each(this.collection.recipes(), function(item, index) {
				ItemView = that.getItemView(item);
				that.addItemView(item, ItemView, index);
			});
		}
	});

	return RecipesView;
});