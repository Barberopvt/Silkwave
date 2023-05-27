// Show/hide dropdown on click
document.querySelectorAll('.dropdown').forEach(function(element) {
  element.addEventListener('click', function() {
    this.classList.toggle('active');
    var dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
});

// Hide dropdown on outside click
window.addEventListener('click', function(event) {
  var dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function(element) {
    if (!element.contains(event.target)) {
      element.classList.remove('active');
      var dropdownContent = element.querySelector('.dropdown-content');
      dropdownContent.style.display = 'none';
    }
  });
});
//product

// Animation for smooth scrolling
var carousel = document.querySelector('.product-carousel');
var scrollAmount = 0;
var scrollStep = 300;

function scrollLeft() {
  scrollAmount -= scrollStep;
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  carousel.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
}

function scrollRight() {
  scrollAmount += scrollStep;
  if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = carousel.scrollWidth - carousel.clientWidth;
  }
  carousel.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Add event listeners to scroll buttons
var scrollLeftBtn = document.querySelector('.scroll-left-btn');
var scrollRightBtn = document.querySelector('.scroll-right-btn');

scrollLeftBtn.addEventListener('click', scrollLeft);
scrollRightBtn.addEventListener('click', scrollRight);


var slider = document.querySelector('.slider');
var images = document.querySelectorAll('.slider-image');
var imageIndex = 0;
var imageWidth = images[0].clientWidth;

setInterval(nextSlide, 4000);

function nextSlide() {
  imageIndex++;
  if (imageIndex === images.length) {
    imageIndex = 0;
  }
  slider.style.transform = `translateX(${-imageWidth * imageIndex}px)`;
}
