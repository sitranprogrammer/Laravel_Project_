require('./bootstrap');

import $ from 'jquery';
import'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
window.$ = window.jQuery = $;
$(document).ready(function () {
    $('ul>li').toggle();
    $('.tog-icoin').on('click', function () {
    $('ul>li').toggle('fast');
    });
    $('.owl-carousel').owlCarousel({
        items:1,
        autoplayTimeout: 5000,
        touchDrag: false,
        mouseDrag:false,
        autoplay:true,
        loop: true,
        autoplay: true,
        center:true,

        // touchDrag:"false"
    });
});
