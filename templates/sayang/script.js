const landingTop = document.querySelector(".landing-top");
const tombol = document.getElementById("openBtn");
const audioIcon = document.querySelector(".audio-icon");
const song = document.querySelector(".song");
const iconWrapper = document.querySelector(".icon-wrapper i");
let isPlaying = true;

tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");
  playSong();
  audioIcon.style.display = "flex";

  setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 2000);
});

iconWrapper.addEventListener("click", function () {
  if (isPlaying) {
    song.pause();
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

function playSong() {
  song.play();
}
// animasi hero image
const imageWrapper = document.querySelector(".image-wrapper");
const listImg = ["image/2.jpg", "image/3.jpg", "image/4.jpg"];
let i = 0;

function gantiImg() {
  imageWrapper.classList.add("fade-out");
  imageWrapper.classList.remove("fade-in");

  setTimeout(() => {
    imageWrapper.style.setProperty("--bg", `url(${listImg[i]})`);
    imageWrapper.classList.remove("fade-out");
    imageWrapper.classList.add("fade-in");

    i = (i + 1) % listImg.length;
  }, 2000);
}

gantiImg();
setInterval(gantiImg, 8000);

// animasi info-acara
const infoAcara = document.querySelector(".info-acara");
const listGambar = ["image/2.jpg", "image/3.jpg", "image/4.jpg"];
let indeks = 0;

function gantiImage() {
  infoAcara.classList.add("fade-out");
  infoAcara.classList.remove("fade-in");

  setTimeout(() => {
    infoAcara.style.setProperty("--bg", `url(${listGambar[indeks]})`);
    infoAcara.classList.remove("fade-out");
    infoAcara.classList.add("fade-in");

    indeks = (indeks + 1) % listGambar.length;
  }, 2000);
}

gantiImage();
setInterval(gantiImage, 8000);

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
