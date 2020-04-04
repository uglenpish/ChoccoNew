// слайдер батончики
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const sliders = document.querySelector(".slider__list");


right.addEventListener("click", function(e) {
  loop("right", e);
});
 
left.addEventListener("click", function(e) {
  loop("left", e);
});

function loop(direction, e) {
  e.preventDefault();
  if (direction === "right") {
    sliders.appendChild(sliders.firstElementChild);
  } else {
    sliders.insertBefore(slider.lastElementChild, sliders.firstElementChild);
  }
}