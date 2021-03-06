
//настройки слайдеров на главной
$(document).ready(function () {
    $('.main_slider-promo_slider-content').slick({
        dots: true,
        аccessibility: false,
        arrows: true,
        fade: true,
        prevArrow: $('.main_slider-promo-prev'),
        nextArrow: $('.main_slider-promo-next'),
        appendDots: $('.main_slider-promo_slider-dots')
    });

    $('.main_advatages_slider').slick({
        dots: true,
        аccessibility: false,
        arrows: true,
        fade: true,
        prevArrow: $('.main_advatages_slider-prev'),
        nextArrow: $('.main_advatages_slider-next'),
        appendDots: $('.main_advatages_slider_dots')
    });


    $('.tabs_dots li').click(function (event) {
        $('.dots-content').removeClass('active');
        $('.tabs_dots li').removeClass('active');
        var num = $(this).attr('data-n');
        $('.dots-content' + num).addClass('active');
        $(this).addClass('active');
    });

    setTimeout(() => { $('.main_advatages_slider-wr').css({"display":"none"}) }, 1000);

    $('.advantages-dots li').click(function (event) {
        $('.main_advatages_slider-wr').removeClass('active');
        $('.advantages-dots li').removeClass('active');
        var num = $(this).attr('data-n');
        $('.main_advatages_slider-wr' + num).addClass('active');
        $(this).addClass('active');
    });

    if ($('div').is("#contacts-map")) {
        ymaps.ready(init);
        function init() {
          var myMap = new ymaps.Map("contacts-map", {
            center: [51.717608, 39.181782],
            zoom: 17,
          }),
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div></div>'
            ),
            myPlacemarkWithContent = new ymaps.Placemark([51.717608, 39.181782], {
    
            },
              {
                iconLayout: 'default#imageWithContent',
                iconImageHref: '../img/icon-map.svg',
                iconImageSize: [32, 38],
                iconImageOffset: [-20, -15],
                iconContentOffset: [15, 15],
                iconContentLayout: MyIconContentLayout
              }
            );
          myMap.geoObjects
            .add(myPlacemarkWithContent);
    
          myMap.setType('yandex#map');
        }
      }

      
  $('.mob-menu_sandwich').click(function() {
    $('.mob-menu_sandwich').toggleClass('active');
    $('.mob-menu_container').toggleClass('active');
    $('.wrap--big').toggleClass('overflow')
  })

// // вызов строки поиска 
//     $('.header_search').click(function (event) {
//         $('.main_search-wrap').addClass('active-search');
//         event.stopPropagation();
//     });
//     $(document).click(function (e) {
//         if ($(e.target).closest('.main_search-wrap').length) {
//             return;
//         }
//         $('.main_search-wrap').removeClass('active-search');
//     });
// //переключатель расписания полетов на главной
//     $('.main_online-shelude_top_btn').click(function (event) {
//         $('.main_online-shelude_table').removeClass('active');
//         $('.main_online-shelude_top_btn').removeClass('active-btn');
//         var num = $(this).attr('data-n');
//         $('#main_online-shelude_table' + num).addClass('active');
//         $('#main_online-shelude_top_btn' + num).addClass('active-btn');
//     });
// //основное меню
//     $('.header_menu').click(function () {
//         $('.header_menu-r').addClass('active');
//         $('.window-visible').addClass('active');
//         $('.page').addClass('active');
//     });

//     $('.close-menu').click(function () {

//         $('.window-visible').removeClass('active');
//         $('.header_menu-r').removeClass('active');
//         $('.page').removeClass('active');
//     });

//     $('.window-visible').click(function () {
//         $('.header_menu-r').removeClass('active');
//         $('.window-visible').removeClass('active');
//         $('.page').removeClass('active');
//         $('.header_menu-r').removeClass('active');
//     });

//     $('.content-slider').slick({
//         autoplay: true,
//         dots: true,
//         slidesToShow: 3,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 425,
//                 settings: {
//                     slidesToShow: 1
//                 }
//             }
//         ]
//     });
// //всплывающее меню на внутренних страницах


//     if ($(window).width() < 981) {
//         $('.inner_top_nav').click(function () {
//             $('.inner_top_nav').toggleClass('active');
//         });
//         $('.inner_top_nav_item_link').click(function (event) {
//             if (!$(event.currentTarget).$(".inner_top_nav").hasClass("active")) {
//                 event.preventDefault();
//             }
//         });

//         let nav = $(".inner_top_nav_item_link");
//         let index = 0;
//         let topPos = 15;
//         for (let i = 0; i < nav.length; i++) {
//             if ($(nav[i]).hasClass('inner_top_nav_item_link--active')) {
//                 index = i;
//             }
//         }
//         let buf = nav[0];
//         let active = nav[index];
//         nav[0] = active;
//         nav[index] = buf;
//         $('.inner_top_nav').html(nav);

//         for (let a = 1; a < nav.length; a++) {
//             topPos = topPos + 40;
//             $(nav[a]).css({"top": topPos});
//         }



// //Список вакансий
//         $('.about-vacancy_nav_nav').click(function () {
//             $('.about-vacancy_nav_nav').toggleClass('active');
//         });
//         $('.about-vacancy_nav_item_link').click(function (event) {
//             if (!$(event.currentTarget).parent(".about-vacancy_nav_nav").hasClass("active")) {
//                 event.preventDefault();
//             }
//         });
//     }

//     var height = $('.about-history_nav-wr').height();
//     $('.about-history_content').css("height", height);
//     var anchor = $('.scroll-anchor').offset().top + 255;
//     $('.about-history_content').scroll(function () {
//         var historyItems = $('.about-history_content_item');
//         historyItems.each(function (i, el) {

//             var top = $(el).offset().top;
//             // + $('.about-history_content').position().top;
//             var bottom = top + $(el).height();
//             //

//             var id = $(el).attr('id');
//             if (top < anchor && anchor > bottom) {
//                 $('.about-history_date_link--active').removeClass('about-history_date_link--active');
//                 $('.about-history_date_link[href="#' + id + '"]').addClass('about-history_date_link--active');
//             }
//         });
//     });
//     $(".about-history_date").on("click", ".about-history_date_link", function (event) {
// // исключаем стандартную реакцию браузера
//         event.preventDefault();
//         // получем идентификатор блока из атрибута href
//         var id = $(this).attr('href');
//         // находим высоту, на которой расположен блок
//         let top = $(id).position().top;
//         var scroll = $('.about-history_content').scrollTop();
//         var buf = top + scroll;
//         // анимируем переход к блоку, время: 800 мс
//         $(".about-history_content").animate({scrollTop: buf}, 800);
//     });
//     $(window).scroll(function () {

//         var target = $(this).scrollTop();
//         if (target > 100) {
//             $('.header').addClass('--fixed');
//         } else {
//             $('.header').removeClass('--fixed');
//         }
//     });
// //якоря на странице истории
//     if ($('div').is(".about-history_content")) {
//         var height = $('.about-history_nav-wr').height();
//         $('.about-history_content').css("height", height);
//         var anchor = $('.scroll-anchor').offset().top + 150;
//         $('.about-history_content').scroll(function () {
//             var historyItems = $('.about-history_content_item');
//             historyItems.each(function (i, el) {

//                 var top = $(el).offset().top;
//                 // + $('.about-history_content').position().top;
//                 var bottom = top + $(el).height();
//                 //

//                 var id = $(el).attr('id');
//                 if (top < anchor && anchor > bottom) {
//                     $('.about-history_date_link--active').removeClass('about-history_date_link--active');
//                     $('.about-history_date_link[href="#' + id + '"]').addClass('about-history_date_link--active');
//                 }
//             });
//         });
//         $(".about-history_date").on("click", ".about-history_date_link", function (event) {
// // исключаем стандартную реакцию браузера
//             event.preventDefault();
//             // получем идентификатор блока из атрибута href
//             var id = $(this).attr('href');
//             // находим высоту, на которой расположен блок
//             let top = $(id).position().top;
//             var scroll = $('.about-history_content').scrollTop();
//             var buf = top + scroll;
//             // анимируем переход к блоку, время: 800 мс
//             $(".about-history_content").animate({scrollTop: buf}, 800);
//         });
//     }

// //галерея
//     if ($('a').is(".fancybox-img")) {
//         $('.fancybox-img').fancybox();
//     }


// //календарь на сезонном расписании
//     if ($('input').is("#inner_top_calendar")) {
//         $('#inner_top_calendar').datepicker({
//             minDate: new Date()
//         });
//     }

// //вкладки сезонного расписания
//     $('.seasonal_sch-btn').click(function (event) {
//         var num = $(this).attr('data-n');
//         $('.seasonal_schedule_table-wrap').removeClass('active');
//         $('.seasonal_sch-btn').removeClass('active-btn');
//         $('#seasonal_schedule_table-wr' + num).addClass('active');
//         $('.seasonal_sch-btn' + num).addClass('active-btn');
//     });
// //настройка карты 
//     if ($('div').is("#map")) {
//         ymaps.ready(init);
//         function init() {
//             var myMap = new ymaps.Map("map", {
//                 center: [52.698286, 39.524596],
//                 zoom: 13,
//             }),
//                     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//                             '<div style="color: #3980D9; font-weight: bold; position: absolute; right: -100px; max-width: 100px; top: -15px;">$[properties.iconContent]</div>'
//                             ),
//                     myPlacemarkWithContent = new ymaps.Placemark([52.698286, 39.524596], {
//                         iconContent: 'Липецк, аэропорт, ОГКП'

//                     }, {
//                         iconLayout: 'default#imageWithContent',
//                         iconImageHref: '../img/map-icon.png',
//                         iconImageSize: [32, 38],
//                         iconImageOffset: [-20, -15],
//                         iconContentOffset: [15, 15],
//                         iconContentLayout: MyIconContentLayout
//                     });
//             myMap.geoObjects
//                     .add(myPlacemarkWithContent);
//         }
//     }

//     if ($('div').is(".feedback-select_header")) {
//         let select = function () {
//             let selectHeader = $('.feedback-select_header');
//             let selectItem = $('.feedback-select_body_item');
//             selectHeader.click(function () {
//                 selectToggle();
//             });
//             selectItem.each(function () {
//                 $(this).click(function () {
//                     selectChoose(this);
//                 });
//             });
//             function selectToggle() {
//                 $('.contacts-feedback_form_theme').toggleClass('active');
//             }
//             function selectChoose(option) {
//                 let selectedText = $(option).text();
//                 $('.select__current').text(selectedText);
//                 selectToggle();
//             }
//         };
//         select();
//     }

});