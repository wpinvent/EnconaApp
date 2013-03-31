define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// Templates
	'text!templates/product.html'

], function($, _, Backbone, Marionette, template) {

	'use strict';

	var ProductView = Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		initialize: function() {
			console.log('initialize: ');
		}
	});

	return ProductView;
});