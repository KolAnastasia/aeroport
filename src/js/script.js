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

  $('.header_search').click(function(event) {
    $('.main_search-wrap').addClass('active-search');
    event.stopPropagation();
  });

  $('.page_wrapper').click(function(){
    $('.main_search-wrap').removeClass('active-search')
  })

  $('.main_online-shelude_top_btn').click(function(event) {
    $('.main_online-shelude_top_btn').toggleClass('active-btn')
		$('.main_online-shelude_table').removeClass('active')
		var num = $(this).attr('data-n');
		$('#main_online-shelude_table'+num).addClass('active')
  });
  
  $('.header_menu').click(function() {
    $('.header_menu-r').toggleClass('active')
  })

  $('.close-menu').click(function() {
    $('.header_menu-r').removeClass('active')
  })
});
