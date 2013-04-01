define([

	// libs
	'lodash',
	'backbone',

	// models
	'models/recipe-model'
],

function(_, Backbone, RecipeModel) {

	'use strict';

	var RecipesCollection = Backbone.Collection.extend({

		model: RecipeModel,

		heat: 1, // Default heat level

		initialize: function(models, options) {

			console.log('initialize: ');

			// Cache a reference to the settings model
			this.settings = options.settings;
		},

		// Return all the recipes which match the selected heat level
		recipes: function() {

			var heat = this.heat;

			return this.filter(function(m) {
				return m.get('RE_Type') === heat.toString();
			});
		},

		url: function() {
			return this.settings.getService('recipes');
		}
	});

	return RecipesCollection;
});