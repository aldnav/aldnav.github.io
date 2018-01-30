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

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    let topSection;
    $(window).on('resize scroll', () => {
      let visibleSections = $('section').filter((_, el) => $(el).isInViewport());
      if (visibleSections.length > 0 && visibleSections.eq(0).attr('id') !== topSection) {
        topSection = visibleSections.eq(0).attr('id');
        $('.simple-nav a').removeClass('selected');
        $(`.simple-nav a[href="#${topSection}"]`).addClass('selected');
      }
    });
});