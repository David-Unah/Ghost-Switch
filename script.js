const dropdownBtn = document.getElementById("dropbtn");
const dropdownMenu = document.getElementById("myDropdown");
const toggleArrow = document.getElementById("drop-arrow");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("drop-arrow");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

/* document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
}); */




// this is for the open and closing nav

function openNav() {
  document.getElementById("myOverlay").style.height = "100%";
}

function closeNav() {
  document.getElementById("myOverlay").style.height = "0";
}






/* Questions and Answers */


let answers = document.querySelectorAll(".faqboxes");
   answers.forEach((event) => {
      event.addEventListener('click', () => {
         if (event.classList.contains("active")) {
            event.classList.remove("active");
         } else {
            event.classList.add("active");
         }
      })
   })


   /* this is for the automatic slide show */

   let slideIndex = 0;

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
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }

showSlides();



 /* this is for the header manual slides */


 let slideNum = 1;
 headslides(slideNum);
 
 function plusSlides(n) {
     headslides(slideNum += n);
  /* if (slideNum = 1) {
        document.getElementsByClassName("left-arrow").style.opacity = 0.7;
     } */
 }
 
 function currentSlide(n) {
     headslides(slideNum = n);
 }
 
 function headslides(n) {
   let i;
   let slidesbox = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dots");
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









