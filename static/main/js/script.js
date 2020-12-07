const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu'),
   closeElem = document.querySelector('.menu__close');


hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
});

$('.about__photo').slick({
   dots: true,
   infinite: true,
   speed: 500,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 1500,
   cssEase: 'linear',
   breakpoint: 1024,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});

const counters = document.querySelectorAll('.procces__percent'),
   lines = document.querySelectorAll('.line div');

counters.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});


