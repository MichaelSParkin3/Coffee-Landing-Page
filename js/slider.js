//
//
// Slider . js
//
//

// const sliderFunc = () => {
var slider = document.querySelector('.slider'),
  sliderWidth = slider.offsetWidth,
  count = 1,
  items = document.querySelectorAll('.slide').length,
  slideList = document.querySelector('.slide-wrapper');

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

var prevSlide = function() {
  if (count > 1) {
    count = count - 2;
    slideList.style.left = '-' + count * sliderWidth + 'px';
    count++;
  } else if ((count = 1)) {
    count = items - 1;
    slideList.style.left = '-' + count * sliderWidth + 'px';
    count++;
  }
};

var nextSlide = function() {
  if (count < items) {
    slideList.style.left = '-' + count * sliderWidth + 'px';
    count++;
  } else if ((count = items)) {
    slideList.style.left = '0px';
    count = 1;
  }
};

setInterval(function() {
  nextSlide();
}, 4000);
//};

// window.onload = function() {
//   sliderFunc();
// };
