$(function() {
$('.slider').slick({
    // autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.testimonials-slider').slick({
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  nextArrow: '<span class="next"></span>',
  prevArrow: '<span class="prev"></span>',
});

});