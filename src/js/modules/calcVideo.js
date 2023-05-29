export const calcVideo = () => {
	const amountIndoorCameras = document.querySelector('#amountIndoorCameras');
	const amountOutdoorCameras = document.querySelector('#amountOutdoorCameras');
	const installationMethod = document.querySelector('#installationMethod');
	const height8m = document.querySelector('#height8m');
	const street = document.querySelector('#street');
	const undeground = document.querySelector('#undeground');
	const res = document.querySelector('#resVideo');
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
		let priceVideo;

		await fetch('../files/priceVideo.json').then(response => response.json()).then(json => priceVideo = json)
		let priceCameraIndoor = priceVideo["camerasIndoor"];
		let priceCameraOutdoor = priceVideo["camerasOutdoor"];
		let priceCable = priceVideo["cable"];
		let priceConnectors = priceVideo["connectors"];
		let priceDecore = priceVideo["decore"];
		let priceMonitorSmall = priceVideo["monitorSmall"];
		let priceMonitorBig = priceVideo["monitorBig"];
		let priceHdd = priceVideo["hdd"];
		let priceAdaptor = priceVideo["adaptor"];
		let priceDvr4Ch = priceVideo["dvr4ch"];
		let priceDvr8Ch = priceVideo["dvr8ch"];
		let priceDvr16Ch = priceVideo["dvr16ch"];
		let priceDvr32Ch = priceVideo["dvr32ch"];
		let priceMetithes = priceVideo["metithes"];
		let priceWorks = priceVideo["works"];


		camerasIndor = Math.abs(+amountIndoorCameras.value) * priceCameraIndoor;
		camerasOutdoor = Math.abs(+amountOutdoorCameras.value) * priceCameraOutdoor;
		amountCameras = (Math.abs(+amountIndoorCameras.value) + Math.abs(+amountOutdoorCameras.value));
		cable = (amountCameras * 35) * priceCable;
		connectors = (amountCameras) * 3 * priceConnectors;


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

		res.innerHTML = `ИТОГО: ${items.reduce((res, item) => res + item, 0)}`
	}
}