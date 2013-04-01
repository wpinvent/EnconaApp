// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    'use strict';

    // Create the defaults once
    var pluginName = 'chilliRange',
        defaults = {
            range: [
                { label: 'Extra hot!!', level: 4, max: 1 },
                { label: 'Hot!!', level: 3, max: 0.75 },
                { label: 'Medium', level: 2, max: 0.5 },
                { label: 'Mild', level: 1, max: 0.25 },
            ]
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {

            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).

            var self = this;

            // Create the structure for the graphical elements
            var $chilli = $('<div />').attr('id', 'chilli').append([
                $('<div />').attr('id', 'mask').append($('<div />').attr('id', 'background')),
                $('<div />').attr('id', 'graphic')
            ]);

            // Create the range input and listen for changes
            var $range = $('<input />').attr({
                id: 'range',
                type: 'range',
                min: 0,
                max: 1,
                step: 0.1,
                value: 0
            }).change(function() {
                self.update(self.element, self.options, $(this).val());
            });

            $(this.element).append([$chilli, $range]);
        },

        // TODO: is there a way of having public methods using this plug-in boilerplate?
        update: function(el, options, ratio) {

            var $el = $(el);

            var totalHeight = $(el).find('#chilli').outerHeight();
            var height = totalHeight * ratio;

            var range = this.options.range;
            var heat;

            // Figure out what heat level we're at
            for (var i = 0, current, nextMax; i < range.length; i ++) {
                current = range[i];
                nextMax = (range[i + 1] && range[i + 1].max) || 0;
                if (ratio <= current.max && ratio >= nextMax) {
                    heat = current;
                    break;
                }
            }

            // Update the background height
            $el.find('#background').css({
                height: height,
                top: totalHeight - height
            });

            // Let subscribers know what the heat level is
            $el.trigger('changed', heat);
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );