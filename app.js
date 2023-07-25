// slider -- swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// hamburger-menu
const hamburger = document.getElementById("hamburger")
     
function openmenu(){
  menu.classList.toggle("menu-left");
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-times");
}

//sign-in ---  modal
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModalButton');
const modalClose = document.getElementById('modalClose');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});
