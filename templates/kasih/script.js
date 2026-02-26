const tombol = document.getElementById("btnOpen");
const landingTop = document.getElementById("landingTop");
const rightPanel = document.getElementById("rightPanel");
const leftPanel = document.getElementById("leftPanel");
const scrollDown = document.querySelector(".scroll-down");
const scrollIndicatorewraaper = document.querySelector(".scroll-indicator-wrapper");

tombol.addEventListener("click", function () {
  landingTop.classList.add("hide");
  rightPanel.style.overflowY = "auto";
  scrollDown.classList.add("muncul");

  leftPanel.addEventListener("wheel", function (e) {
    rightPanel.scrollTop += e.deltaY;
    e.preventDefault();
  });

  rightPanel.addEventListener("scroll", function () {
    if (rightPanel.scrollTop > 100) {
      scrollIndicatorewraaper.classList.add("hide");
    } else {
      scrollIndicatorewraaper.classList.remove("hide");
    }
  });
});

// //animasi effect timeline

// $(window).on("scroll", function () {
//   let scrollTop = $(window).scrollTop();
//   let windowHeight = $(window).height();
//   let viewportCenter = scrollTop + windowHeight / 2;

//   let sectionTop = $(".love-story").offset().top;
//   let sectionHeight = $(".love-story").outerHeight();
//   let sectionBottom = sectionTop + sectionHeight;

//   if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
//     let progress = (viewportCenter - sectionTop) / sectionHeight;

//     let timelineHeight = $(".timeline").height();
//     let lineHeight = progress * timelineHeight;

//     lineHeight = Math.min(lineHeight, timelineHeight);

//     document.querySelector(".timeline").style.setProperty("--line-height", lineHeight + "px");

//     $(".timeline-dot").each(function () {
//       let dotTop = $(this).offset().top - $(".timeline").offset().top;

//       if (lineHeight >= dotTop) {
//         $(this).addClass("active");
//       } else {
//         $(this).removeClass("active");
//       }
//     });
//   }
// });

// $(document).ready(function () {
//   $("#rightPanel").on("scroll", function () {
//     let scrollTop = $(this).scrollTop();
//     let windowHeight = $(this).height();
//     let viewportCenter = scrollTop + windowHeight / 2;

//     let sectionTop = $(".love-story").position().top;
//     let sectionHeight = $(".love-story").outerHeight();
//     let sectionBottom = sectionTop + sectionHeight;

//     if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
//       let progress = (viewportCenter - sectionTop) / sectionHeight;

//       let timelineHeight = $(".timeline").height();
//       let lineHeight = progress * timelineHeight;

//       lineHeight = Math.min(lineHeight, timelineHeight);

//       document.querySelector(".timeline").style.setProperty("--line-height", lineHeight + "px");

//       $(".timeline-dot").each(function () {
//         let dotTop = $(this).position().top;

//         if (lineHeight >= dotTop) {
//           $(this).addClass("active");
//         } else {
//           $(this).removeClass("active");
//         }
//       });
//     }
//   });
// });

//animasi effect timeline tanpa j-query

rightPanel.addEventListener("scroll", function () {
  const scrollTop = rightPanel.scrollTop;
  const windowHeight = rightPanel.clientHeight;
  const viewportCenter = scrollTop + windowHeight / 2;

  const section = document.querySelector(".love-story");

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;

  if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
    const progress = (viewportCenter - sectionTop) / sectionHeight;

    const timeline = document.querySelector(".timeline");
    const timelineHeight = timeline.offsetHeight;

    let lineHeight = progress * timelineHeight;
    lineHeight = Math.min(lineHeight, timelineHeight);

    timeline.style.setProperty("--line-height", lineHeight + "px");

    document.querySelectorAll(".timeline-dot").forEach((dot) => {
      const dotTop = dot.offsetTop;

      if (lineHeight >= dotTop) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
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
