
let list = []
function confirmAdd() {
  let name = document.getElementById("name").value
  let count = document.getElementById("count").value
  if (name != "") {
  list.push(`<li><p>${name} ${(count == 1) ? "" : `:${count}`}</p><button onclick="deleteThis(${list.length})">&#x2715;</button></li>`)
  console.log(list.length)
  }
  refresh()
}

function refresh() {
  let html = ""
  for (let i = 0; i < list.length; i++) {
    html += list[i]
  }
  document.getElementById("list").innerHTML = html
}

function deleteThis(index) {
  console.log("doing some")
  console.log(index)
  list.splice(index, 1);
  refresh()
}

function plusOne() {
  document.getElementById("count").value = (Number(document.getElementById("count").value) + 1)
}
function minusOne() {
  document.getElementById("count").value = (Number(document.getElementById("count").value) - 1)
}
