/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});


document.querySelectorAll('.dropdown').forEach(dropdown => {
    const content = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', () => {
        content.style.display = 'block'; // Show content
        setTimeout(() => {
            content.style.opacity = '1'; // Fade in
        }, 0); // Ensure it starts fading in immediately
    });

    dropdown.addEventListener('mouseleave', () => {
        content.style.opacity = '0'; // Fade out
        setTimeout(() => {
            content.style.display = 'none'; // Hide after fade
        }, 300); // Match fade duration
    });
});


