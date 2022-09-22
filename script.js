$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  var typed = new Typed(".typing", {
    strings: ["Developer", "Coder"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Coder"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        item: 1,
        nav: false,
      },
      600: {
        item: 2,
        nav: false,
      },
      1000: {
        item: 3,
        nav: false,
      },
    },
  });
});
