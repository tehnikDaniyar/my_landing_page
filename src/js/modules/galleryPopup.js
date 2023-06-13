export const galleryPopup = () => {
	const gallery = document.querySelector('.gallery');
	const popup = document.querySelector('.popup-gallery');
	const popupImg = document.querySelector('.popup-gllery__body img');

	console.log(gallery);

	gallery.addEventListener('click', function (event) {
		const target = event.target;
		console.log(target.tagName);

		if (target.tagName === "IMG") {
			const src = target.src;
			popupImg.src = src;
			popup.classList.toggle('open');
		}
	})
}