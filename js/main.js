require([
    'jquery',
    'mustache',
    'staticdata',
], function($, Mustache, staticdata) {
    const templates = {
        portfolio: $('#tmpl-portfolio').html(),
        blog: $('#tmpl-blog').html(),
    };

    for (let i = staticdata.projects.length - 1; i >= 0; i--) {
        let rendered = Mustache.render(
            templates.portfolio, staticdata.projects[i]);
        $('.portfolio-collection').append(rendered);
    }

    for (let i = staticdata.blogs.length - 1; i >= 0; i--) {
        let rendered = Mustache.render(
            templates.blog, staticdata.blogs[i]);
        $('.blog-collection').append(rendered);
    }

});