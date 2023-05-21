export const observerForHeader = () => {
	const header = document.querySelector('.header');
	const headerMarker = document.querySelector('.observerMarker');
	const options = {
		threshold: 1,
		rootMargin: "0px 0px 0px 0px"
	};
	const observer = new IntersectionObserver(callback, options);

	function callback(entries, observer) {

		entries.forEach(entry => {
			const { target, isIntersecting, intersectionRatio } = entry;
			console.log(isIntersecting);
			console.log(target);
			if (!isIntersecting) {
				console.log(target.closest('.header'));
				// target.closest('.header').classList.add('_scroll');
				header.classList.add('_scroll');
			} else {
				header.classList.remove('_scroll');
			}
		});
	};

	observer.observe(headerMarker)
}