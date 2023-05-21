export const observerForAnimation = () => {
	const servicesItems = document.querySelectorAll('.services__item');
	// console.log(servicesBody);
	const options = {
		threshold: 0.4,
		rootMargin: "0px 0px 0px 0px"
	};
	const callback = (entries, observer) => {

		entries.forEach(entry => {
			const { target, isIntersecting } = entry;
			console.log(isIntersecting);

			if (isIntersecting) {
				target.classList.add('_show');
			} else {
				target.classList.remove('_show');
			}
		});

	};

	const observer = new IntersectionObserver(callback, options);

	servicesItems.forEach(servicesItem => observer.observe(servicesItem))

}