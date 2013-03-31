define([

	// Libraries
	'jquery',
	'lodash',
	'backbone',
	'marionette',
	'app',

	// Views
	'views/home-view',

	// Models
	'models/settings-model'
],

function($, _, Backbone, Marionette, App, HomeView, SettingsModel) {

	'use strict';

	return {

		handleIndexRoute: function() {

			console.log('handleIndexRoute:');

			// Create and fetch settings
			var settingsModel = new SettingsModel();
			settingsModel.fetch({
				success: function() {
					// Create a basic view to echo data in settings
					App.main.show(new HomeView({ model: settingsModel }));
				}
			});
		}
	};
});