/**
 * Author: Jan Myler <honza.myler@gmail.com>
 * Filename: track_view.js
 * 
 * View for main playback controls.
 */

define([
    'underscore',
    'backbone',
], function(_, Backbone) {

    var PlaybackControls = Backbone.View.extend({
        // parent DOM element
        el: $('#playback-controls'),

        // DOM events listeners
        events: {
            'click #play'       : 'play',
            'click #stop'       : 'test',
            'click #seek-start' : 'test',
            'click #seek-end'   : 'test'
        },

        // listeners to a model's changes
        initialize: function() {

        },

        // render function
        render: function() {
            this.el.children('#time-display').val('0. 0. 0');
            return this;
        },

        // test debug only
        test: function(options) {
            alert('clicked');
            console.log(options);
        }


    });

    return PlaybackControls;
});