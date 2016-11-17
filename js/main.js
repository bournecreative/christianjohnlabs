$(document).ready(function(){
  navScroller();
  scrollPointer();
  fadeCover();
});

function navScroller(){
  $(window).scroll(function(){
    if($(window).scrollTop()>=100){
      //resizes navigation height
      $('.navigation').addClass('scrolled');
      //updates line height of navigation lines to maintain vertical centered
      $('.navLinks').addClass('navLinks_scrolled');
      $('.brand_name').addClass('brand_name_scrolled');
    }else{
      //resizes navigation height
      $('.navigation').removeClass('scrolled');
      //updates line height of navigation lines to maintain vertical centered
      $('.navLinks').removeClass('navLinks_scrolled');
      $('.brand_name').removeClass('brand_name_scrolled');
    }
  })
}

function scrollPointer() {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
      $('.fa-chevron-down').fadeOut();
      console.log('scroll happened');
    }else{
      $('.fa-chevron-down').fadeIn();
    }
  })
}

function fadeCover() {
  $('.cover').mouseover(function () {
    $(this).fadeOut();
  }).mouseout(function(){
    $(this).fadeIn(5000);
  })
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

