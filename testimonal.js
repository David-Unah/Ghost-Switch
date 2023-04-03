let slideIndexx = 1;
showTestSlides(slideIndexx);

function plusSlides(n) {
  showTestSlides(slideIndexx += n);
}

function currentSlide(n) {
  showTestSlides(slideIndexx = n);
}

function showTestSlides(n) {
  let i;
  let slidesbox = document.getElementsByClassName("each-testimony");
  let dots = document.getElementsByClassName("color-dots");
  if (n > slidesbox.length) {slideIndexx = 1}    
  if (n < 1) {slideIndexx = slidesbox.length}
  for (i = 0; i < slidesbox.length; i++) {
    slidesbox[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesbox[slideIndexx-1].style.display = "block";  
  dots[slideIndexx-1].className += " active";

}