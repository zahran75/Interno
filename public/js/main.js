
let menu = document.querySelector("header i") 
let Nav = document.querySelector("header ul") 

menu.onclick = () =>{
    Nav.classList.toggle("opened")
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    // breakpoints

    slidesPerView:3,
    spaceBetween:20,
    breakpoints: {
        // when window width is <= 499px
        320: {
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        // when window width is <= 999px
        968: {
            slidesPerView: 3,
        }
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });

  
// scroll reveal animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000, delay: 600,
    // reset: true,
});
//hero
sr.reveal('.hero__text', { origin: 'top' });

// steps
sr.reveal('.steps__step', { distance: '100px', interval: 100 });

// about
sr.reveal('.about__text', { origin: 'left' });
sr.reveal('.about__img', { origin: 'top', delay: "800" });

// slider
sr.reveal('.slider__bg', { delay: "800" });
sr.reveal('.slider__text');
sr.reveal('.slider__', { delay: "1000" });

// brands
sr.reveal('.brand__img', { delay: "600", distance: '100px' , interval: '100' });

// work 
sr.reveal('.work__title');
sr.reveal('.work__text' ,{ delay: "800"});
sr.reveal('.grid_' ,{ delay: "1000"});

// stats
sr.reveal('.stats');
sr.reveal('.stats__items',{
    distance: '100px',
    interval: 100
});

// news
sr.reveal('.news__title');
sr.reveal('.news__text' ,{ delay: "800"});
sr.reveal('.new__item',{
    distance: '100px',
    interval: 100,
    delay: "1000"
});

// cont

sr.reveal('.cont');
sr.reveal('.cont-text', { delay: "800" });

// footer

sr.reveal('.footer-item',{
    distance: '100px',
    interval: 100,
});
sr.reveal('.copy');