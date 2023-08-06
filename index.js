/*========== Swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    effect: "fade",
    speed: 900,
    grabCursor: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});

/*========== Owl Carousel ==========*/

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
  });

  $('.owl-prev-1').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('.owl-next-1').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
});