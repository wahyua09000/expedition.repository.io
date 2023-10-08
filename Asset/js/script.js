let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-500px";
  }
  prevScrollpos = currentScrollpos;
};

const testiContainer = document.querySelectorAll(".testi-card");
const btnLeft = document.querySelectorAll(".left");
const btnRight = document.querySelectorAll(".right");

testiContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  btnRight[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  btnLeft[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
