export const observerForHeader = () => {
	const header = document.querySelector('.header');
	const options = {
		threshold: 1,
	};
	const observer = new IntersectionObserver(callback, options);

	function callback(entries, observer) {

		entries.forEach(entry => {
			const { target, isIntersecting, intersectionRatio } = entry;

			if (!isIntersecting) {
				target.nextElementSibling.classList.add('_scroll');
			} else {
				target.nextElementSibling.classList.remove('_scroll');
			}
		});
	};

	observer.observe(document.querySelector('.markerObserver'))
}