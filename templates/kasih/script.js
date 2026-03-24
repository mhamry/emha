const tombol = document.getElementById("btnOpen");
const landingTop = document.getElementById("landingTop");
const rightPanel = document.getElementById("rightPanel");
const leftPanel = document.getElementById("leftPanel");
const scrollDown = document.querySelector(".scroll-down");
const song = document.querySelector(".song");
const audioIcon = document.querySelector(".audio-icon");
const iconWrapper = document.querySelector(".icon-wrapper i");
let isPlaying = false;
tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");
  rightPanel.style.overflowY = "auto";
  scrollDown.classList.add("muncul");
  song.play();
  audioIcon.style.display = "flex";

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

//ambil nama tamu undangan dari url
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("to") || "Tamu Undangan";
const namaElement = document.querySelector(".landing-top .undangan");
namaElement.textContent = `${nama}`;

// animasi hero image wrapper

const imageWrapper = document.querySelector(".hero .image-wrapper");
const listImg = ["image/1.png", "image/2.png", "image/3.png"];
let index = 0;
function changeImage() {
  imageWrapper.classList.add("fade-in");
  imageWrapper.classList.remove("fade-out");
  setTimeout(() => {
    imageWrapper.style.setProperty("--bg", `url(${listImg[index]})`);
    imageWrapper.classList.remove("fade-in");
    imageWrapper.classList.add("fade-out");
    index = (index + 1) % listImg.length;
  }, 2000);
}

changeImage();
setInterval(changeImage, 8000);

// //animasi effect timeline

$("#rightPanel").on("scroll", function () {
  let scrollTop = $(this).scrollTop();
  let windowHeight = $(this).height();
  let viewportCenter = scrollTop + windowHeight / 2;

  let sectionTop = $(".love-story").offset().top - $("#rightPanel").offset().top + scrollTop;

  let sectionHeight = $(".love-story").outerHeight();
  let sectionBottom = sectionTop + sectionHeight;

  console.log({
    scrollTop,
    viewportCenter,
    sectionTop,
    sectionBottom,
  });

  if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
    let progress = (viewportCenter - sectionTop) / sectionHeight;

    let timelineHeight = $(".timeline").height();
    let lineHeight = progress * timelineHeight;

    lineHeight = Math.max(0, Math.min(lineHeight, timelineHeight));

    document.querySelector(".timeline").style.setProperty("--line-height", lineHeight + "px");

    $(".timeline-dot").each(function () {
      let dotTop = $(this).offset().top - $(".timeline").offset().top;

      if (lineHeight >= dotTop) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }
});

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
