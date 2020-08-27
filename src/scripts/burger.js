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
