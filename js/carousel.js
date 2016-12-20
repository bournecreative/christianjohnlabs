//set the current index to always start at 0
var current_slide = 0;
var current_selector = 0;
var timer = null;
//this will return an array of all the items identified with this class
var slides = $('.project_slide');
var selector_elements = $('.project_element');

//this should provide the count of the array "items"
var slideCount = slides.length-1;
var selectorCount = selector_elements.length-1;

//To change the slider content we need to update the display of our content
//Default is set to show first section of content
//Reassign current_index
//Update css for the frames

//click handler to update current slide index based on clicked element
function selectedFrame() {
  $('.project_selectors li').click(updateFrame);
}

//Sets the current slide to the index of the numerical correlation of the element clicked
function updateFrame(){
  var index = $('.project_selectors li').index(this);
  //if user clicks on selector and project is currently open, do not re-trigger animation
  if (index === current_selector){
    return;
  }
  switch (index){
    case 0:
      current_slide = index;
      current_selector = index;
      setFrame();
      break;
    case 1:
      current_slide = index;
      current_selector = index;
      setFrame();
      break;
    case 2:
      current_slide = index;
      current_selector = index;
      setFrame();
      break;
    case 3:
      current_slide = index;
      current_selector = index;
      setFrame();
      break;
    case 4:
      current_slide = index;
      current_selector = index;
      setFrame();
      break;
  }
}

//Updates the css accordingly for the current slide
function setFrame(){
  //Set slide the current_slide - according to numericial index
  var slide = slides.eq(current_slide);
  var selector = selector_elements.eq(current_selector);
  slides.hide();
  selector_elements.removeClass('currentSlide');
  slide.slideDown(600).css('display','block');
  selector.addClass('currentSlide');
}

function setSlideShow() {
  timer = setInterval(function () {
    current_slide += 1;
    current_selector += 1;
    if (current_slide > slideCount) {
      current_slide = 0;
      current_selector = 0
    }
    setFrame();
  }, 5000);
}

//Stops slide shown when user hovers over 'project_slide area', re-triggers when no longer hovered
$('.project_slide').hover(function() {
  clearInterval(timer);
},function(){
  setSlideShow();
});

$(document).ready(function () {
  selectedFrame();
  setSlideShow();
});
