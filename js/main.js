require([
    'jquery',
    'mustache',
    'staticdata',
], function($, Mustache, staticdata) {
    const templates = {
        portfolio: $('#tmpl-portfolio').html()
    };

    for (let i = staticdata.projects.length - 1; i >= 0; i--) {
        let rendered = Mustache.render(
            templates.portfolio, staticdata.projects[i]);
        $('.portfolio-collection').append(rendered);
    }

});