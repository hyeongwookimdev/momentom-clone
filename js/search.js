let searchInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-button");
const searchForm = document.querySelector("#main-screen__header__search");

function searchGoolge(event) {
  event.preventDefault();
  let url = `https://www.google.com/search?q=` + searchInput.value;
  window.open(url);
}
searchForm.addEventListener("submit", searchGoolge);
