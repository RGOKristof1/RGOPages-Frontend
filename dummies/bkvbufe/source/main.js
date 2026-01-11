let napok = ["h","k","s","c","p"]
for (let index = 0; index < napok.length; index++) {
  if (localStorage.getItem(napok[index]) == "lesz") {
  document.getElementById(napok[index]).innerHTML = `<button class="leir" onclick="nemLeszek('${napok[index]}')">Leiratkozas!</button>`
  }
}
function ittLeszek(nap) {
  console.log("in that bitch")
  document.getElementById(nap).innerHTML = `<button class="leir" onclick="nemLeszek('${nap}')">Leiratkozas!</button>`
  localStorage.setItem(nap,"lesz")
  
}

function nemLeszek(nap) {
  console.log("not in that bitch")
  document.getElementById(nap).innerHTML = `<button onclick="ittLeszek('${nap}')">Itt leszek!</button>`
  localStorage.setItem(nap,"nemlesz")
}
function clearStorage() {
  console.log(localStorage.length)
  localStorage.clear()
  console.log("cleared")
  console.log(localStorage.length)
}