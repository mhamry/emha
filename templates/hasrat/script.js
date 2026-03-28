const tombol = document.getElementById("btnOpen");
const rightPanel = document.getElementById("rightPanel");
const landingTop = document.getElementById("landingTop");
const leftPanel = document.getElementById("leftPanel");
const song = document.querySelector(".song");
const audioIcon = document.querySelector(".audio-icon");
const iconWrapper = document.querySelector(".icon-wrapper i");
let isPlaying = false;

tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");
  rightPanel.style.overflow = "auto";
  song.play();
  audioIcon.style.display = "flex";

  leftPanel.addEventListener("wheel", function (e) {
    e.preventDefault();
    rightPanel.scrollTop += e.deltaY;
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

//lihat konfirmasi kehadiran
document.addEventListener("DOMContentLoaded", function () {
  const btnKonfirmasi = document.getElementById("konfirmasi");
  const kotakRsvp = document.querySelector(".rsvp .kotak-rsvp");

  btnKonfirmasi.addEventListener("click", function () {
    kotakRsvp.classList.toggle("show");

    if (kotakRsvp.classList.contains("show")) {
      btnKonfirmasi.innerHTML = "<i class='bi bi-eye-slash me-2'></i> Tutup Konfirmasi Kehadiran";
    } else {
      btnKonfirmasi.innerHTML = " <i class='bi bi-eye m-2'></i>Lihat Konfirmasi Kehadiran";
    }
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
