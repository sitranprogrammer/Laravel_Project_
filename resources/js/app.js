require('./bootstrap');

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'jquery-ui/ui/widgets/datepicker.js';


$(document).ready(function () {
    $('#sideptrai').on('click', function () {
        console.log('hihi')
    });
});
