function scrollDown() {
  $('.js-scroll-down').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.js-section').offset().top
    },
    400);
  });
}

scrollDown();