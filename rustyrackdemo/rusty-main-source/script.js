let language = localStorage.getItem("lang") || "hu";

function toggleLanguage() {
  if (language == "en") {
    language = "hu"
    localStorage.setItem("lang","hu")
    refreshPageLanguage()
  } else if (language == "hu") {
    language = "en"
    localStorage.setItem("lang","en")
    refreshPageLanguage()
  }
}

function refreshPageLanguage(){
  if (language == "hu") {
  document.getElementById("lang-img").setAttribute("src","global-source/american-flag.webp")
  document.getElementById("lang-text").innerText = "EN"
  document.getElementById("etlap-button").innerText = "Etlap"
  document.getElementById("rendelj-text").innerText = "Rendelj!"
  document.getElementById("kostoldMeg-text").innerText = "Kostold Meg!"
  document.getElementById("rendelj-p").innerText = "Rendelj a woltrol, ugyan olyan frissen kapod!"
  document.getElementById("bbq-p").innerText = "Ha szombat, akkor oldalas a Rusty Rack-ben!"
  document.getElementById("kostoldMeg-p").innerText = "Kostold meg ma az extra sajtos pikans cheddar jalapenos burgerunket!"
  document.getElementById("title").innerText = "Fooldal"
  console.log("set to hungarian")
  } else if (language == "en") {
  document.getElementById("lang-img").setAttribute("src","global-source/hungarian-flag.webp")
  document.getElementById("lang-text").innerText = "HU"
  document.getElementById("etlap-button").innerText = "Menu"
  document.getElementById("rendelj-text").innerText = "Order to Delivery!"
  document.getElementById("kostoldMeg-text").innerText = "Give it a try!"
  document.getElementById("rendelj-p").innerText = "Order from Wolt, you get it just as fresh!"
  document.getElementById("bbq-p").innerText = "If it is Saturday, then it is ribs at Rusty Rack!"
  document.getElementById("kostoldMeg-p").innerText = "Taste our extra cheesy spicy cheddar jalapeno burger today!"
  document.getElementById("title").innerText = "Home"
  console.log("set to english")
  }
}

refreshPageLanguage()


