const tombol = document.getElementById("openBtn");
const landingTop = document.getElementById("landing-top");
const song = document.querySelector(".song");
const audioIcon = document.querySelector(".audio-icon");
const iconWrapper = document.querySelector(".icon-wrapper i");

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

// //animasi effect timeline

$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop();
  let windowHeight = $(window).height();
  let viewportCenter = scrollTop + windowHeight / 2;

  let sectionTop = $(".love-story").offset().top;
  let sectionHeight = $(".love-story").outerHeight();
  let sectionBottom = sectionTop + sectionHeight;

  if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
    let progress = (viewportCenter - sectionTop) / sectionHeight;

    let timelineHeight = $(".timeline").height();
    let lineHeight = progress * timelineHeight;

    lineHeight = Math.min(lineHeight, timelineHeight);

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

//animasi hero

const hero = document.querySelector(".image-wrapper");
const listImg = ["image/4.jpg", "image/2.jpg", "image/3.jpg"];
let i = 0;

function gantiImg() {
  hero.classList.add("fade-in");
  hero.classList.remove("fade-out");

  setTimeout(() => {
    hero.style.setProperty("--bg", `url(${listImg[i]})`);
    hero.classList.remove("fade-in");
    hero.classList.add("fade-out");
    i = (i + 1) % listImg.length;
  }, 2000);
}

gantiImg();
setInterval(gantiImg, 8000);

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
