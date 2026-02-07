document.getElementById("logo-img").addEventListener("mouseover", () => {
  document.getElementById("logo-img").setAttribute("src","/rustyrackdemo/global-source/rustyDeerWithEye.png")
});
document.getElementById("logo-img").addEventListener("mouseout", () => {
  document.getElementById("logo-img").setAttribute("src","/rustyrackdemo/global-source/rustyDeerNoEye.png")
});