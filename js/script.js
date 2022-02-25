$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu,.header").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    dragable: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1087,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    mobileFist: false,
  });
});
