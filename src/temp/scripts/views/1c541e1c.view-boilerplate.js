define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// App
	'app',

	// Templates
	'text!templates/recipe.html'

],

function($, _, Backbone, Marionette, App, template) {

	'use strict';

	var RecipeView = Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		initialize: function() {
			console.log('initialize: ');
		}
	});

	return RecipeView;
});