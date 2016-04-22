/**
 * Backbone.Marionette.LayoutView component attached to body element
 */
define([
    'backbone-framework',
    'templates',
    'views/interlocuteur/search/form'
], function (Backbone, JST, SearchFormView) {
    return Backbone.Marionette.LayoutView.extend({
        el: 'body',
        template: {
            type: 'handlebars',
            template: JST['layout']
        },
        regions: {
            header: '.container-static',
            main: '#main',
            containerSearchForm: '#container-search-form'
        },
        initialize: function() {
            this.render();
        },
        onRender: function(options) {
            this.showChildView('containerSearchForm', new SearchFormView(), options);
        }
    });
});
