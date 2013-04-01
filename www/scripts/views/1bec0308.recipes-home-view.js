define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// App
	'app',

	// Templates
	'text!templates/recipes-home.html',

	// Plugins
	'plugins/jquery.chilli-range'
],

function($, _, Backbone, Marionette, App, template) {

	'use strict';

	var RecipesHomeView = Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		events: {
			'changed div#chilli-range': 'rangeChangeHandler',
			'click button': 'buttonClickHandler'
		},

		initialize: function() {

			// console.log('initialize: ');

			// Probably not entirely in keeping w/ Backbone philosophy,
			// we have a reference to the collection here only so we can
			// store the selected heat level on it to allow filtering.
			this.collection.heat = 1;
		},

		onRender: function() {

			// Create the chilli range heat chooser thingy
			this.$el.find('#chilli-range').chilliRange({});
		},

		rangeChangeHandler: function(e, heat) {

			// console.log('Heat changed', heat.label);

			// Update the label
			this.$el.find('#heat-label').html(heat.label);

			// Set the heat level on the collection
			this.collection.heat = heat.level;
		},

		buttonClickHandler: function() {
			App.vent.trigger('navigate', 'recipes');
		}
	});

	return RecipesHomeView;
});