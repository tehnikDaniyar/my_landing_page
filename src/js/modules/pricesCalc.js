
export const pricesCalc = () => {

	//======================choose categoryes===========================================
	const selector = document.querySelector('#selector');
	const categoryesItems = document.querySelectorAll('.categoryes__item')
	console.log(categoryesItems);
	const pricesVideo = document.querySelector('#prices-video');
	const pricesAlarmSystem = document.querySelector('#prices-alarmSystem');
	const pricesAccesControl = document.querySelector('#prices-accesControl');

	selector.addEventListener('change', function () {
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


	//======================calc video===========================================
	const amountIndoorCameras = document.querySelector('#amountIndoorCameras');
	const amountOutdoorCameras = document.querySelector('#amountOutdoorCameras');
	const installationMethod = document.querySelector('#installationMethod');
	const height8m = document.querySelector('#height8m');
	const street = document.querySelector('#street');
	const undeground = document.querySelector('#undeground');
	const res = document.querySelector('.calc-video__res');

	const inputs = [amountIndoorCameras, amountOutdoorCameras, installationMethod, height8m, street, undeground];
	inputs.forEach(input => {
		input.addEventListener('change', getResCalcVideo);
	})

	function getResCalcVideo() {
		let camerasIndor;
		let camerasOutdoor;
		let cable;
		let connectors;
		let decore;
		let adaptor;
		let monitor;
		let hdd;
		let dvr;
		let metithes;
		let works;


		camerasIndor = Math.abs(+amountIndoorCameras.value) * 1800;
		camerasOutdoor = Math.abs(+amountOutdoorCameras.value) * 2200;
		cable = (camerasIndor + camerasOutdoor) * 35 * 40;
		connectors = (camerasIndor + camerasOutdoor) * 3 * 50;

		if (installationMethod.value === 'decore') {
			decore = cable * 0.6 * 35;
		} else if (installationMethod.value === 'combined') {
			decore = cable * 0.3 * 35;
		} else {
			decore = 0;
		}

		if ((camerasIndor + camerasOutdoor) <= 8) {
			monitor = 8000;
		} else {
			monitor = 14000;
		};

		hdd = Math.ceil(((camerasIndor + camerasOutdoor) / 8) * 4500);
		adaptor = Math.ceil(((camerasIndor + camerasOutdoor) / 8) * 1500);

		if ((camerasIndor + camerasOutdoor) <= 8) {
			dvr = 4000;
		} else if ((camerasIndor + camerasOutdoor) > 8 && (camerasIndor + camerasOutdoor) <= 16) {
			dvr = 6000;
		} else if ((camerasIndor + camerasOutdoor) > 16 && (camerasIndor + camerasOutdoor) <= 32) {
			dvr = 9000;
		} else {
			dvr = 16000;
		};

		metithes = 3000;

		works = (camerasIndor + camerasOutdoor) * 2500;

		if (height8m.checked) {
			works += works * 0.1;
		};

		if (street.checked) {
			works += works * 0.1;
		};

		if (undeground.checked) {
			works += works * 0.2;
		};

		let items = [camerasIndor, camerasOutdoor, cable, connectors, decore, adaptor, monitor, hdd, dvr, metithes, works];

		console.log(items);
		res.innerHTML = `ИТОГО ${items.reduce((res, item) => res + item, 0)}`
	}
}