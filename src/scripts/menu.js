function accordionChocco () {
  let acc = document.querySelector('.accordion__list');
  let menuItems = document.querySelectorAll('.accordion__item');
  let closeMenu = document.querySelectorAll('.close__btn');
  let computed = getComputedStyle(acc);

  console.log(computed);

  acc.addEventListener('click', event =>{
    let target = event.target.parentNode;
    let item = target.parentNode;
    let text = target.nextElementSibling;

    const targetWidth = target.clientWidth;
    const widowsWidth = document.documentElement.clientWidth;
    const defaultTextWidth = 520;
    const windowPhone = 480;
    const closeMenuWidth = targetWidth * menuItems.length;
    const openMenuWidth = closeMenuWidth + defaultTextWidth;

    if (event.target.classList.contains('rotate')){
      moveMenu();
    }

    target = event.target;
    item = target.parentNode;
    text = target.nextElementSibling;

    if (event.target.classList.contains('accordion__item-title')){
      moveMenu();
    }

    function moveMenu(){
      for (const iterator of menuItems) {
        if(iterator!=item){
          iterator.classList.remove('menu-text--activ');
          iterator.lastElementChild.style.width = 0;
          acc.style.transform = 'translateX(0)';
        }
      }

      if(item.classList.contains('menu-text--activ')){
        item.classList.remove('menu-text--activ');
        text.style.width = 0;
      }else{
        item.classList.add('menu-text--activ');

        if(widowsWidth > windowPhone && widowsWidth < openMenuWidth){
          text.style.width = widowsWidth - closeMenuWidth +'px';
        } else if (widowsWidth < windowPhone) {
          let num;
          for (let i=0; i<menuItems.length; i++) {
            if(menuItems[i] === item){
              num = menuItems.length - (i+1);
            }
          }
          console.log(num);
          acc.style.transform = `translateX(${targetWidth * num}px)`
          text.style.width = widowsWidth - targetWidth + 'px';
        } else {
          text.style.width = defaultTextWidth + 'px';
        }
      }
    }

    for (const indexOff of closeMenu){
      indexOff.addEventListener('click', e=>{


        if(item.classList.contains('menu-text--activ')){
          text.style.width = 0;
          item.classList.remove('menu-text--activ');
          console.log(12);
          if(computed.transform != 'translateX(0)'){
            acc.style.transform = 'translateX(0)';
          }
        }
      }) 
    }
  })
}

accordionChocco (); 
// первая версия 
// const acc = document.querySelectorAll('.accordion__item-title ')

// acc.forEach(element => {
//   element.addEventListener('click', (event) => {
//     event.preventDefault()
//     const menuItem = element.parentElement
//     const close = menuItem.querySelector('.close__btn')

//     close.addEventListener('click', (event) => {
//       event.preventDefault()
//       menuItem.classList.remove('menu-text--activ')
//     })

//     if (menuItem.classList.contains('.menu-text--activ')) {
//       menuItem.classList.remove('menu-text--activ')
//     } else {
//       const openedMenuElement = document.querySelector('.menu-text--activ')
//       if (openedMenuElement && !menuItem.isEqualNode(openedMenuElement)) {
//         openedMenuElement.classList.remove('menu-text--activ') 
//       }
//       menuItem.classList.add('menu-text--activ')
//     }
//   })
// })
