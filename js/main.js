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

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});




// this is for the open and closing nav

function openNav() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeNav() {
  document.getElementById("myOverlay").style.display = "none";
}


// this is for the frequently asked question box

// this is for the first question

/* const questionBtn = document.getElementById("question");
const dropdownAnswers = document.getElementById("answer");
const image = document.getElementById("minuscircle");
const whiteImage = document.getElementById("plusimage")

const toggleAnswers = function () {
  dropdownAnswers.classList.toggle("drop");
  image.classList.toggle("drop");
  whiteImage.classList.toggle("undrop")
};

questionBtn.addEventListener("click", function (e) {
  toggleAnswers();
  ;
}) */


// this is the second question 




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


































// this is the trial for the class attributes



/* const image = document.getElementsByClassName("minus");
const plusImage = document.getElementsByClassName("plus")  */

/* const toggleAnswers = function () {
  const dropdownAnswers = document.getElementsByClassName("ans");
for (let i = 0; i < dropdownAnswers.length; i++) {
  dropdownAnswers[i].classList.toggle("drop");
}
  image.classList.toggle("drop");
  plusImage.classList.toggle("undrop")
};


const questionBtn = document.getElementsByClassName("quest");
for (let i = 0; i < questionBtn.length; i++) {
questionBtn[i].addEventListener("click", function (e) {
  e.stopPropagation();
  toggleAnswers();
})
} */


