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
