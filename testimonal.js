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



/* automatic testimony slides */

let slideIndex1 = 0;

   function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("each-testimony");
    let dots = document.getElementsByClassName("color-dots");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "block";  
    dots[slideIndex1-1].className += " active";
    setTimeout(showSlides1, 5000); // Change image every 2 seconds
  }

showSlides1();