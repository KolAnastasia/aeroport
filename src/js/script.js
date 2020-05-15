$(document).ready(function () {
  $('.main-option_slider').slick({
    autoplay: true,
    dots: true,
    аccessibility: false,
    arrows: false,
    fade: true
  })

  $('.header_search').click(function(event) {
    $('.main_search-wrap').addClass('active-search');
    event.stopPropagation();
  });

  $('.page_wrapper').click(function(){
    $('.main_search-wrap').removeClass('active-search')
  })
});

