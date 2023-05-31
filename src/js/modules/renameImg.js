export const renameImg = function () {
	const body = document.querySelector('body');
	body.classList.add('test')
	console.log('qqqqqqqqqqqqqqq');

	if (true) {
		const images = document.querySelectorAll('img');
		images.forEach(img => {
			let src = img.src;
			src = src.replace(/\.jpg/g, '.webp');
			img.src = src;
		});
	} else {
		console.log('body is havent class webp');
	}
};