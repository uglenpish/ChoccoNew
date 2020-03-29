'use strict'

// let acc = document.querySelector('.accordion__list');
// let items = document.querySelectorAll('.accordion__item');
// let btn = document.querySelector('.accordion__item-title');
// let content = document.querySelector('.accordion__item-text');
// let openWight = '520px'

// acc.addEventListener('click', onWigth)


// 	function onWigth(event){
// 	let target=event.target;

// 	for(i=0; i<items.length; i++){

// 		if(items.length[i])
// 	}
// }

const acc = document.querySelectorAll('.accordion__item-title ')

acc.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault()
    const menuItem = element.parentElement
    const close = menuItem.querySelector('.close__btn')

    close.addEventListener('click', (event) => {
      event.preventDefault()
      menuItem.classList.remove('menu-text--activ')
    })

    if (menuItem.classList.contains('.menu-text--activ')) {
      menuItem.classList.remove('menu-text--activ')
    } else {
      const openedMenuElement = document.querySelector('.menu-text--activ')
      if (openedMenuElement && !menuItem.isEqualNode(openedMenuElement)) {
        openedMenuElement.classList.remove('menu-text--activ') 
      }
      menuItem.classList.add('menu-text--activ')
    }
  })
})
