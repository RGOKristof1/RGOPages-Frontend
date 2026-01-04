let input = document.getElementById("inp");


function alertmaker() {
  let value = document.getElementById("inp").value;
  alert(value);
}

input.addEventListener("keyup", keyUp);
function keyUp() {
  let value = document.getElementById("inp").value;
  console.log(value);
}

function inputErase() {
  document.getElementById("inp").value = "";
}