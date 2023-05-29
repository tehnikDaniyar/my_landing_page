export const modalWindows = () => {
	const modalWindows = document.querySelectorAll('.categoryes__item');
	const selector = document.querySelector('#selector')
	modalWindows.forEach(modalWindow => {
		modalWindow.addEventListener('click', (e) => {
			const target = e.target;

			//=====close button========
			if (target.classList.contains('categoryes__closeButton') || !target.closest('.categoryes__wrapper')) {
				target.closest('.categoryes__item').classList.remove('_active');
				selector.value = 'start';
				console.log(selector.value);
			};
		});
	});
}	