require('./bootstrap');

import $ from 'jquery';
window.$ = window.jQuery = $;

$('').on('click', function () {
    $('ul>li').toggle();
});