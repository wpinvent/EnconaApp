define([

	// Libs
	'jquery',
	'lodash',
	'backbone',
	'marionette',

	// Views
	'views/product-view',

	// Templates
	'text!templates/products.html'

], function($, _, Backbone, Marionette, RecipeView, template) {

	'use strict';

	var ProductsView = Backbone.Marionette.CompositeView.extend({

		template: _.template(template),

		itemView: RecipeView,

		initialize: function() {
			console.log('initialize: ');
		}
	});

	return ProductsView;
});