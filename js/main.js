// shrinks and expands the navigation bar and contained elements based on scroll position
function navScroller(){
  $(window).scroll(function(){
    if($(window).scrollTop()>=100){
      //resizes navigation height
      $('.navigation').addClass('scrolled');
      //updates line height of navigation lines to maintain vertical centered
      $('.navLinks').addClass('navLinks_scrolled');
      $('.brand_text').addClass('brand_text_scrolled');
    }else{
      //resizes navigation height
      $('.navigation').removeClass('scrolled');
      //updates line height of navigation lines to maintain vertical centered
      $('.navLinks').removeClass('navLinks_scrolled');
      $('.brand_text').removeClass('brand_text_scrolled');
    }
  })
}

// animate icons to scale/zoom in/out based on scroll position
function scrollAnimation(){
  var whoText = $('#who').offset().top;
  $(window).scroll(function(){
    if($(window).scrollTop()>whoText){
      $('.skill_1, .skill_2, .skill_3, .skill_4, .skill_5, .skill_6, .skill_7').addClass('scale_object');
    }else{
      $('.skill_1, .skill_2, .skill_3, .skill_4, .skill_5, .skill_6, .skill_7').removeClass('scale_object');
    }
  })
}

//highlight navigation active page link based on scroll position
function navHighLighter(){
  var who = $('#who').offset().top;
  var what = $('#what').offset().top;
  var projects = $('#projects').offset().top;
  var connect = $('#connect').offset().top;
  
  $(window).on('scroll', function(){
    if($(window).scrollTop()>=who-50 && $(window).scrollTop()<what-50) {
      $('.who').addClass('nav_link_highlight');
    }else{
      $('.who').removeClass('nav_link_highlight');
    }
    if($(window).scrollTop()>=what-50 && $(window).scrollTop()<projects-50) {
      $('.what').addClass('nav_link_highlight');
    }else{
      $('.what').removeClass('nav_link_highlight');
    }
    if($(window).scrollTop()>=projects-50 && $(window).scrollTop()<connect-100) {
      $('.projects').addClass('nav_link_highlight');
    }else{
      $('.projects').removeClass('nav_link_highlight');
    }
    if($(window).scrollTop()>connect-100) {
      $('.connect').addClass('nav_link_highlight');
    }else{
      $('.connect').removeClass('nav_link_highlight');
    }
  })
}

//animation on welcome page indicating that user should scroll down
function scrollPointer() {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
      $('.fa-chevron-down').fadeOut();
      // console.log('scroll happened');
    }else{
      $('.fa-chevron-down').fadeIn();
    }
  })
}

//fades in/out the white layer over the images where hovered on
function fadeCover() {
  $('.cover').mouseenter(function () {
    $(this).fadeOut();
  }).mouseout(function(){
    $(this).fadeIn();
  })
}

// functionality for the scroll effect across our single page app
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Opens an overlay menu that contains resume
function openOverlay(){
  $('.resume_link').click(function(){
    $('.overlay').css("width","100%");
  })
}

//Closes an overlay menu that contains resume
function closeOverlay(){
  $('.close_btn').click(function(){
    $('.overlay').css("width","0");
  })
}


//ready this functions on dom load
$(document).ready(function(){
  navScroller();
  scrollPointer();
  fadeCover();
  scrollAnimation();
  navHighLighter();
  openOverlay();
  closeOverlay();
});