// Header Section
var hamburger = $('.hamburger-menu');

$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});

$('.hamburger-menu-list').on('click', function () {
  hamburger.removeClass('hamburger-menu-active');
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');
});

// CustomerVoices Section
$(document).ready(function(){
  $('.customer__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    variableWidth: false,
    centerMode: false,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px',
          variableWidth: true,
          centerMode: true,
              }
      }
    ]
  });
});
