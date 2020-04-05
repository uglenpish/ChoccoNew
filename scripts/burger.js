let nav = document.querySelector('#overlay');
let body = document.querySelector('body');
let burger = document.querySelector('.hamburger');
let close = document.querySelector('.menu__burger-close');
let links = document.querySelectorAll('.menu__link')

links.forEach( function(element) {
	element.addEventListener('click', toggleMenu);
});

function toggleMenu() {
	nav.classList.toggle('burger--activ');
	body.classList.toggle('body--activ');
}

burger.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu)

//team accordion.

// let nameBtn = document.querySelectorAll('accordion__name');
// let dropdown = document.querySelector('accordion__dropdown');
// let item = document.querySelector('employee__item');

// nameBtn.forEach( function(element) {
// 	element.addEventListener('click', toggleMenu);
// });

// function toggleMenu() {
// 	item.classList.toggle('show--activ');
// 	body.classList.toggle('body--activ');
// }