const form = document.getElementById("search-form");
const input = document.getElementById("search-box");
const output = document.getElementById("output");

function doSearch() {
  const szoveg = input.value;
  output.textContent = szoveg;   // biztonságosabb mint innerHTML
  input.blur();
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // maradhat
  doSearch();
});
