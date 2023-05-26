
export const pricesCalc = () => {

	//======================choose categoryes===========================================
	const selector = document.querySelector('#selector');
	const categoryesItems = document.querySelectorAll('.categoryes__item')
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
	const res = document.querySelector('.categoryes__res');
	getResCalcVideo();

	const inputs = [amountIndoorCameras, amountOutdoorCameras, installationMethod, height8m, street, undeground];
	inputs.forEach(input => {
		input.addEventListener('change', getResCalcVideo);
	})

	async function getResCalcVideo() {
		let camerasIndor;
		let camerasOutdoor;
		let amountCameras;
		let cable;
		let connectors;
		let decore;
		let adaptor;
		let monitor;
		let hdd;
		let dvr;
		let metithes;
		let works;
		let price;

		await fetch('../files/price.json').then(response => response.json()).then(json => price = json)
		let priceCameraIndoor = price["camerasIndoor"];
		let priceCameraOutdoor = price["camerasOutdoor"];
		let priceCable = price["cable"];
		let priceConnectors = price["connectors"];
		let priceDecore = price["decore"];
		let priceMonitorSmall = price["monitorSmall"];
		let priceMonitorBig = price["monitorBig"];
		let priceHdd = price["hdd"];
		let priceAdaptor = price["adaptor"];
		let priceDvr4Ch = price["dvr4ch"];
		let priceDvr8Ch = price["dvr8ch"];
		let priceDvr16Ch = price["dvr16ch"];
		let priceDvr32Ch = price["dvr32ch"];
		let priceMetithes = price["metithes"];
		let priceWorks = price["works"];


		camerasIndor = Math.abs(+amountIndoorCameras.value) * priceCameraIndoor;
		camerasOutdoor = Math.abs(+amountOutdoorCameras.value) * priceCameraOutdoor;
		amountCameras = (Math.abs(+amountIndoorCameras.value) + Math.abs(+amountOutdoorCameras.value));
		cable = (amountCameras * 35) * priceCable;
		connectors = (amountCameras) * 3 * priceConnectors;

		console.log(installationMethod.value);

		if (installationMethod.value === 'decor') {
			decore = (amountCameras * 35) * 0.6 * priceDecore;
		} else if (installationMethod.value === 'combined') {
			decore = (amountCameras * 35) * 0.3 * priceDecore;
		} else {
			decore = 0;
		}

		if (amountCameras <= 8) {
			monitor = priceMonitorSmall;
		} else {
			monitor = priceMonitorBig;
		};

		hdd = Math.ceil(amountCameras / 8) * priceHdd;

		adaptor = Math.ceil(amountCameras / 8) * priceAdaptor;

		if (amountCameras <= 8) {
			dvr = priceDvr4Ch;
		} else if (amountCameras > 8 && amountCameras <= 16) {
			dvr = priceDvr8Ch;
		} else if (amountCameras > 16 && amountCameras <= 32) {
			dvr = priceDvr16Ch;
		} else {
			dvr = priceDvr32Ch;
		};

		metithes = priceMetithes;

		works = amountCameras * priceWorks;

		if (height8m.checked) {
			works += works * 0.2;
		};

		if (street.checked) {
			works += works * 0.3;
		};

		if (undeground.checked) {
			works += works * 0.5;
		};

		let items = [camerasIndor, camerasOutdoor, cable, connectors, decore, adaptor, monitor, hdd, dvr, metithes, works];

		console.log(items);
		res.innerHTML = `ИТОГО: ${items.reduce((res, item) => res + item, 0)}`
	}
}