const tombol = document.getElementById("btnOpen");
const landingTop = document.getElementById("landingTop");
const rightPanel = document.getElementById("rightPanel");
const leftPanel = document.getElementById("leftPanel");
const scrollDown = document.querySelector(".scroll-down");
tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");
  rightPanel.style.overflowY = "auto";
  scrollDown.classList.add("muncul");

  leftPanel.addEventListener("wheel", function (e) {
    rightPanel.scrollTop += e.deltaY;

    e.preventDefault();
  });
});
