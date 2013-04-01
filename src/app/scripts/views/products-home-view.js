define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// App
	'app',

	// Templates
	'text!templates/products-home.html'
],

function($, _, Backbone, Marionette, App, template) {

	'use strict';

	var ProductsHomeView = Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		initialize: function() {
			console.log('initialize: ');
		}
	});

	return ProductsHomeView;
});