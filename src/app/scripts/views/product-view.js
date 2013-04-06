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

		events: {
			'click button': 'handleButtonClick'
		},

		initialize: function(options) {
			this.settings = options.settings;
		},

		serializeData: function() {

			// Need to build the image path from settings and model first.
			var image = this.settings.get('product-images') +
				this.model.get('PR_ID') + '_thumb.jpg';

			return {
				image: image,
				model: this.model.toJSON()
			};
		},

		handleButtonClick: function() {
			// We're not synchronising data back to the server so we can use
			// Backbone's built in client id property to identify the model.
			var url = '#product-detail/' + this.model.cid;
			App.vent.trigger('navigate', url);
		}
	});

	return ProductView;
});