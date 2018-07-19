// // Select About li
// var navBar = document.querySelectorAll(".test");
// // Anytime About is clicked perform scroll funtion
// for (var i = 0; i < navBar.length; i++) {
//     navBar[i].addEventListener("click", scroll);
// }
// // Pan to About Me Section
// function scroll() {
//     window.scrollTo(0, 725);
// }


$(".personal").click(function() {
  $("html, body").animate({
    scrollTop: $(".about").offset().top
  }, 200);
});

$(".top").click(function() {
  $("html, body").animate({
    scrollTop: $("nav").offset().top
  }, 150);
});