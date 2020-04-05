'use strict'

function accordionTeam(){
	let acc = document.querySelector('.employee__list');
	let items = document.querySelectorAll('.accordion');

	acc.addEventListener('click', function(event){
		let target=event.target;
		event.preventDefault();
 
		if(target.classList.contains('accordion__name')){
			let item = target.parentNode;
			let text = target.nextElementSibling;
			let textHeight = text.clientHeight;

			// firstElementChild

			for (let iterator of items){
				if(iterator !== item){
					iterator.classList.remove('show--activ');
					iterator.lastElementChild.style.height = 0;
				} //.lastElementChild
			}

      if(item.classList.contains('show--activ')){
      	item.classList.remove('show--activ');
      	text.style.height = 0;
      }else{
      	item.classList.add('show--activ');
      	text.style.height = textHeight + 'px';
      }
		}
	})
}

accordionTeam();




// function toggleMenu() {
// 	item.classList.toggle('show--activ');
// }