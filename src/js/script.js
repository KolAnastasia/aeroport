//настройки слайдеров на главной
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


  // вызов строки поиска 
  $('.header_search').click(function (event) {
    $('.main_search-wrap').addClass('active-search');
    event.stopPropagation();
  });

  $(document).click(function (e) {
    if ($(e.target).closest('.main_search-wrap').length) {
      return;
    }
    $('.main_search-wrap').removeClass('active-search');
  });


  //переключатель расписания полетов на главной
  $('.main_online-shelude_top_btn').click(function (event) {
    $('.main_online-shelude_table').removeClass('active')
    $('.main_online-shelude_top_btn').removeClass('active-btn')
    var num = $(this).attr('data-n');
    $('#main_online-shelude_table' + num).addClass('active')
    $('#main_online-shelude_top_btn' + num).addClass('active-btn')
  });

  //основное меню
  $('.header_menu').click(function () {
    $('.header_menu-r').addClass('active');
    $('.window-visible').addClass('active');
    $('.page').addClass('active');
  })

  $('.close-menu').click(function () {

    $('.window-visible').removeClass('active');
    $('.header_menu-r').removeClass('active');
    $('.page').removeClass('active');
  })

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



//всплывающее меню на внутренних страницах

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

//якоря на странице истории

// $(".about-history_date").on("click", "a", function (event) {
  
//   event.preventDefault();
// jQuery(window).scroll(function () {
//   var $article = $('.about-history_subtitle');
//   $article.each(function (i, el) {
//     var top = $(el).offset().top - 100;
//     var bottom = top + $(el).height();
//     var scroll = $(window).scrollTop();
//     var id = $(el).attr('id');
//     if (scroll > top && scroll < bottom) {
//       $('a.about-history_date_link--active').removeClass('about-history_date_link--active');
//       $('a[href="#' + id + '"]').addClass('about-history_date_link--active');

//     }
//   })

//   // исключаем стандартную реакцию браузера

//    //получем идентификатор блока из атрибута href
//    var id = $(this).attr('href'),
 
//      // находим высоту, на которой расположен блок
//      top = $(id).offset().top;
 
//    // анимируем переход к блоку, время: 800 мс
//    $('body,html').animate({ scrollTop: top }, 800);
//  });
// });

 

  //галерея
  $('.fancybox-img').fancybox();

  //календарь на сезонном расписании
  $('#inner_top_calendar').datepicker({
    minDate: new Date()
  })



//настройка карты 

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [52.698286, 39.524596],
    zoom: 13,
  }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #3980D9; font-weight: bold; position: absolute; right: -100px; max-width: 100px; top: -15px;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([52.698286, 39.524596], {
      hintContent: 'Собственный значок метки с контентом',
      balloonContent: 'А эта — новогодняя',
      iconContent: 'Липецк, аэропорт, ОГКП'

    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: '../img/map-icon.png',
      iconImageSize: [32, 38],
      iconImageOffset: [-20, -15],
      iconContentOffset: [15, 15],
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);
}
