const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
*/
mix.js('resources/js/app.js', './js/app.js')
    .autoload({
    jquery: ['$', 'window.jQuery', 'jQuery']
    });
//  add file js 
mix.sass('resources/sass/index.sass', './css/main.css')
    // đổi đường đẫn index.sass thành scss  là dc 
    .options({
        processCssUrls: false
    });
mix.copy('resources/img', 'public/img');
mix.browserSync({
    proxy: 'http://127.0.0.1:8000/',


});



