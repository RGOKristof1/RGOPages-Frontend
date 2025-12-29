

function toggleMenu() {
  console.log(document.getElementById("other-button").classList.length)
  if (document.getElementById("other-button").classList.length == 0) {
    document.getElementById("menu-container").classList.remove('other-closed')
    document.getElementById("menu-container").classList.add('other-open')
    document.getElementById("other-button").classList.toggle("open")
  } else {
    document.getElementById("menu-container").classList.remove('other-open')
    document.getElementById("menu-container").classList.add('other-closed')
    document.getElementById("other-button").classList.toggle("open")
  }
  
  
  
}