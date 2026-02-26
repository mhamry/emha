const tombol = document.getElementById("btnOpen");
const landingTop = document.getElementById("landingTop");
const leftPanel = document.getElementById("leftPanel");
const rightPanel = document.getElementById("rightPanel");

tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");

  setTimeout(() => {
    rightPanel.style.overflowY = "auto";
  }, 2000);
});
