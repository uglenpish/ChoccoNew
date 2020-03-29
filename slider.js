let left = document.querySelector(".left");
let right = document.querySelector(".right");
let widthContainer = document.querySelector('.slider').clientWidth;
let slider = document.querySelector(".slider__list");
var pos = 0;


function calcWidthList() {
  const itemsCount = slider.children.length;
  const widthList = itemsCount * widthContainer; 
	  slider.style.width = `${widthList}px`;
	
}

function handlerClick(event) {
    if (event.target.tagName === 'S') {
        slide(event.target);
        console.log('1')
    }
}

window.addEventListener('load', calcWidthList);





// function handlerClick(event) {
//     if (event.target.tagName === 'SVG') {
//         slide(event.target);
//     }
// }

// function slide(target) {
//     const vector = target.dataset.vector;// prev or next

//     switch (vector) {
//         case 'next':
//             slideTo(vector);
//             break;
//         case 'prev':
//             slideTo(vector);
//             break;
//     }
// }

// function slideTo(vector) {
//     const active = document.querySelector('.vision');

//     if (vector === 'next') {
//         var nextElement = active.nextElementSibling;
//     } else {
//         var prevElement = active.previousElementSibling;
//     }

//     if (nextElement) {
//         pos -= widthContainer;
//         active.classList.remove('vision');
//         nextElement.classList.add('vision');
//         translate(pos);
//     } else if (prevElement) {
//         pos += widthContainer;
//         active.classList.remove('vision');
//         prevElement.classList.add('vision');
//         translate(pos);
//     }
// }

// function translate(pos) {
//   list.style.transform = `translateX(${pos}px)`;
// }

// left.addEventListener('click', handlerClick);
// right.addEventListener('click', handlerClick);

// window.addEventListener('load', calcWidthList);



