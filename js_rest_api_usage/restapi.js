const API_URL = "https://api.themoviedb.org/3/movie/popular";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "62fd93ece7aae0bbfcad9a06492c7dfb";

window.onload = init;

let movieList, list, pageP;
let currentPage = 1;

function init() {
  list = document.getElementsByClassName("list")[0];
  pageP = document.getElementById("page");

  loadMovieList();
}

function showMovie(movie) {
  let cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");

  let img = document.createElement("img");
  img.src = IMAGE_URL + movie.poster_path;
  cardDiv.appendChild(img);

  let infoDiv = document.createElement("div");
  infoDiv.setAttribute("class", "info");

  let h2 = document.createElement("h2");
  h2.innerHTML = movie.title;
  let p = document.createElement("p");
  p.innerHTML = movie.vote_average + ", " + movie.release_date;
  infoDiv.appendChild(h2);
  infoDiv.appendChild(p);

  cardDiv.appendChild(infoDiv);
  list.appendChild(cardDiv);
}

function nextPage() {
  currentPage++;
  loadMovieList();
}

function prevPage() {
  if (currentPage == 1) {
    return;
  }
  currentPage--;
  loadMovieList();
}

function loadMovieList() {
  let req = new XMLHttpRequest();
  req.open(
    "GET",
    API_URL + "?api_key=" + API_KEY + "&language=ru-RU&page=" + currentPage
  );

  //Обработчик ответа на запрос
  req.onreadystatechange = (evt) => {
    if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
      movieList = JSON.parse(req.responseText);
      list.innerHTML = "";
      for (let i = 0; i < movieList.results.length; i++) {
        showMovie(movieList.results[i]);
      }
      pageP.innerHTML = "Страница " + currentPage;
    }
  };

  req.send(null);
}
