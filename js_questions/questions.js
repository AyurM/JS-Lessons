window.onload = init;

let index = -1;
let arrowImages, answerDivs;

function init() {
  arrowImages = document.querySelectorAll("button img");
  answerDivs = document.querySelectorAll(".answer");
}

function onArrowClick(i) {
  if (index == i) {
    arrowImages[i].style.transform = "rotate(0deg)";
    answerDivs[i].style.display = "none";
    index = -1;
  } else {
    if (index != -1) {
      arrowImages[index].style.transform = "rotate(0deg)";
      answerDivs[i].style.display = "none";
    }

    index = i;
    arrowImages[i].style.transform = "rotate(180deg)";
    answerDivs[i].style.display = "block";
  }
}
