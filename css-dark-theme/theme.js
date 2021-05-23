let themeButton = document.getElementById("switch-theme");
let themeIcon = document.getElementById("switch-theme-icon");
let isDark = false;

themeButton.onclick = switchTheme;

function switchTheme() {
  if (!isDark) {
    document.body.classList.add("dark-theme");
    themeIcon.src = "./images/sun.svg";
  } else {
    document.body.classList.remove("dark-theme");
    themeIcon.src = "./images/moon.svg";
  }
  isDark = !isDark;
}
