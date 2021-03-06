var Marionette = require("backbone.marionette"),
    _ = require("underscore"),
    Templates = require("../templates");

module.exports = Marionette.LayoutView.extend({
    el: '#modal',
    template: Templates.layouts.modal,
    regions: {
        content: '.modal-content'
    },
    show: function () {
        this.$modal.modal('show');
    },
    hide: function () {
        this.$modal.modal('hide');
    },
    toggle: function () {
        this.$modal.modal('toggle');
    },
    setView: function (view) {
        this.showChildView('content', view);
    },
    setCallback: function (callback) {
        if (callback && "function" == typeof callback) {
            this.$modal.one('hidden.bs.modal', callback);
        }
    },
    initialize: function () {
        this.render();

        this.$modal = this.$el.find('.modal');

        this.getRegion('content').on('show', _.bind(function () {
            this.show();
        }, this));

        this.getRegion('content').on('before:swap', _.bind(function () {
            this.hide();
        }, this));

        this.getRegion('content').on('swap', _.bind(function () {
            this.show();
        }, this));
    }
});