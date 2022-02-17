$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('navbar-scroll');
    }

    else {
          $('nav').removeClass('navbar-scroll');
    }
})