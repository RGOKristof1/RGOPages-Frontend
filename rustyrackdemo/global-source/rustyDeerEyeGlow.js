document.getElementById("logo-img").addEventListener("mouseover", () => {
  console.log("mousover")
  document.getElementById("logo-img").setAttribute("src","https://rgopages.hu/rustyrackdemo/global-source/rustyDeerWithEye.png")
});
document.getElementById("logo-img").addEventListener("mouseout", () => {
  console.log("mousout")
  document.getElementById("logo-img").setAttribute("src","https://rgopages.hu/rustyrackdemo/global-source/rustyDeerNoEye.png")
});