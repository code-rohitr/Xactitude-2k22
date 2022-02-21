$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $(".nav").addClass("navbar-scroll");
   
  } else {
    $(".nav").removeClass("navbar-scroll");
  }
});
