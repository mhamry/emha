const tombol = document.getElementById("btnOpen");
const landingTop = document.getElementById("landingTop");
const scrollDown = document.querySelector(".scroll-down");
const leftPanel = document.getElementById("leftPanel");
const rightPanel = document.getElementById("rightPanel");
const song = document.querySelector(".song");
const audioIcon = document.querySelector(".audio-icon");
const iconWrapper = document.querySelector(".icon-wrapper i");
let isPlaying = false;
tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");
  song.play();
  audioIcon.style.display = "flex";

  setTimeout(() => {
    rightPanel.style.overflowY = "auto";
    scrollDown.classList.add("muncul");
  }, 2000);

  leftPanel.addEventListener("wheel", function (e) {
    rightPanel.scrollTop += e.deltaY;
    e.preventDefault();
  });
});

// audio

audioIcon.addEventListener("click", function () {
  if (isPlaying) {
    song.pause();
    isPlaying = false;
    iconWrapper.classList.remove("bi-disc-fill");
    iconWrapper.classList.add("bi-pause-circle");
  } else {
    song.play();
    isPlaying = true;
    iconWrapper.classList.add("bi-disc-fill");
    iconWrapper.classList.remove("bi-pause-circle");
  }
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

//efect paralax hero

$(".right-panel").scroll(function () {
  let rightpanelScroll = $(this).scrollTop();

  $(".bg-hero").css({
    transform: "translateY(" + rightpanelScroll + "px)",
  });
});

//animasi bg-hero
const bgHero = document.querySelector(".bg-hero");
const listImg = ["image/1.png", "image/2.png", "image/3.png", "image/4.png"];
let index = 0;

function gantiImg() {
  bgHero.style.opacity = 0.2;
  setTimeout(() => {
    bgHero.style.backgroundImage = `url(${listImg[index]})`;
    bgHero.style.opacity = 0.8;
    index = (index + 1) % listImg.length;
  }, 2000);
}

gantiImg();
setInterval(gantiImg, 8000);

//animasi fade groom bride

//satu

const satu = document.querySelector(".satu img");
const listImage = ["image/9.png", "image/10.png"];

let indeks = 0;

function gantiImage() {
  satu.src = listImage[indeks];

  indeks = (indeks + 1) % listImage.length;
}

setInterval(gantiImage, 4000);

// dua
const dua = document.querySelector(".dua img");
const listGambardua = ["image/6.png", "image/7.png", "image/8.png"];

let indek = 0;

function gantiGambar() {
  dua.src = listGambardua[indek];
  indek = (indek + 1) % listGambardua.length;
}

setInterval(gantiGambar, 4000);

//ambil nama tamu undangan dari url

const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "Tamu Undangan";
const namaElement = document.querySelector(".landing-top .undangan");
namaElement.textContent = `${nama}`;

//countdown
simplyCountdown(".simply-countdown-circle", {
  year: 2025, // Target year (required)
  month: 12, // Target month [1-12] (required)
  day: 9, // Target day [1-31] (required)
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
    days: { root: "hari", lambda: (root, n) => (n > 1 ? root + "s" : root) },
    hours: { root: "jam", lambda: (root, n) => (n > 1 ? root + "s" : root) },
    minutes: { root: "menit", lambda: (root, n) => (n > 1 ? root + "s" : root) },
    seconds: { root: "detik", lambda: (root, n) => (n > 1 ? root + "s" : root) },
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
