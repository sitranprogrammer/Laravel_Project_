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
mix.sass('resources/sass/index.sass', 'public/css/style.css')
    // đổi đường đẫn index.sass thành scss  là dc 
    .minify('public/css/style.css')
    .options({
        processCssUrls: false
    });
mix.browserSync({
        proxy: 'http://127.0.0.1:8000/',


    });



