let slideNum = 1;
headslides(slideNum);

function plusSlides(n) {
    headslides(slideIndexx += n);
}

function currentSlide(n) {
    headslides(slideNum = n);
}

function headslides(n) {
  let i;
  let slidesbox = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("color-dots");
  if (n > slidesbox.length) {slideNum = 1}    
  if (n < 1) {slideNum = slidesbox.length}
  for (i = 0; i < slidesbox.length; i++) {
    slidesbox[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesbox[slideNum-1].style.display = "block";  
  dots[slideNum-1].className += " active";

}