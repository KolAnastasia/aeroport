$(document).ready(function () {
  $('.main-option_slider').slick({
    autoplay: true,
    dots: true,
    аccessibility: false,
    arrows: false,
    fade: true
  })

  $('.online-shelude_slider').slick({
    autoplay: true,
    dots: true,
    аccessibility: false,
    fade: true,
    nextArrow: $('.online-shelude_slider-arrow-r'),
    prevArrow: $('.online-shelude_slider-arrow-l'),

  })

  $('.header_search').click(function (event) {
    $('.main_search-wrap').addClass('active-search');
    event.stopPropagation();
  });

  $(document).mouseup(function (e) {
    var div = $(".main_search-wrap");
    if (!div.is(e.target)
      && div.hasClass("active")) {
      div.removeClass;
    }
  });


  $('.page_wrapper').click(function () {
    $('.main_search-wrap').removeClass('active-search')
  })

  $('.main_online-shelude_top_btn').click(function (event) {
    $('.main_online-shelude_top_btn').toggleClass('active-btn')
    $('.main_online-shelude_table').removeClass('active')
    var num = $(this).attr('data-n');
    $('#main_online-shelude_table' + num).addClass('active')
  });

  $('.header_menu').click(function () {
    $('.header_menu-r').toggleClass('active')
  })

  $('.close-menu').click(function () {
    $('.header_menu-r').removeClass('active')
  })

  $('#inner_top_calendar').datepicker({
    minDate: new Date()
  })

  $('.fancybox-img').fancybox();

  $('.content-slider').slick({
    autoplay: true,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

$(document).ready(function(){
  $(".about-history_date").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('.about-history_content').animate({scrollTop: top}, 800);
  });
});



ymaps.ready(init);
function init(){ 
    var myMap = new ymaps.Map("map", {
        center: [52.698286, 39.524596
        ],
        zoom: 14
    });
}

// var myPlacemark = new ymaps.Placemark([55.76, 37.56], {}, {
//   iconLayout: 'default#image',
//   iconImageHref: '/img/',
//   iconImageSize: [30, 42],
//   iconImageOffset: [-3, -42]
// });

if ($(window).width() < 981) {
  $('.inform_nav').click(function () {
    $('.inform_nav').toggleClass('active')
  })
  $('.inform_nav_item').click(function (event) {
    if (!$(event.currentTarget).parent(".inform_nav").hasClass("active")) {
      event.preventDefault();
    }
  })
};


// $('.inner_top_nav').click(function () {
//   $('.inner_top_nav').toggleClass('active')
// })
// $('.inner_top_nav_item').click(function (event) {
//   if(!$(event.currentTarget).parent(".inner_top_nav").hasClass("active")){
//      event.preventDefault();
//   }
// })