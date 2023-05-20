export const observerForHeader = () => {
	const header = document.querySelector('.header:before');
	console.log(header);
	const options = {
		threshold: 1,
		rootMargin: "-40px 0px 0px 0px"
	};
	const observer = new IntersectionObserver(callback, options);

	function callback(entries, observer) {

		entries.forEach(entry => {
			const { target, isIntersecting, intersectionRatio } = entry;
			console.log(isIntersecting);
			console.log(target);
			if (isIntersecting) {
				target.classList.add('_scroll');
			} else {
				target.classList.remove('_scroll');
			}
		});
	};

	observer.observe(header)
}