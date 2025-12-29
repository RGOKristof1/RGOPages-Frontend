const form = document.getElementById("search-form");
const input = document.getElementById("search-box");

function doSearch() {
  let szoveg = document.getElementById('search-box').value
  alert(szoveg);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  doSearch();
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    form.requestSubmit();
  }
});
