const openBtn = document.getElementById("openBtn");
const landingTop = document.getElementById("landing-top");
const rightPanel = document.getElementById("rightPanel");
const leftPanel = document.getElementById("leftPanel");

openBtn.addEventListener("click", () => {
  // Hilangkan layar pembuka
  landingTop.classList.add("hide");

  // Aktifkan scroll panel kanan
  rightPanel.style.overflowY = "auto";

  // Aktifkan scroll body (mobile)
  document.body.style.overflow = "auto";
});

// Saat scroll di panel kiri
leftPanel.addEventListener("wheel", function (e) {
  // Arahkan scroll ke panel kanan
  rightPanel.scrollTop += e.deltaY;

  // Cegah panel kiri ikut scroll
  e.preventDefault();
});
