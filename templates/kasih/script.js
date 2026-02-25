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

$("#rightPanel").on("scroll", function () {
  let scrollTop = $(this).scrollTop();
  let windowHeight = $(this).height();
  let viewportCenter = scrollTop + windowHeight / 2;

  let sectionTop = $(".love-story").position().top;
  let sectionHeight = $(".love-story").outerHeight();
  let sectionBottom = sectionTop + sectionHeight;

  if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
    let progress = (viewportCenter - sectionTop) / sectionHeight;

    let timelineHeight = $(".timeline").height();
    let lineHeight = progress * timelineHeight;

    lineHeight = Math.min(lineHeight, timelineHeight);

    document.querySelector(".timeline").style.setProperty("--line-height", lineHeight + "px");

    $(".timeline-dot").each(function () {
      let dotTop = $(this).position().top;

      if (lineHeight >= dotTop) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }
});
