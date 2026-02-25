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
