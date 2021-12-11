var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add( 'bg-light','shadow',)
    } else {
        nav.classList.remove( 'bg-light','shadow',);
    }
})


const nextIcon = '<img src="./right-arrow.svg" alt="right">';
const prevIcon = '<img src="./left-arrow.svg" alt="left" >';

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  margin:10,
  nav: false,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})