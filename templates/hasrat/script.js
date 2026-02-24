const tombol = document.getElementById("btnOpen");
const rightPanel = document.getElementById("rightPanel");
const landingTop = document.getElementById("landingTop");

tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");
  rightPanel.style.overflow = "auto";
});
