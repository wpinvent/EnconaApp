define([
    // Libraries.
    'jquery',
    'lodash',
    'backbone',
    'marionette',

    // Models
    'models/settings-model',

    // Collections
    'collections/recipes-collection',
    'collections/products-collection'
],

function($, _, Backbone, Marionette, SettingsModel, RecipesCollection, ProductsCollection) {

    'use strict';

    /* TODO:

        Data:
            - Hardcoded product categories (think that's how it works on the site)
            - Is RE_Type the property which represents heat level?
    */


    /* ======================================================================== */

    var App = new Backbone.Marionette.Application();

    // Set up basic paths.
    App.root = '/';

    App.addRegions({
        main: '#main'
    });

    // Use app as a namespace to store core actors
    App.models = {};
    App.collections = {};
    App.views = {};

    // Lazily instantiate recipes collection
    App.getRecipesCollection = function() {

        var recipesCollection = App.collections.recipesCollection;

        // If we haven't already done so, create and cache an instance of the collection
        if (!recipesCollection) {
            recipesCollection = App.collections.recipesCollection = new RecipesCollection(
                null, { settings: App.models.settingsModel }
            );
        }

        return recipesCollection;
    };

    // Lazily instantiate products collection
    App.getProductsCollection = function(category) {

        var productsCollection = App.collections.productsCollection;

        // If we haven't already done so, create and cache an instance of the collection
        if (!productsCollection) {
            productsCollection = App.collections.productsCollection = new ProductsCollection(
                null, { settings: App.models.settingsModel }
            );
        }

        // Store the selected category on the collection
        productsCollection.category = category;

        return productsCollection;
    };

    // Adds any methods to be run after the app was initialized.
    App.addInitializer(function() {
        this.initAppEvents();
    });

    App.on('initialize:before', function() {
        // console.log('App.initialize:before: ');
    });

    // Bootstrap data we need prior to startup
    App.on('initialize:after', function(){

        var settingsModel = App.models.settingsModel = new SettingsModel();
        settingsModel.fetch({
            success: function() {
                // Start routing now we have dependancies
                Backbone.history.start({ pushState: false });
            }
        });
    });

    App.initAppEvents = function() {

        // Add global handling for AJAX calls 
        $(document).ajaxStart(function() {
            $('#loader').fadeIn();
        }).ajaxSuccess(function() {
            $('#loader').fadeOut();
        }).ajaxError(function(event, jqXHR, settings/*, thrownError*/) {
            console.error('Error loading: ', settings.url);
        });

        // Handle navigate events from child views
        App.vent.on('navigate', function(e) {
            navigate(e);
        });

        function navigate(url) {
            App.Router.navigate(url, { trigger: true });
        }
    };

    return App;

});
