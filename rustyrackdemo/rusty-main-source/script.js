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
  document.getElementById("rendelj-text").innerText = "Rendelj online"
  document.getElementById("bbq-text").innerText = "BBQ Szombat"
  document.getElementById("kostoldMeg-text").innerText = "Kóstold meg"
  document.getElementById("rendelj-p").innerText = "Woltról rendelsz. Ugyanaz a friss íz érkezik."
  document.getElementById("bbq-p").innerText = "Szombaton az oldalas kerül a középpontba."
  document.getElementById("kostoldMeg-p").innerText = "Extra sajtos, pikáns cheddar jalapeño burger."
  document.getElementById("h2kosti").innerText = "Kóstold meg!"
  document.getElementById("drinks").innerText = "Innivalok"
  document.getElementById("title").innerText = "Fooldal"
  console.log("set to hungarian")
  } else if (language == "en") {
  document.getElementById("lang-img").setAttribute("src","global-source/hungarian-flag.webp")
  document.getElementById("lang-text").innerText = "HU"
  document.getElementById("etlap-button").innerText = "Menu"
  document.getElementById("rendelj-text").innerText = "Order for delivery"
  document.getElementById("bbq-text").innerText = "BBQ Saturday"
  document.getElementById("kostoldMeg-text").innerText = "Give it a try"
  document.getElementById("rendelj-p").innerText = "Order from Wolt. Fresh taste arrives to you."
  document.getElementById("bbq-p").innerText = "Saturday means ribs at Rusty Rack."
  document.getElementById("kostoldMeg-p").innerText = "Extra cheesy spicy cheddar jalapeno burger. Try it today."
  document.getElementById("h2kosti").innerText = "Try it!"
  document.getElementById("drinks").innerText = "Drinks"
  document.getElementById("title").innerText = "Home"
  console.log("set to english")
  }
}


refreshPageLanguage()


