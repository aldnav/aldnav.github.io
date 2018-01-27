(function(config) {
    if (window.hasOwnProperty('require')) {
        require.config(config);
    } else {
        window.require = config;
    }
})({
    baseUrl: 'static/js',
    paths: {
        jquery: 'jquery-3.2.1.slim.min',
        mustache: 'mustache.min',
    }
});
