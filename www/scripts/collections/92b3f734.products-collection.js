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

		// Return all the products which match the selected category
		products: function() {

			var category = this.category;

			return this.filter(function(m) {
				return m.get('CA_ID') === category.toString();
			});
		},

		url: function() {
			return this.settings.getService('products');
		}
	});

	return ProductsCollection;
});