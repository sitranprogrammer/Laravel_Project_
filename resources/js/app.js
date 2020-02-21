require('./bootstrap');
import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
window.$ = window.jQuery = $;

import 'jquery-ui/ui/widgets/datepicker.js';

import 'owl.carousel';

$(document).ready(function () {
    // $('#sideptrai').on('click', function () {
    //     console.log('hihi')
    // });
    $('.owl-carousel').owlCarousel({
        items: 1,
        // nav: false,
        dots: false,
        loop: true,
        nav: false,

    });


})
$('.new-product > .owl-carousel').owlCarousel({
    items: 4,
    nav: false,
    dots: false,
    loop: true,
    nav: false,
    autoplay: true

})
$('.hot-deals> .owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    loop: true,
    nav: false,
    autoplay:true
})
