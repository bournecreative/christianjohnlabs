$(document).ready(function () {
  selectedFrame();
});

//set the current index to always start at 0
var current_slide = 0;

//this will return an array of all the items identified with this class
var slides = $('.project_slide');

//this should provide the count of the array "items"
var slideCount = slides.length-1;

//To change the slider content we need to update the display of our content
//Default is set to show first section of content
//Reassign current_index
//Update css for the frames

//click handler to update current slide index based on clicked element
function selectedFrame() {
  $('#projects li').click(updateFrame);
}

//Sets the current slide to the index of the numerical correlation of the element clicked
function updateFrame(){
  var index = $('#projects li').index(this);
  switch (index){
    case 0:
      current_slide = index;
      setFrame();
      break;
    case 1:
      current_slide = index;
      setFrame();
      break;
    case 2:
      current_slide = index;
      setFrame();
      break;
    case 3:
      current_slide = index;
      setFrame();
      break;
  }
}

//Updates the css accordingly for the current slide
function setFrame(){
  //Set slide the current_slide - according to numericial index
  var slide = slides.eq(current_slide);
  slides.hide();
  slide.css('display','inline-block');
}





