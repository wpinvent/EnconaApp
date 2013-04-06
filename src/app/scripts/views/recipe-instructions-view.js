define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// App
	'app',

	// Templates
	'text!templates/recipe-instructions.html'

],

function($, _, Backbone, Marionette, App, template) {

	'use strict';

	var RecipeInstructionsView = Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		initialize: function() {
			// console.log('initialize: ');
		}
	});

	return RecipeInstructionsView;
});