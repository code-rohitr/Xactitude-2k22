$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("navbar").addClass("navbar-scroll");
  } else {
    $("navbar").removeClass("navbar-scroll");
  }
});
