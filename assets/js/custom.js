$('.hero-slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: false,
       autoplaySpeed: 3000,
       arrows: false,
       dots: false,
       infinite: true,
       pauseOnHover: true,
       responsive: [
              {
                     breakpoint: 1024,  
                     settings: {
                            slidesToShow: 1,
                     },
              },
              {
                     breakpoint: 600,  
                     settings: {
                            slidesToShow: 1,
                     },
              },
       ],
});

//====hamburger
const hamburger = document.querySelector('.toggle-hamburger');
const header = document.querySelector('header');
hamburger.addEventListener('click', function () {
       header.classList.toggle('open_nav');
});


// Sticky-header
const stickyheader = document.querySelector('header');
window.addEventListener('scroll', () => {
       if (window.scrollY > 10) {
              stickyheader.classList.add('sticky');
       } else {
              stickyheader.classList.remove('sticky');
       }
});