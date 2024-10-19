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

// Gallery Slider
$(document).ready(function(){
  $('.gallery__slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: function(slider, i) {
      return '<button></button>';
    }
  });
});

  document.addEventListener('DOMContentLoaded', function() {
    // 現在のページのパスを取得
    var currentPath = window.location.pathname;

    // idが"qa"のリンク要素を取得
    var qaLink = document.getElementById('qa');

    // リンクのパスと現在のページのパスが一致しているか確認
    if (qaLink && qaLink.getAttribute('href') === currentPath) {
      qaLink.classList.add('active');
    }
  });
