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

// Header menu Link Action
  document.addEventListener('DOMContentLoaded', function() {

    var links = document.querySelectorAll('.hamburger-menu a');


    links.forEach(function(link) {
    link.addEventListener('click', function() {

      links.forEach(function(l) {
        l.classList.remove('active-link');
      });

      this.classList.add('active-link');
    });
  });
});

// Header menu ActiveLink ColorChange
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.hamburger-menu-list a');
  var currentPath = window.location.pathname;

  links.forEach(function(link) {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {

  var currentPath = window.location.pathname;


  var topLink = document.getElementById('top');
  var priceLink = document.getElementById('price');
  var qaLink = document.getElementById('qa');


  if (currentPath.includes("index.html")) {
    topLink.classList.add('active-link');
  } else if (currentPath.includes("price.html")) {
    priceLink.classList.add('active-link');
  } else if (currentPath.includes("faq.html")) {
    qaLink.classList.add('active-link');
  }
});