define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// App
	'app',

	// Templates
	'text!templates/product.html'

],

function($, _, Backbone, Marionette, App, template) {

	'use strict';

	var ProductView = Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		initialize: function() {
			console.log('initialize: ');
		}
	});

	return ProductView;
});