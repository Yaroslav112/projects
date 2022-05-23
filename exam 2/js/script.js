  
$(function () {
  $("a.header-links").click(function () {
   let elementClick = $(this).attr("href")
   let destination = $(elementClick).offset().top;
   $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
   return false;
  });
});

$(function(){
  $('.slider-one').owlCarousel({
    items: 1,
    margin: 25,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
  });
  $('.slider-two').owlCarousel({
    items: 3,
    margin: 25,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
  });
});