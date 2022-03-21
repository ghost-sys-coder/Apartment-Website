// SELECTORS
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");


menu.onclick = () => {
    menu.classList.toggle('fa-timmes');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// // EVENTLISTENERS
// menu.addEventListener('click', onclick);
// menu.addEventListener('click', onclick);



// // FUNCTIONS
// function onclick() {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }
// // TODO: NEEDS TO CHECKED
// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

// JS FOR THE SWIPER IMAGE SLIDER
var swiper = new Swiper(".home-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



// FOFR THE REVIEWS SLIDER
var swiper = new Swiper(".reviews-slider", {
  loop: true,
  spaceBetween: 20,
  autoHeight: true,
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      // spaceBetween: 50,
    },
  },
});


// FOR THE LOAD MORE BUTTON ON THE PACKAGES PAGE

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('.packages .box-container .box')];

  for(var i = currentItem; i < currentItem + 3; i++) {
    boxes[1].style.display = 'inline-block';
  };
  currentItem += 3;
  if(currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
}