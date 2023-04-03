let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}


/* this is for the manual navigation */

/* let slideIndexx = 1;
showSlides(slideIndexx);

function plusSlides(n) {
  showSlides(slideIndexx += n);
}

function currentSlide(n) {
  showSlides(slideIndexx = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexx = 1}    
  if (n < 1) {slideIndexx = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexx-1].style.display = "block";  
  dots[slideIndexx-1].className += " active";
} */

var slideIndexx = 1;
var t;

showSlides(slideIndexx);

function plusSlides(n) {    
  slideIndexx = slideIndexx + n;
  clearTimeout(t);
  showSlides(slideIndexx);
  console.log(slideIndexx);
}

function currentSlide(n) {
  showSlides(slideIndexx = n);
}

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n == undefined) {
    n = ++slideIndexx;
  }

  if (n > slides.length) {
    slideIndexx = 1
  }

  if (n < 1) {
    slideIndexx = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexx - 1].style.display = "block";
  t = setTimeout(showSlides, 5000);
}
