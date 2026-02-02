document.getElementById("logo").addEventListener("mouseover", () => {
  document.getElementById("logo").setAttribute("src","/rustyrack/global-source/rustyDeerWithEye.png")
});
document.getElementById("logo").addEventListener("mouseout", () => {
  document.getElementById("logo").setAttribute("src","/rustyrack/global-source/rustyDeerNoEye.png")
});