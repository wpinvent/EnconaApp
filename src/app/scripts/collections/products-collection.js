define([

	// libs
	'lodash',
	'backbone',

	// models
	'models/product-model'
],

function(_, Backbone, ProductModel) {

	'use strict';

	var ProductsCollection = Backbone.Collection.extend({

		model: ProductModel,

		initialize: function(models, options) {

			console.log('initialize: ');

			// Cache a reference to the settings model
			this.settings = options.settings;
		},

		url: function() {
			return this.settings.getService('products');
		}
	});

	return ProductsCollection;
});