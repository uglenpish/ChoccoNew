const sliderCard = document.querySelector(".card");
const widthContainer = document.querySelector('.card__wrap').clientWidth;
const controls = document.querySelector('.photo');
const pos = 0;
let posCount;

function calcWidthList() {
  const itemsCount = sliderCard.children.length;
  const widthList = itemsCount * widthContainer; 

  sliderCard.style.width = `${widthList}px`;
}

function handlerClicks(event) {
	event.preventDefault();
  if (event.target.tagName === 'IMG') {
    slideTos(event.target);
    console.log("1");
  }
}

function slideTos(target) {
    const vector = target.dataset.vector;
    
    if (vector === '1') {
        posCount = pos;
        translates(posCount);
    } else if (vector === '2') {
        posCount = pos - widthContainer;
        translates(posCount);
    } else if (vector === '3') {
        posCount = pos - widthContainer*2;
        translates(posCount);
        console.log(posCount);
    }
}

function translates(pos) {
  sliderCard.style.transform = `translateX(${posCount}px)`;
}

controls.addEventListener('click', handlerClicks);


window.addEventListener('load', calcWidthList);