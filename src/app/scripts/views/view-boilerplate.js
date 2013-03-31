define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// Templates
	'text!templates/recipe.html'

], function($, _, Backbone, Marionette, template) {

	'use strict';

	var RecipeView = Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		initialize: function() {
			console.log('initialize: ');
		}
	});

	return RecipeView;
});