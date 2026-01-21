document.getElementById("item").innerText = JSON.parse(localStorage.getItem(inner)) || ""
console.log(localStorage.getItem(inner))
document.getElementById("item").innerText += "hi"
localStorage.setItem(inner,JSON.stringify(document.getElementById("item").innerText))