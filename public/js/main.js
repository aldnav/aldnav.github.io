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

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    $('#the-list').html(marked($('#the-list').text()));
});