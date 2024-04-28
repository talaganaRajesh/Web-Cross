'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

// const header = document.querySelector("[data-header]");
// const goTopBtn = document.querySelector("[data-go-top]");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 400) {
//     header.classList.add("active");
//     goTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     goTopBtn.classList.remove("active");
//   }
// });

/* cursor script */

const cursorDot=document.querySelector("[data-cursor-dot]");
const cursorOutline=document.querySelector("[data-cursor-outline]");


window.addEventListener("mousemove",function(e){
    const posx=e.clientX;
    const posy=e.clientY;

    cursorDot.style.left=`${posx}px`;
    cursorDot.style.top=`${posy}px`;


    // cursorOutline.style.left=`${posx}px`;
    // cursorOutline.style.top=`${posy}px`;

    cursorOutline.animate({
        left:`${posx}px`,
        top:`${posy}px`
    },{duration: 700 , fill:"forwards" })



});
