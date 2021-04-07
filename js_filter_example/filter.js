const movies = [
  {
    name: "Зеленая миля",
    category: "Драма",
    image: "./images/green_mile.webp",
    year: 1999,
  },
  {
    name: "Побег из Шоушэнка",
    category: "Драма",
    image: "./images/showshank.webp",
    year: 1994,
  },
  {
    name: "Назад в будущее",
    category: "Комедия",
    image: "./images/back_to_the_future.webp",
    year: 1985,
  },
  {
    name: "Один дома",
    category: "Комедия",
    image: "./images/home_alone.webp",
    year: 1990,
  },
  {
    name: "Начало",
    category: "Боевик",
    image: "./images/inception.webp",
    year: 2010,
  },
  {
    name: "Матрица",
    category: "Боевик",
    image: "./images/matrix.webp",
    year: 1999,
  },
];

window.onload = init;
let filter = "";
let list;

function init() {
  list = document.getElementsByClassName("list")[0];

  for (let i = 0; i < movies.length; i++) {
    showMovie(movies[i]);
  }
}

function showMovie(movie) {
  let cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");

  let img = document.createElement("img");
  img.src = movie.image;
  cardDiv.appendChild(img);

  let infoDiv = document.createElement("div");
  infoDiv.setAttribute("class", "info");

  let h2 = document.createElement("h2");
  h2.innerHTML = movie.name;
  let p = document.createElement("p");
  p.innerHTML = movie.category + ", " + movie.year;
  infoDiv.appendChild(h2);
  infoDiv.appendChild(p);

  cardDiv.appendChild(infoDiv);
  list.appendChild(cardDiv);
}

function filterMovies(selectedGenre) {
  filter = selectedGenre;
  let filteredMovies = [];
  if (filter == "Все") {
    filteredMovies = movies;
  } else {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].category == filter) {
        filteredMovies.push(movies[i]);
      }
    }
  }

  list.innerHTML = "";
  for (let i = 0; i < filteredMovies.length; i++) {
    showMovie(filteredMovies[i]);
  }
}
