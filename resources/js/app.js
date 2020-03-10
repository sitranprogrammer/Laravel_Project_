require('./bootstrap');
import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'jquery-ui/ui/widgets/datepicker.js';
import 'owl.carousel';

$(document).ready(function () {
    $('#sideptrai').on('click', function () {
        console.log('hihi')
    });
    $('.owl-carousel').owlCarousel({
        items: 1,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
        // dots: true,
        loop: true,
        // nav: true,
        autoplay:true,
        mouseDrag:false,
        touchDrag:false,
        smartSpeed:1500,
       
    });
  
  
})
$('.new-product > .owl-carousel').owlCarousel({
    items: 4,
    nav: false,
    dots: false,
    loop: true,
   
    responsive : {
        // breakpoint from 0 up
        0 : {
           
        },
        // breakpoint from 480 up
        480 : {
            items: 4,
            mouseDrag:false,
            touchDrag:false
        },
        // breakpoint from 768 up
        768 : {
           
        }
    }
    // autoplay: none,
    // onDrag:none


})
$('.hot-deals> .owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    loop: true,
    nav: false,
    autoplay:true
})
