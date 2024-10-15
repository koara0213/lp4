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

// Q&A
$(document).ready(function() {
  $('.qa__answer').hide();
});

$('.qa__item').on('click', function() {
  var answerBox = $(this).closest('.qa__item').find('.qa__answer');
  answerBox.slideToggle();

  var icon = $(this).closest('.qa__item').find('.bi-plus-lg, .bi-dash-lg');
  if (icon.hasClass('bi-plus-lg')) {
    icon.removeClass('bi-plus-lg').addClass('bi-dash-lg');
  } else {
    icon.removeClass('bi-dash-lg').addClass('bi-plus-lg');
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

    for (let i = 0; i < smoothScrollTrigger.length; i++) {
      smoothScrollTrigger[i].addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));

        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const target = rect + offset;
        const s = document.documentElement.style;
        s.scrollBehavior = 'smooth';

        window.scrollTo({
          top: target,
          behavior: 'smooth'
        });

        setTimeout(() => {
          s.scrollBehavior = 'auto';
        }, 1000);
      });
    }
  });

