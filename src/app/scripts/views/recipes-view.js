define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// Views
	'views/recipe-view',

	// Templates
	'text!templates/recipes.html'

], function($, _, Backbone, Marionette, RecipeView, template) {

	'use strict';

	var RecipesView = Backbone.Marionette.CompositeView.extend({

		template: _.template(template),

		itemView: RecipeView,

		initialize: function() {
			console.log('initialize: ');
		}
	});

	return RecipesView;
});