export const renameImg = function () {

	document.addEventListener("DOMContentLoaded", function () {
		const body = document.querySelector('body');

		if (body.classList.contains('webp')) {
			const imgs = document.querySelectorAll('img[data-src]');

			if (imgs.length > 0) {
				imgs.forEach(img => {
					checkSrc(img);
				});

				async function checkSrc(img) {
					const webpSrc = img.dataset.src;
					const response = await fetch(webpSrc);

					if (response.ok) {
						img.src = webpSrc;
					};
				};
			};
		};
	});
};