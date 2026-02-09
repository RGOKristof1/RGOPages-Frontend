document.getElementById("logo-img").addEventListener("mouseover", () => {
  document.getElementById("logo-img").setAttribute("src","/rustyrackdemo/rusty-global-source/images/rustyDeerWithEye.webp")
});
document.getElementById("logo-img").addEventListener("mouseout", () => {
  document.getElementById("logo-img").setAttribute("src","/rustyrackdemo/rusty-global-source/images/rustyDeerNoEye.webp")
});