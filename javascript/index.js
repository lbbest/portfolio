/*NAV BAR JS*/

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

/*MODAL JS*/

const modal = document.getElementById("cv-modal");

const btn = document.getElementById("modal-btn");

const x = document.getElementById("x");
const close = document.getElementById("close");

btn.onclick = function () {
  modal.style.display = "block";
};

x.onclick = function () {
  modal.style.display = "none";
};

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
