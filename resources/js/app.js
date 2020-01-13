require('./bootstrap');

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'jquery-ui/ui/widgets/datepicker.js';


$(document).ready(function () {
    $('#popup').on('click', function () {
      
        $('ul li').toggle(
            "slow","linear"
        );
    });
});
 