define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// Templates
	'text!templates/home.html'
],

function($, _, Backbone, App, template) {

	'use strict';

	var HomeView = Backbone.Marionette.ItemView.extend({

		// Resolves to home.html in templates directory
		template: _.template(template),

		// Map events from view's element (this.el) to view handlers
		events: {
			/*'click button': 'handleButtonClick'*/
		},

		// Constructor function, called on initialization
		initialize: function() {
			// console.log('initialize:' /*, this.$el */);
		},

		onRender: function() {

			// console.log('onRender:');
		},

		onShow: function() {

			// console.log('onShow:');
		}
	});

	return HomeView;
});
