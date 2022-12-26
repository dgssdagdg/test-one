window.addEventListener('click', function(event) {

	if (event.target.closest('.structure-block-item')) {
		let blcok = event.target.closest('.structure-block');
		let blockText = blcok.querySelector('.structure-block-box');
		blockText.classList.toggle('structure-block-box-active')
		let item = event.target;
		item.classList.toggle('structure-block-item-active');
	}

	let text = document.querySelector('.about-text-main');
	if (event.target.closest('.one-block') && event.target.closest('.about-blocks')){
		let one = document.querySelector('.one').innerText;
		let item = document.querySelector('.one-block');
		item.classList.add('about-block-active');
		text.innerText = one;
	} else {
		let item = document.querySelector('.one-block');
		item.classList.remove('about-block-active');
	}

	if (event.target.closest('.two-block') && event.target.closest('.about-blocks')) {
		let one = document.querySelector('.two').innerText;
		let item = document.querySelector('.two-block');
		item.classList.add('about-block-active');
		text.innerText = one;
	} else {
		let item = document.querySelector('.two-block');
		item.classList.remove('about-block-active');
	}

	if (event.target.closest('.three-block') && event.target.closest('.about-blocks')) {
		let one = document.querySelector('.three').innerText;
		let item = document.querySelector('.three-block');
		item.classList.add('about-block-active');
		text.innerText = one;
	} else {
		let item = document.querySelector('.three-block');
		item.classList.remove('about-block-active');
	}

	if (event.target.closest('.four-block') && event.target.closest('.about-blocks')) {
		let one = document.querySelector('.four').innerText;
		let item = document.querySelector('.four-block');
		item.classList.add('about-block-active');
		text.innerText = one;
	} else {
		let item = document.querySelector('.four-block');
		item.classList.remove('about-block-active');
	}
	let body = document.body;
	let menu = document.querySelector('.menu');
	let menuBtn = document.querySelector('.menu-btn');
	if (event.target.closest('.menu-btn')) {
		menu.classList.toggle('active');
		menuBtn.classList.toggle('active');
		body.classList.toggle('overflow');
	} else if (!event.target.closest('menu') && menu.closest('.active')) {
		menu.classList.remove('active');
		menuBtn.classList.remove('active');
		body.classList.remove('overflow');
	}

})


