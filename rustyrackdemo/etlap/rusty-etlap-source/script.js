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
  document.getElementById("lang-img").setAttribute("src","/rustyrackdemo/rusty-global-source/images/american-flag.webp")
  document.getElementById("lang-text").innerText = "EN"
  document.getElementById("etlap-button").innerText = "Fooldal"
  document.getElementById("title").innerText = "Etlap"
  console.log("set to hungarian")
  } else if (language == "en") {
  document.getElementById("lang-img").setAttribute("src","/rustyrackdemo/rusty-global-source/images/hungarian-flag.webp")
  document.getElementById("lang-text").innerText = "HU"
  document.getElementById("etlap-button").innerText = "Home"
  document.getElementById("title").innerText = "Menu"
  console.log("set to english")
  }
}
refreshPageLanguage()


