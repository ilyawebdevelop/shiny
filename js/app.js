import * as flsFunctions from "./modules/functions.js";
// import './components.js';

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper();

*/

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header__nav');
const bodyEl = document.querySelector('body');
let navItemAll = document.querySelectorAll('.header__nav-item');


const toggleMenu = function () {
	menu.classList.toggle('open');
}
const toggleBurger = function () {
	btnMenu.classList.toggle('active');
}
const toggleMenuLine = function () {
	menuLine1.classList.toggle('active');
	menuLine2.classList.toggle('active');
	menuLine3.classList.toggle('active');
}
const bodyOverflow = function () {
	bodyEl.classList.toggle('hidden');
}
btnMenu.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMenu();
	toggleBurger();
	bodyOverflow();
	toggleMenuLine();
});
navItemAll.forEach((el) => {
	el.addEventListener("click", function () {
		if (menu.classList.contains("open")) {
			toggleMenu();
			toggleBurger();
			bodyOverflow();
		}
	});
})

const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');


// Sticky header
const header = document.querySelector('.header__menu');
const first = document.querySelector('.first');
const bodyHeight = first.scrollHeight;

// const headerHeight = header.offsetHeight;
// const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.classList.remove('header__menu--fixed');		
		// first.style.marginTop = null;	

	} else {
		header.classList.add('header__menu--fixed');	
		// first.style.marginTop = `${headerHeight}px`;
	}

	if (scrollDistance === 0) {
		header.classList.remove('header__menu--fixed');		
		first.style.marginTop = null;
	}	



	lastScrollTop = scrollDistance;

});