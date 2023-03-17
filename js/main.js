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