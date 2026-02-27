const tombol = document.getElementById("openBtn");
const landingTop = document.getElementById("landingTop");
const song = document.querySelector(".song");
const audioIcon = document.querySelector(".audio-icon");
const iconWrapper = document.querySelector(".icon-wrapper i");
let isPlaying = false;

tombol.addEventListener("click", () => {
  landingTop.classList.add("hide");
  audioIcon.style.display = "flex";
  song.play();

  // aktifkan scroll setelah animasi
  setTimeout(() => {
    document.body.style.overflowY = "auto";
  }, 1000);
});

// audio

audioIcon.addEventListener("click", function () {
  if (isPlaying) {
    song.pause();
    isPlaying = false;
    iconWrapper.classList.remove("bi-disc");
    iconWrapper.classList.add("bi-pause-circle");
  } else {
    song.play();
    isPlaying = true;
    iconWrapper.classList.add("bi-disc");
    iconWrapper.classList.remove("bi-pause-circle");
  }
});

//ambil nama tamu undangan dari url

const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "Tamu Undangan";
const namaElement = document.querySelector(".landing-top .tamu_undangan");
namaElement.innerHTML = `${nama}`;

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

// //hero bg aniamtion
const kotak = document.querySelector(".hero");
const listGambar = ["image/utama/1.png", "image/utama/2.png", "image/utama/8.png", "image/utama/9.png", "image/utama/5.png", "image/utama/6.png"];
let index = 0;

function gantiBackground() {
  kotak.classList.add("fade-out");
  setTimeout(() => {
    kotak.style.backgroundImage = `url(${listGambar[index]})`;
    kotak.classList.remove("fade-out");
    index = (index + 1) % listGambar.length;
  }, 2000);
}
gantiBackground();
setInterval(gantiBackground, 10000);

//animation groom-bride
// const section = document.querySelector(".groom-bride");
// const listImg = ["image/utama/1.png", "image/utama/2.png", "image/utama/8.png", "image/utama/9.png", "image/utama/5.png", "image/utama/6.png"];
// let i = 0;
// function changeBg() {
//   section.classList.add("fade-bg");
//   setTimeout(() => {
//     section.style.setProperty("--bg", `url(${listImg[i]})`);
//     section.classList.remove("fade-bg");
//     i = (i + 1) % listImg.length;
//   }, 2000);
// }

// changeBg();
// setInterval(changeBg, 12000);

const section = document.querySelector(".groom-bride");

const listImg = ["image/utama/1.png", "image/utama/2.png", "image/utama/8.png", "image/utama/9.png", "image/utama/5.png", "image/utama/6.png"];

let i = 0;
const fadeDuration = 2000; // harus sama dengan CSS transition

function changeBg() {
  // fade out
  section.classList.add("fade-out");
  section.classList.remove("fade-in");

  setTimeout(() => {
    // ganti background
    section.style.setProperty("--bg", `url(${listImg[i]})`);
    i = (i + 1) % listImg.length;

    // fade in
    section.classList.remove("fade-out");
    section.classList.add("fade-in");
  }, fadeDuration);
}

// start
changeBg();
setInterval(changeBg, 10000);

//animation love-story

const loveStory = document.querySelector(".love-story");

const listImage = ["image/utama/1.png", "image/utama/2.png", "image/utama/8.png", "image/utama/9.png", "image/utama/5.png", "image/utama/6.png"];

let indexes = 0;
const fadeDurasi = 2000; // harus sama dengan CSS transition

function changeImg() {
  // fade out
  loveStory.classList.add("fade-out");
  loveStory.classList.remove("fade-in");

  setTimeout(() => {
    // ganti background
    loveStory.style.setProperty("--bgImg", `url(${listImage[indexes]})`);
    indexes = (indexes + 1) % listImage.length;

    // fade in
    loveStory.classList.remove("fade-out");
    loveStory.classList.add("fade-in");
  }, fadeDurasi);
}

// start
changeImg();
setInterval(changeImg, 10000);

//animasi wedding-gift

const weddingGift = document.querySelector(".wedding-gift");
const gambar = ["image/utama/1.png", "image/utama/2.png", "image/utama/3.png", "image/utama/4.png", "image/utama/5.png"];

let duration = 2000;
let indeks = 0;

function gantiBg() {
  //fade-out
  weddingGift.classList.add("fade-out");
  weddingGift.classList.remove("fade-in");

  setTimeout(function () {
    weddingGift.style.setProperty("--bgImage", `url(${gambar[indeks]})`);
    indeks = (indeks + 1) % gambar.length;

    //fade-in
    weddingGift.classList.remove("fade-out");
    weddingGift.classList.add("fade-in");
  }, duration);
}

gantiBg();
setInterval(gantiBg, 10000);

// animasi thankyou
const thankyou = document.querySelector(".thankyou");
const gambarList = ["image/utama/1.png", "image/utama/2.png", "image/utama/3.png", "image/utama/4.png", "image/utama/5.png"];

let durasi = 2000;
let indek = 0;

function gantiGambar() {
  //fade-out
  thankyou.classList.add("fade-out");
  thankyou.classList.remove("fade-in");

  setTimeout(function () {
    thankyou.style.setProperty("--gambar", `url(${gambarList[indek]})`);
    indek = (indek + 1) % gambarList.length;

    //fade-in
    thankyou.classList.remove("fade-out");
    thankyou.classList.add("fade-in");
  }, durasi);
}

gantiGambar();
setInterval(gantiGambar, 10000);
