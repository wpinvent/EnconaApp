define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// App
	'app',

	// views
	'views/recipe-summary-view',
	'views/recipe-ingredients-view',
	'views/recipe-instructions-view',

	// Templates
	'text!templates/recipe-detail.html'
],

function($, _, Backbone, Marionette, App, RecipeSummaryView, RecipeIngredientsView, RecipeInstructionsView, template) {

	'use strict';

	var RecipeView = Backbone.Marionette.Layout.extend({

		template: _.template(template),

		events: {
			'click button': 'handleButtonClick'
		},

		regions: {
			content: '#content'
		},

		subviews: {
			summary: RecipeSummaryView,
			ingredients: RecipeIngredientsView,
			instructions: RecipeInstructionsView
		},

		initialize: function() {
			// console.log('initialize: ');
		},

		onRender: function() {
			// Default subview to show on arrival is the summary
			this.showView(this.subviews.summary);
		},

		showView: function(View) {
			this.content.show(new View({ model: this.model }));
		},

		handleButtonClick: function(e) {
			// Resolve the clicked button id to a subview to show
			var id = $(e.target).attr('id');
			this.showView(this.subviews[id]);
		}
	});

	return RecipeView;
});