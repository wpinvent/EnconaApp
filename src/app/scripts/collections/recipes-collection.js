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

		initialize: function(models, options) {

			console.log('initialize: ');

			// Cache a reference to the settings model
			this.settings = options.settings;
		},

		url: function() {
			return this.settings.getService('recipes');
		}
	});

	return RecipesCollection;
});