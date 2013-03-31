define([

	'app',

	//libs
	'backbone'

],

function(App, Backbone) {

	'use strict';

	var SettingsModel = Backbone.Model.extend({

		url: 'scripts/data/settings.json',

		getService: function(key) {
			return this.get('services')[this.get('mode')][key];
		},
	});

	return SettingsModel;
});