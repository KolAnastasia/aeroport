import 'jquery'
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'
import './script.js';
import '../../node_modules/air-datepicker/dist/js/datepicker';

const fancybox = require("@fancyapps/fancybox");

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
  $('.inner_top_nav').click(function () {
    $('.inner_top_nav').toggleClass('active')
  })
  $('.inner_top_nav_item_link').click(function (event) {
    if (!$(event.currentTarget).$(".inner_top_nav").hasClass("active")) {
      event.preventDefault();
    }
  })

  $(document).ready(function () {
    let nav = $(".inner_top_nav_item_link");
    let index = 0;
    let topPos = 15;
    for (let i = 0; i < nav.length; i++) {
      if ($(nav[i]).hasClass('inner_top_nav_item_link--active')) {
        index = i;
      }
    }
    let buf = nav[0];
    let active = nav[index];


    nav[0] = active;
    nav[index] = buf;

    $('.inner_top_nav').html(nav)

    for (let a = 1; a < nav.length; a++) {
      topPos = topPos + 40;
      $(nav[a]).css({ "top": topPos });
    }



    //Список вакансий
    $('.about-vacancy_nav_nav').click(function () {
      $('.about-vacancy_nav_nav').toggleClass('active')
    })
    $('.about-vacancy_nav_item_link').click(function (event) {
      if (!$(event.currentTarget).parent(".about-vacancy_nav_nav").hasClass("active")) {
        event.preventDefault();
      }
    })
  });


}
//якоря на странице истории
$(document).ready(function () {
  var height = $('.about-history_nav-wr').height();
  $('.about-history_content').css("height", height);
  var anchor = $('.scroll-anchor').offset().top + 150;
  $('.about-history_content').scroll(function () {
    var historyItems = $('.about-history_content_item');
    historyItems.each(function (i, el) {

      var top = $(el).offset().top;
      // + $('.about-history_content').position().top;
      var bottom = top + $(el).height();
      //
     
      var id = $(el).attr('id');
      if (top < anchor && anchor > bottom) {
        $('.about-history_date_link--active').removeClass('about-history_date_link--active');
        $('.about-history_date_link[href="#' + id + '"]').addClass('about-history_date_link--active');
      }
    })
  });


  $(".about-history_date").on("click", ".about-history_date_link", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id = $(this).attr('href');

    // находим высоту, на которой расположен блок
    let top = $(id).position().top;
    var scroll = $('.about-history_content').scrollTop();
    var buf = top + scroll;
      // анимируем переход к блоку, время: 800 мс
      $(".about-history_content").animate({ scrollTop: buf }, 800);
  });
});



//галерея
if ($('a').is(".fancybox-img")) {
  $('.fancybox-img').fancybox();
}


//календарь на сезонном расписании
if ($('input').is("#inner_top_calendar")) {
  $('#inner_top_calendar').datepicker({
    minDate: new Date()
  })
}

//вкладки сезонного расписания
$('.seasonal_sch-btn').click(function (event) {
  var num = $(this).attr('data-n');
  $('.seasonal_schedule_table-wrap').removeClass('active')
  $('.seasonal_sch-btn').removeClass('active-btn')
  $('#seasonal_schedule_table-wr' + num).addClass('active')
  $('.seasonal_sch-btn' + num).addClass('active-btn')
});


//настройка карты 
if ($('div').is("#map")) {
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
}