export const scrolling = () => {
	const links = document.querySelectorAll('a[href*="#"]');
	const iconMenu = document.querySelector('.icon-menu');
	const headerList = document.querySelector('.header__list');
	const body = document.querySelector('body');


	for (let link of links) {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const blockId = link.getAttribute('href');

			document.querySelector(`${blockId}`).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});

			iconMenu.classList.remove('_active');
			headerList.classList.remove('_show');
			body.classList.remove('_scrollOff');

		})
	}
}	