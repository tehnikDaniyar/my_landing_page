export const observerForAnimation = () => {
	const servicesBody = document.querySelector('.services');
	console.log(servicesBody);
	const options = {
		threshold: 0,
		rootMargin: "0px 0px -300px 0px"
	};
	const callback = (entries, observer) => {

		entries.forEach(entry => {
			const { target, isIntersecting } = entry;
			console.log(isIntersecting);

			if (isIntersecting) {
				target.querySelector('.services__body').classList.add('_show');
			} else {
				target.querySelector('.services__body').classList.remove('_show');
			}
		});

	};

	const observer = new IntersectionObserver(callback, options);

	observer.observe(servicesBody);
}