import $ from "jquery";
import 'slick-slider';

$(function () {
    $('.slider-sale').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        rows: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: false
    });
    $('.index-main-slider__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        rows: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: false
    });
    $('.slider').slick({
        dots:false,
        arrows:true,
        appendArrows:'.slider-arrows',
        prevArrow:'<span class="slider-arrow"><</span>',
        nextArrow:'<span class="slider-arrow">></span>'
      })
});

