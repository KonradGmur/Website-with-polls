// Slider
new Splide(".splide", {
  type: "loop",
  perPage: 3,
  breakpoints: {
    1200: {
      perPage: 3,
    },
    992: {
      perPage: 3,
    },
    768: {
      perPage: 2,
    },
    // 640: {
    //   perPage: 1,
    // },
  },
}).mount();

//Scroll

// $(function () {
//   $(window).scroll(function () {
//     if ($(window).scrollTop() > 100) {
//       $(".scrollTopButton").addClass("show");
//     } else {
//       $(".scrollTopButton").removeClass("show");
//     }
//   });

//   $(".scrollTopButton").click(function () {
//     $("body").animate({ scrollTop: 0 }, 400, "linear");
//   });
// });
