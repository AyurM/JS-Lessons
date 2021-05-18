let h1 = document.getElementsByTagName("h1")[0];
let buttonLink = document.getElementsByClassName("button-link")[0];
let bird1 = document.getElementById("bird1");
let forest1 = document.getElementById("forest1");
let forest2 = document.getElementById("forest2");
let rocks = document.getElementById("rocks");
let water = document.getElementById("water");

window.addEventListener("scroll", function () {
  let scrollValue = window.scrollY;

  h1.style.top = 12 - scrollValue * 0.05 + "%";
  bird1.style.top = 15 - scrollValue * 0.06 + "%";
  bird1.style.right = 30 - scrollValue * 0.04 + "%";
  forest1.style.bottom = -scrollValue * 0.05 + "%";
  forest2.style.bottom = scrollValue * 0.02 + "%";
  buttonLink.style.marginTop = scrollValue * 0.03 + "%";
});
