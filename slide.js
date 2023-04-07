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
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



/* this is for the header manual slides */


let slideNum = 1;
headslides(slideNum);

function plusSlides(n) {
    headslides(slideNum += n);
}

function currentSlide(n) {
    headslides(slideNum = n);
}

function headslides(n) {
  let i;
  let slidesbox = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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