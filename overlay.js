// const openBtn = document.querySelector('#btn');
// const successOverlay = createOverlay("Привет, <b>loftschool</b>!");

// openBtn.addEventListener("click", function(e) {
// 	e.preventDefault();
//   document.body.appendChild(successOverlay);
// });

// function createOverlay(content) {
//   const overlayElement = document.createElement("div");
//   overlayElement.classList.add("overlay");

//   const template = document.querySelector("#overlayTemplate");
//   overlayElement.innerHTML = template.innerHTML;
//   overlayElement.addEventListener("click", function(e) {
//     if (e.target === overlayElement) {
//       closeElement.click();
//     }
//   });

//   const closeElement = overlayElement.querySelector(".button");
//   closeElement.addEventListener("click", function(e) {
//     e.preventDefault();
//     document.body.removeChild(overlayElement);
//   });

//   const contentElement = overlayElement.querySelector(".modal__title");
//   contentElement.innerHTML = content;

//   return overlayElement;
// }


function Overlay(templateSelector) {
  const template = document.querySelector(templateSelector);
  const overlay = createOverlay(template);
  const backGround = overlay.querySelector('.overlay');
  const msgContainer = overlay.querySelector('.modal__title');
  const closeBtn = overlay.querySelector('button');
  
  //создание модалки
  function createOverlay() {
    let overlay = document.createElement('div');
    overlay.innerHTML = template.innerHTML;
    return overlay;
  }

  //Появление модалки(добавление в DOM-дерево)
  this.openOverlay = (message) => {
    document.body.appendChild(overlay);
    msgContainer.textContent = message;
    document.body.style.overflow = 'hidden';
  }

  //Удаление модалки(из DOM-дерева)
  this.closeOverlay = () => {
    document.body.removeChild(overlay);
    document.body.style.overflow = '';
  }

  // Метод изменяет текст сообщения в модалке
  this.changeMessage = (newMessage) => {
    msgContainer.textContent = newMessage;
  }

  //Метод, кот-й использ-ся в обработчике событий на кнопку закрыть и внешнюю область модалки
  var eventHandler =  (e) => {
    e.preventDefault();
    if(e.target === closeBtn || e.target === backGround) {
      this.closeOverlay();
    }
  }

  var isCloseBtnVisible = true;
  //Переключение видимости кнопки закрыть, и возможности нажать на внешнюю рамку
  this.toggleClsButtonVisibility = () => {
    
    if(isCloseBtnVisible) {
      closeBtn.style.display = 'none';
      isCloseBtnVisible = false;
      overlay.removeEventListener('click', eventHandler);
    } else {
      closeBtn.style.display = '';
      isCloseBtnVisible = true;
      overlay.addEventListener('click', eventHandler);
    }
  }

  overlay.addEventListener('click', eventHandler);

}