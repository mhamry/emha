const landingBottom = document.querySelector(".landing-bottom");
const landingTop = document.getElementById("landing-top");
const tombol = document.getElementById("openBtn");

tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");

  document.body.style.overflow = "auto";
});

const imageWrapper = document.querySelector(".hero .image-wrapper");
const listImg = ["image/6.jpg", "image/7.jpg", "image/8.jpg", "image/9.jpg"];
let i = 0;
function changeImg() {
  imageWrapper.classList.add("fade-in");
  imageWrapper.classList.remove("fade-out");

  setTimeout(() => {
    imageWrapper.style.setProperty("--bg", `url(${listImg[i]})`);
    imageWrapper.classList.remove("fade-in");
    imageWrapper.classList.add("fade-out");
    i = (i + 1) % listImg.length;
  }, 3000);
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

//animasi effect timeline

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

// animasi gift

const gift = document.querySelector(".gift");
const imgList = ["image/6.jpg", "image/7.jpg", "image/8.jpg", "image/9.jpg"];
let index = 0;

function gantiImg() {
  gift.classList.add("fade-out");
  gift.classList.remove("fade-in");

  setTimeout(() => {
    gift.style.setProperty("--bgImage", `url(${imgList[index]})`);
    gift.classList.remove("fade-out");
    gift.classList.add("fade-in");

    index = (index + 1) % imgList.length;
  }, 2000);
}

gantiImg();
setInterval(gantiImg, 8000);
