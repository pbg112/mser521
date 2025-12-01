// sets the starting postion and space + width btwn
// each slide/image :) 
let currentPosition = 0;
const gap = 10;
const slideWidth = 400;
// selects all items in the carousel 
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;
 // moves images forward at the beginning 
function moveForward() {
  if (currentPosition >= totalSlides - 2) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  updateCarouselPosition();
}
 // moves images backward if at the end  
function moveBackward() {
  if (currentPosition <= 0) {
    currentPosition = totalSlides - 2;
  } else {
    // 
    currentPosition--;
  }
  updateCarouselPosition();
}
// 
function updateCarouselPosition() {
  const items = document.querySelectorAll('.carousel-item');
  const offset = (slideWidth + gap) * currentPosition;
// creates the slide/ carousel effect 
  for (const item of items) {
    item.style.transform = `translateX(-${offset}px)`;
  }
}
