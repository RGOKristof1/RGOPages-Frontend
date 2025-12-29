const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");


function search() {
  const szoveg = input.value;
  output.textContent = szoveg;
  input.blur();
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBox.addEventListener("keyup", (e) => {
});