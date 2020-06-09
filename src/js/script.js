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
  
  $('.content-slider').slick ({
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


// ymaps.ready(function () {
//   var myMap = new ymaps.Map('map', {
//           center: [52.698124, 39.524588],
//           zoom: 9
//       }, {
//           searchControlProvider: 'yandex#search'
//       }),

//       // Создаём макет содержимого.
//       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//           '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//       ),

//       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//           hintContent: 'Собственный значок метки',
//           balloonContent: 'Это красивая метка'
//       }, {
//           // Опции.
//           // Необходимо указать данный тип макета.
//           iconLayout: 'default#image',
//           // Своё изображение иконки метки.
//           iconImageHref: '../img/map-icon.svg',
//           // Размеры метки.
//           iconImageSize: [30, 42],
//           // Смещение левого верхнего угла иконки относительно
//           // её "ножки" (точки привязки).
//           // iconImageOffset: [-5, -38]
//       });
//   myMap.geoObjects
//       .add(myPlacemark)
// });

$('.inform_nav').click(function () {
  $('.inform_nav').toggleClass('active')
})
$('.inform_nav_item').click(function (event) {
  if(!$(event.currentTarget).parent(".inform_nav").hasClass("active")){
     event.preventDefault();
  }
})


// $('.inner_top_nav').click(function () {
//   $('.inner_top_nav').toggleClass('active')
// })
// $('.inner_top_nav_item').click(function (event) {
//   if(!$(event.currentTarget).parent(".inner_top_nav").hasClass("active")){
//      event.preventDefault();
//   }
// })