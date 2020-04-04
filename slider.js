
const sliderCard = document.querySelector(".card");
const widthContainer = document.querySelector('.card__wrap').clientWidth;
const controls = document.querySelector('.photo');
const pos = 0;
let posCount;
// let link = document.querySelectorAll('.photo__link');
// const item = document.querySelector(".card__item");
// const computed = getComputedStyle(items);

function calcWidthList() {
  const itemsCount = sliderCard.children.length;
  const widthList = itemsCount * widthContainer; 

  sliderCard.style.width = `${widthList}px`;
}

function handlerClick(event) {
	event.preventDefault();
  if (event.target.tagName === 'IMG') {
    slide(event.target);
    console.log("1");
  }
}

function slide(target) {
    const vector = target.dataset.vector;// prev or next

    switch (vector) {
    	case '1':
    	slideTo(vector);
    	break;
    	case '2':
    	slideTo(vector);
    	break;
    	case '3':
    	slideTo(vector);
    	break;
    }
  }

function slideTo(vector) {

    
    if (vector === '1') {
        posCount = pos;
        translate(posCount);
    } else if (vector === '2') {
        posCount = pos - widthContainer;
        translate(posCount);
    }else if (vector === '3') {
        posCount = pos - widthContainer*2;
        translate(posCount);
        console.log(posCount);
    }
}

function translate(pos) {
  sliderCard .style.transform = `translateX(${posCount}px)`;
}

controls.addEventListener('click', handlerClick);


window.addEventListener('load', calcWidthList);


  // function fillReview (reviewData) {
  //   const avatar = review.querySelector('.review__avatar-img')
  //   const title = review.querySelector('.review__title')
  //   const text = review.querySelector('.review__text')
  //   const user = review.querySelector('.review__user')

  //   avatar.src = reviewData.avatar
  //   title.textContent = reviewData.title
  //   user.textContent = reviewData.user
  //   text.innerHTML = reviewData.text
  // }

  // function getDataFromReview (reviewItem) {
  //   return {
  //     avatar: reviewItem.querySelector('.reviews__item-img').src,
  //     title: reviewItem.querySelector('.reviews__item-title').textContent,
  //     text: reviewItem.querySelector('.reviews__item-text').innerHTML,
  //     user: reviewItem.querySelector('.reviews__item-user').textContent
  //   }
  // }

  // reviews.forEach(review => {
  //   review.addEventListener('click', function (e) {
  //     e.preventDefault()
  //     let lastActive = document.querySelector('.reviews__item--selected')
  //     lastActive.classList.remove("reviews__item--selected")

  //     lastActive = review
  //     lastActive.classList.add("reviews__item--selected")

  //     const reviewItem = getDataFromReview(review)
  //     fillReview(reviewItem)
  //   })
  // })

















































