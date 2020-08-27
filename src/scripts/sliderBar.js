// слайдер батончики

// const left = document.querySelector(".left");
// const right = document.querySelector(".right");

const sliders = document.querySelector(".slider__list");
const items = document.querySelectorAll(".slider__item");
let control = document.querySelectorAll('.bar__scroll');
let position = 0;
let index;


for(let link of control){
	index = link;
	console.log(link);
	index.addEventListener('click', handlerClick);
}


function handlerClick(event) {
	event.preventDefault();
  if (event.target.tagName === 'A') {
    slide(event.target);
    console.log("2");
  }
}

function slide(target) {
    const vector = target.dataset.vector;// prev or next

    switch (vector) {
        case 'next':
            slideTo(vector);
            break;
        case 'prev':
            slideTo(vector);
            break;
    }
}

function slideTo(vector) {
    const active = document.querySelector('.vision');

    if (vector === 'next') {
        var nextElement = active.nextElementSibling;
    } else {
        var prevElement = active.previousElementSibling;
    }

    if (nextElement) {
        position -= 100;
        active.classList.remove('vision');
        nextElement.classList.add('vision');
        translate(pos);
    } else if (prevElement) {
        position += 100;
        active.classList.remove('vision');
        prevElement.classList.add('vision');
        translate(pos);
    }
}

function translate(pos) {
   sliders.style.transform = `translateX(${position}%)`;
}