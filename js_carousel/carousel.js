window.onload = init;
let buttonLeft, buttonRight, h2, mainImg, dotContainer;
let dots = [];

let index = 0;

const slides = [
  {
    name: "Mexico",
    image: "./images/cancun_mexico.jpg",
  },
  {
    name: "Thailand",
    image: "./images/thailand.jpg",
  },
  {
    name: "Maldives",
    image: "./images/maldives.jpg",
  },
  {
    name: "Vietnam",
    image: "./images/vietnam.jpg",
  },
];

function init() {
  buttonLeft = document.getElementById("left-arrow");
  buttonRight = document.getElementById("right-arrow");
  buttonRight.onclick = nextSlide;
  buttonLeft.onclick = prevSlide;

  mainImg = document.getElementById("main-img");
  h2 = document.getElementsByTagName("h2")[0];

  dotContainer = document.getElementsByClassName("dots")[0];
  createDots();

  showSlide(slides[index]);
}

function showSlide(slide) {
  h2.innerHTML = slide.name;
  mainImg.src = slide.image;
  activateDot();
}

function nextSlide() {
  deactivateDot();
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(slides[index]);
}

function prevSlide() {
  deactivateDot();
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(slides[index]);
}

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    let dotDiv = document.createElement("div");
    dotDiv.setAttribute("class", "dot");
    dotDiv.setAttribute("id", "dot-" + i);
    dots.push(dotDiv);
    dotContainer.appendChild(dotDiv);
  }
}

function deactivateDot() {
  dots[index].style.background = "black";
}

function activateDot() {
  dots[index].style.background = "white";
}
