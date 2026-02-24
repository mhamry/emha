const tombol = document.getElementById("btnOpen");
const landingTop = document.getElementById("landingTop");
const rightPanel = document.getElementById("rightPanel");

tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");
  rightPanel.style.overflowY = "auto";
});
