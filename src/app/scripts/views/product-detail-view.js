define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// App
	'app',

	// Templates
	'text!templates/product-detail.html'

],

function($, _, Backbone, Marionette, App, template) {

	'use strict';

	var ProductDetailView = Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		initialize: function(/*options*/) {
			console.log('initialize:');
		}
	});

	return ProductDetailView;
});