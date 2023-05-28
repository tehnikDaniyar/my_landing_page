export const chooseCategoryes = () => {
	const selector = document.querySelector('#selector');
	const categoryesItems = document.querySelectorAll('.categoryes__item')
	const pricesVideo = document.querySelector('#prices-video');
	const pricesAlarmSystem = document.querySelector('#prices-alarmSystem');
	const pricesAccesControl = document.querySelector('#prices-accesControl');

	selector.addEventListener('change', function () {
		console.log('change');

		categoryesItems.forEach(item => item.classList.remove('_active'));
		const value = this.value;
		if (value === 'video') {
			pricesVideo.classList.add('_active');
		};

		if (value === 'alarm-system') {
			pricesAlarmSystem.classList.add('_active');
		};

		if (value === 'acces-control') {
			pricesAccesControl.classList.add('_active');
		};
	});
}