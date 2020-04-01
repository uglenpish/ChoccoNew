
let slider = document.querySelector(".card");
let widthContainer = document.querySelector('.card__wrap').clientWidth;
const item = document.querySelector(".card__item");
let controls = document.querySelector('.photo');
var pos = 0;

function calcWidthList() {
  const itemsCount = slider.children.length;
  const widthList = itemsCount * widthContainer; 

  slider.style.width = `${widthList}px`;
}

function handlerClick(event) {
	e.preventDefault();
  if (event.target.tagName === 'A') {
    slide(event.target);
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
    // case '3':
    //   slideTo(vector);
    //   break;
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
        pos -= widthContainer;
        active.classList.remove('vision');
        nextElement.classList.add('vision');
        translate(pos);
    } else if (prevElement) {
        pos += widthContainer;
        active.classList.remove('vision');
        prevElement.classList.add('vision');
        translate(pos);
    }
}

controls.addEventListener('click', handlerClick);

window.addEventListener('load', calcWidthList);



// слайдер батончики

// right.addEventListener("click", function(e) {
//   loop("right", e);
// });
 
// left.addEventListener("click", function(e) {
//   loop("left", e);
// });

// function loop(direction, e) {
//   e.preventDefault();
//   if (direction === "right") {
//     slider.appendChild(slider.firstElementChild);
//   } else {
//     slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
//   }
// }




















// function translate(pos) {
//   list.style.transform = `translateX(${pos}px)`;
// }

// left.addEventListener('click', handlerClick);
// right.addEventListener('click', handlerClick);

// window.addEventListener('load', calcWidthList);



