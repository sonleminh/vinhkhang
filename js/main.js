const mobileBar = document.getElementById('mobile-bar');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

function handleBarClick() {
  overlay.classList.remove('hidden');
  mobileMenu.classList.remove('hidden');
}

function handleOverlayClick() {
  overlay.classList.add('hidden');
  mobileMenu.classList.add('hidden');
}

function handleCloseBtn() {
  overlay.classList.add('hidden');
  mobileMenu.classList.add('hidden');
}

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (
      input1.value.trim() === '' ||
      input2.value.trim() === '' ||
      input3.value.trim() === '' ||
      input4.value.trim() === ''
    ) {
      alert(`Please fill out all fields completely!`);
    } else {
      alert(
        `I will contact you again.    
        ${input1.value}
        ${input2.value}
        ${input3.value} 
        ${input4.value}`
      );
      document.getElementById('contact-form').reset();
    }
  });

let mybutton = document.getElementById('scrollToTop');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = '1';
  } else {
    mybutton.style.opacity = '0';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel = document.querySelector('.carousel-container');
const track = document.querySelector('.track');
let width = carousel.offsetWidth;
let index = 0;
window.addEventListener('resize', function () {
  width = carousel.offsetWidth;
});
next.addEventListener('click', function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add('show');
  track.style.transform = 'translateX(' + index * -width + 'px)';
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add('hide');
  }
});
prev.addEventListener('click', function () {
  index = index - 1;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = 'translateX(' + index * -width + 'px)';
});
