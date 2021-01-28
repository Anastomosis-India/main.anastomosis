$(document).ready(function(){
    $('.authors_featured').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 12,
        slidesToScroll: 2,
        prevArrow: false,
        nextArrow: false,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 12,
              slidesToScroll: 1,         }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });

  $(document).ready(function(){
    $('.post_small-index').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              nav: false,            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });

$(document).ready(function(){
    $('.topic-section').slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        variableWidth: true,
        slidesToScroll: 2,
        prevArrow: false,
        nextArrow: false
      });
});