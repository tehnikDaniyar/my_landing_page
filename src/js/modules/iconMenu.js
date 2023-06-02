export const iconMenu = () => {
	const iconMenu = document.querySelector('.icon-menu');
	const headerList = document.querySelector('.header__list');
	const body = document.querySelector('body');

	const links = document.querySelectorAll('a[href*="#"]');


	if (iconMenu) {
		iconMenu.addEventListener('click', () => {
			iconMenu.classList.toggle('_active');

			if (iconMenu.classList.contains('_active')) {
				headerList.classList.add('_show');
				body.classList.add('_scrollOff');
			} else {
				headerList.classList.remove('_show');
				body.classList.remove('_scrollOff');
			};
		});
	};

	//===============scrolling===============

	if (links.length > 0) {
		for (let link of links) {
			link.addEventListener('click', function (e) {
				const blockId = link.getAttribute('href');

				document.querySelector(`${blockId}`).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});

				iconMenu.classList.remove('_active');
				headerList.classList.remove('_show');
				body.classList.remove('_scrollOff');
				e.preventDefault();
			});
		};
	};
}