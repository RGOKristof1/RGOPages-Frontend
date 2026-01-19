
let list = []
function confirmAdd() {
  hidePlusMinus()
  let name = document.getElementById("name").value
  let count = document.getElementById("count").value
  if (name != "") {
  list.push(`<li><p>${name} ${(count == 1) ? "" : `:${count}`}</p><button onclick="deleteThis(${list.length})">&#x2715;</button></li>`)
  console.log(list.length)
  }
  document.getElementById("name").value = ""
  document.getElementById("count").value = 1
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
  if (Number(document.getElementById("count").value) > 1)
  document.getElementById("count").value = (Number(document.getElementById("count").value) - 1)
}

function showPlusMinus() {
  if (document.getElementById("name").value != "") {
    document.getElementById("plus").classList.remove("hidden")
    document.getElementById("minus").classList.remove("hidden")
  } else {
    document.getElementById("plus").classList.add("hidden")
    document.getElementById("minus").classList.add("hidden")
  }
}
function hidePlusMinus() {
  document.getElementById("plus").classList.add("hidden")
  document.getElementById("minus").classList.add("hidden")
}