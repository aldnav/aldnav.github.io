require([
    'jquery',
    'mustache',
    'staticdata',
], function($, Mustache, staticdata) {
    new Vue({
        el: '#portfolio-collection',
        data: {
            portfolios: staticdata.projects
        },
        mounted: function() {
            $('#loader-portfolio').remove();
        }
    });
    new Vue({
        el: '#blog-collection',
        data: {
            blogs: staticdata.blogs
        },
        mounted: function() {
            $('#loader-blog').remove();
        }
    });

});