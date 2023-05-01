const buttonToggleMenu = document.querySelector(".header__toggle");
const headerMenu = document.querySelector(".header__menu");


const toggleMenu = function() {
    headerMenu.classList.toggle("header__menu_shown");
}


buttonToggleMenu.addEventListener("click", toggleMenu);
headerMenu.addEventListener("click", toggleMenu);