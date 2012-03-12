/**
 * Author: Jan Myler <honza.myler@gmail.com>
 * Filename: project.js
 * 
 * Model for project information.
 */

define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var Project = Backbone.Model.extend({
        // default attributes
        defaults: {
            name: 'Untitled',
            created: Date.now(),
            user: 'Guest', 
            curr_time: 0           
        },

        // initialization
        initialize: function() {
            this.bind('error', function(model, err) {
                alert(err);
            });
        },

        // validation?
        validate: function(attribs) {
            var regex = /^(\w+[\ ]*)+$/;
            if (!regex.test(attribs.name))
                return "Project name is invalid.";
        }

    });

    return Project;
});