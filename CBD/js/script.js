$(function () {
    let headerHeight = $('header').outerHeight();
    $('#menu, #mmenu, .intro-description').on('click', 'a', function (event) {
        event.preventDefault();
        $('#menu').find('.active').removeClass('active');
        $(this).addClass('active');
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $( "#burger-menu" ).prop( "checked", false );

        $('body, html').animate({ scrollTop: top - headerHeight - 20}, 1700);
    });

    $('.intro-arrow').on('click', function (event) {
        event.preventDefault();

        let id = $(this).attr('href');
        let top = $(id).offset().top;

        $('body, html').animate({ scrollTop: top}, 1700);
    });

    $('.move-to').on('click', function () {
      let id = $(this).attr('data-link');
      let top = $(id).offset().top;
      $('body, html').animate({ scrollTop: top - headerHeight - 20}, 1700);
    });
});


let sections = $('section'),
nav = $('nav'), 
nav_height = $('header').outerHeight();

$(document).scroll(function(){

  if ($(window).scrollTop() > 100) {
      $(".header").addClass("header_scroll");
  } else {
      $(".header").removeClass("header_scroll");
  }

  $(".need-viewed").each(function() {
    if (isScrolledIntoView($(this))) {
      $(this).addClass("viewed");
    } 
  });

  if (window.pageYOffset > 500) {
    $(".up-button").show()
  } else {
    $(".up-button").hide()
  }

  let cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    let top = $(this).offset().top - nav_height-100,
        bottom = top + $(this).outerHeight()
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });

});

function isScrolledIntoView(elem) {
  let docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();

  let elemTop = $(elem).offset().top;
  let elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

 $(document).ready(function() {

    $(".up-button").on("click", function() {
      $('html, body').animate({scrollTop:0},500);
    });
    

    $('.tab-link').on('click', function(e){
      let contentId = $(this).attr('data-id');
      $(this).parents('.about-items').find('.active').removeClass('active');
      $(this).addClass('active');
      $('.tab-content').fadeOut(100);
      $("[data-content-id='" + contentId + "']").fadeIn(150).css('display', 'flex').addClass('active');
    })

$('.products-slider').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      appendArrows: $('.products-arrows'),
      prevArrow: '<button id="prev" type="button" class="prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="20" viewBox="0 0 40 20"><path id="Left" class="cls-1" d="M0.274,9.37h0L9.363,0.33a0.912,0.912,0,0,1,1.281-.1,0.9,0.9,0,0,1,.1,1.275,0.871,0.871,0,0,1-.1.1L3.11,9.108H39.091a0.9,0.9,0,1,1,0,1.808H3.11l7.534,7.494a0.9,0.9,0,0,1,.1,1.274,0.912,0.912,0,0,1-1.281.1,0.889,0.889,0,0,1-.1-0.1l-9.088-9.04A0.9,0.9,0,0,1,.274,9.37Z"/></svg></button>',
      nextArrow: '<button id="next" type="button" class="next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="22" viewBox="0 0 40 22"><path id="Right" class="cls-1" d="M39.726,10.352h0L30.637,1.269a0.909,0.909,0,1,0-1.282,1.281l7.534,7.539H0.909a0.908,0.908,0,1,0,0,1.816H36.89l-7.534,7.53a0.909,0.909,0,0,0,1.182,1.38,0.861,0.861,0,0,0,.1-0.1l9.089-9.082A0.908,0.908,0,0,0,39.726,10.352Z"/></svg></button>',
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  });

  $('.testimonials-slider').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      appendArrows: $('.testimonials-arrows'),
      prevArrow: '<button id="leftt" type="button" class="prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="20" viewBox="0 0 40 20"><path id="Lefft" class="cls-1" d="M0.274,9.37h0L9.363,0.33a0.912,0.912,0,0,1,1.281-.1,0.9,0.9,0,0,1,.1,1.275,0.871,0.871,0,0,1-.1.1L3.11,9.108H39.091a0.9,0.9,0,1,1,0,1.808H3.11l7.534,7.494a0.9,0.9,0,0,1,.1,1.274,0.912,0.912,0,0,1-1.281.1,0.889,0.889,0,0,1-.1-0.1l-9.088-9.04A0.9,0.9,0,0,1,.274,9.37Z"/></svg></button>',
      nextArrow: '<button id="rightt" type="button" class="next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="22" viewBox="0 0 40 22"><path id="Righht" class="cls-1" d="M39.726,10.352h0L30.637,1.269a0.909,0.909,0,1,0-1.282,1.281l7.534,7.539H0.909a0.908,0.908,0,1,0,0,1.816H36.89l-7.534,7.53a0.909,0.909,0,0,0,1.182,1.38,0.861,0.861,0,0,0,.1-0.1l9.089-9.082A0.908,0.908,0,0,0,39.726,10.352Z"/></svg></button>'
  });

  $('.faqs-item__expand').on('click', function(){
    let item = $(this);
    let faqItem = $(this).parents('.faqs-item');

    if ($('.expanded').length) {
      if (faqItem.hasClass('expanded')) { 
        $('.expanded').removeClass('expanded').find('p').slideUp('normal').removeClass('expand');
      } else {
        $('.expanded').removeClass('expanded').find('p').slideUp('normal').removeClass('expand');
        faqItem.addClass('expanded').find('p').slideDown('normal').addClass('expand');
      }
    } else {
      faqItem.addClass('expanded').find('p').slideDown('normal').addClass('expand');
    }

  });
  
  $('.showSearchForm').on('click', function(e){
    e.preventDefault();
    $('.search-form').toggleClass('active');
  });

  $('.showSearchForm, input[name=query], .search').on('click', function(e){
    e.stopPropagation();
  });

  $(document).on('click', function(e){
    $('.search-form').removeClass('active');
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27)  {
      $('.search-form').removeClass('active');
    }
  });

});