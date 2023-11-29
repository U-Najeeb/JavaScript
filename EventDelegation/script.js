'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScroll = document.querySelector(".btn--scroll-to")
const featureSection = document.querySelector("#section--1")
const operationSection =document.querySelector(".operations")
const testimonialSection = document.querySelector("#section--3")
const navLinks = document.querySelector(".nav__links")

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {
    btn.addEventListener("click", openModal)
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Learn More Smooth Scrolling
btnScroll.addEventListener('click', (e)=>{
    e.preventDefault()
    // const s1coords = sectionOne.getBoundingClientRect() 
    // window.scrollTo({
    //     left : s1coords.left + window.scrollX,
    //     top : s1coords.top + window.scrollY,
    // })
    featureSection.scrollIntoView({behavior:"smooth"})
})

// WithOut event delegation 
// document.querySelectorAll(".nav__link").forEach((ele)=>{
//     ele.addEventListener('click', function (e){
//         e.preventDefault()
//         const id = this.getAttribute('href')
//         document.querySelector(id).scrollIntoView({behavior:"smooth"})
//     })
// })

//With Event Delegation

/* 
STEPS
1. ADD event listener to the common parent element 
2. Determine from which element the event is propagating from
*/
navLinks.addEventListener('click', function (e){    
    e.preventDefault()
    if (e.target.classList.contains("nav__link")){
        e.preventDefault()
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior:"smooth"})
    }
})