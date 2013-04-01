define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// App
	'app',

	// Views
	'views/product-view',

	// Templates
	'text!templates/products.html'

],

function($, _, Backbone, Marionette, App, RecipeView, template) {

	'use strict';

	var ProductsView = Backbone.Marionette.CompositeView.extend({

		template: _.template(template),

		itemView: RecipeView,

		initialize: function() {
			console.log('initialize: ');
		},

		// Override default Marionette method so we can grab the products
		// filtered by category rather than the entire collection.
		showCollection: function() {

			var that = this;
			var ItemView;

			_.each(this.collection.products(), function(item, index) {
				ItemView = that.getItemView(item);
				that.addItemView(item, ItemView, index);
			});
		}
	});

	return ProductsView;
});