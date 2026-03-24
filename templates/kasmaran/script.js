const tombol = document.getElementById("btnOpen");
const landingTop = document.getElementById("landingTop");
const leftPanel = document.getElementById("leftPanel");
const rightPanel = document.getElementById("rightPanel");
const song = document.querySelector(".song");
const audioIcon = document.querySelector(".audio-icon");
const iconWrapper = document.querySelector(".icon-wrapper i");

tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");
  song.play();
  audioIcon.style.display = "flex";

  setTimeout(() => {
    rightPanel.style.overflowY = "auto";
  }, 1000);
});

//salin data
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const text = this.getAttribute("data-copy");
    navigator.clipboard.writeText(text).then(() => {
      this.innerHTML = '<i class="bi bi-check"></i> Tersalin';

      setTimeout(() => {
        this.innerHTML = '<i class="bi bi-copy me-1"></i>Salin';
      }, 4000);
    });
  });
});

// save the date
const saveBtn = document.getElementById("saveDate");

if (saveBtn) {
  const title = "Wedding Amri & Nikel";
  const startDate = "20261109T100000";
  const endDate = "20261109T180000";
  const details = "Acara pernikahan Amri dan Nikel";
  const location = "Jorong Tabing Pauh Agam, Sumatera Barat";

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

  saveBtn.href = url;
}

// audio
let isPlaying = true;
iconWrapper.addEventListener("click", function () {
  if (isPlaying) {
    song.pause();
    // song.volume(0.6);
    isPlaying = false;
    iconWrapper.classList.remove("bi-disc-fill");
    iconWrapper.classList.add("bi-pause-circle-fill");
  } else {
    song.play();
    isPlaying = true;
    iconWrapper.classList.add("bi-disc-fill");
    iconWrapper.classList.remove("bi-pause-circle-fill");
  }
});

//ambil nama tamu undangan data dari url
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("to") || "Tamu Undangan";
const namaElement = document.querySelector(".landing-top .undangan");
namaElement.textContent = `${nama}`;

//animasi fade groom bride

const images = document.querySelectorAll(".content img");
const listImage = ["image/1.png", "image/2.png", "image/3.png", "image/4.png"];

let index = 0;

function gantiImage() {
  images.forEach((img, i) => {
    img.src = listImage[(index + i) % listImage.length];
  });

  index = (index + 1) % listImage.length;
}

setInterval(gantiImage, 4000);

//animasi effect save date

const saveDate = document.querySelector(".save-date");
const listGambar = ["image/2.png", "image/2.png", "image/3.png", "image/4.png"];
let i = 0;

function changeImg() {
  saveDate.classList.add("fade-in");
  saveDate.classList.remove("fade-out");
  setTimeout(() => {
    saveDate.style.setProperty("--bg", `url(${listGambar[i]})`);
    saveDate.classList.remove("fade-in");
    saveDate.classList.add("fade-out");
    i = (i + 1) % listGambar.length;
  }, 2000);
}

changeImg();
setInterval(changeImg, 8000);

//countdown
simplyCountdown(".simply-countdown-circle", {
  year: 2026, // Target year (required)
  month: 6, // Target month [1-12] (required)
  day: 28, // Target day [1-31] (required)
  hours: 0, // Target hour [0-23], default: 0
  minutes: 0, // Target minute [0-59], default: 0
  seconds: 0, // Target second [0-59], default: 0
  words: {
    // Custom labels, with lambda for plurals
    days: { root: "hari", lambda: (root, n) => (n > 1 ? root + "" : root) },
    hours: { root: "jam", lambda: (root, n) => (n > 1 ? root + "" : root) },
    minutes: { root: "menit", lambda: (root, n) => (n > 1 ? root + "" : root) },
    seconds: { root: "detik", lambda: (root, n) => (n > 1 ? root + "" : root) },
  },
  plural: true, // Use plurals for labels
  inline: false, // Inline format: e.g., "24 days, 4 hours, 2 minutes"
  inlineSeparator: ", ", // Separator for inline format, default: ", "
  inlineClass: "simply-countdown-inline", // CSS class for inline countdown
  enableUtc: false, // Use UTC time if true
  refresh: 1000, // Refresh interval in ms, default: 1000
  sectionClass: "simply-section", // CSS class for each countdown section
  amountClass: "simply-amount", // CSS class for numeric values
  wordClass: "simply-word", // CSS class for unit labels
  zeroPad: false, // Pad numbers with leading zero
  removeZeroUnits: false, // Remove units with zero value
  countUp: false, // Count up after reaching zero
  onEnd: () => {}, // Callback when countdown ends
  onStop: () => {}, // Callback when countdown is stopped
  onResume: () => {}, // Callback when countdown is resumed
  onUpdate: (params) => {}, // Callback when countdown is updated
});

// batas
simplyCountdown(".simply-countdown", {
  year: 2026, // Target year (required)
  month: 6, // Target month [1-12] (required)
  day: 28, // Target day [1-31] (required)
  hours: 0, // Target hour [0-23], default: 0
  minutes: 0, // Target minute [0-59], default: 0
  seconds: 0, // Target second [0-59], default: 0
  words: {
    // Custom labels, with lambda for plurals
    days: { root: "hari", lambda: (root, n) => (n > 1 ? root + "" : root) },
    hours: { root: "jam", lambda: (root, n) => (n > 1 ? root + "" : root) },
    minutes: { root: "menit", lambda: (root, n) => (n > 1 ? root + "" : root) },
    seconds: { root: "detik", lambda: (root, n) => (n > 1 ? root + "" : root) },
  },
  plural: true, // Use plurals for labels
  inline: false, // Inline format: e.g., "24 days, 4 hours, 2 minutes"
  inlineSeparator: ", ", // Separator for inline format, default: ", "
  inlineClass: "simply-countdown-inline", // CSS class for inline countdown
  enableUtc: false, // Use UTC time if true
  refresh: 1000, // Refresh interval in ms, default: 1000
  sectionClass: "simply-section", // CSS class for each countdown section
  amountClass: "simply-amount", // CSS class for numeric values
  wordClass: "simply-word", // CSS class for unit labels
  zeroPad: false, // Pad numbers with leading zero
  removeZeroUnits: false, // Remove units with zero value
  countUp: false, // Count up after reaching zero
  onEnd: () => {}, // Callback when countdown ends
  onStop: () => {}, // Callback when countdown is stopped
  onResume: () => {}, // Callback when countdown is resumed
  onUpdate: (params) => {}, // Callback when countdown is updated
});
