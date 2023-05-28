export const calcAlarmSystem = () => {
	const amountRooms = document.querySelector('#amountRooms');
	const amountWindows = document.querySelector('#amountWindows');
	const amountDoors = document.querySelector('#amountDoors');
	const installationMethodAlarm = document.querySelector('#installationMethodAlarm');
	const hidden = document.querySelector('#hidden');
	const height = document.querySelector('#height');
	const expencive = document.querySelector('#expencive');
	const res = document.querySelector('#resAlarmSysytem	');

	const inputs = [amountRooms, amountWindows, amountDoors, installationMethodAlarm, hidden, height, expencive];
	console.log(inputs);

	getResCalcAlarm();
	inputs.forEach(input => {
		input.addEventListener('change', getResCalcAlarm);
	})

	async function getResCalcAlarm() {
		let motionSensor;
		let glassBreackSensor;
		let openSensor;
		let amountSensors;
		let amountCable;
		let cable;
		let decore;
		let reservePower;
		let accumulator;
		let controlPanel;
		let siren;
		let tmKeys;
		let priceAlarmSystem;

		await fetch('../files/priceAlarmySystem.json').then(response => response.json()).then(json => priceAlarmSystem = json);

		console.log(priceAlarmSystem);

		let priceMotionSensor = priceAlarmSystem["motionSensor"];
		let priceGlassBreackSensor = priceAlarmSystem["glassBreackSensor"];
		let priceOpenSensor = priceAlarmSystem["openSensor"];
		let priceCable = priceAlarmSystem["cable"];
		let priceDecore = priceAlarmSystem["decore"];
		let priceReservePower = priceAlarmSystem["reservePower"];
		let priceAccumulator = priceAlarmSystem["accumulator"];
		let priceControlPanel = priceAlarmSystem["controlPanel"];
		let priceSiren = priceAlarmSystem["siren"];
		let priceTmKeys = priceAlarmSystem["tmKeys"];
		let priceWorks = priceAlarmSystem["works"];

		let prices = [priceMotionSensor, priceGlassBreackSensor, priceOpenSensor, priceCable, priceDecore, priceReservePower, priceAccumulator, priceControlPanel, priceSiren, priceTmKeys, priceWorks];

		console.log(prices);

		// "motionSensor": 900,
		// "glassBreackSensor": 1200,
		// "openSensor": 150,
		// "cable": 15,
		// "decore": 25,
		// "reservePower": 2500,
		// "accumulator": 1500,
		// "controlPanel": 13000,
		// "siren": 500,
		// "tmKeys": 600,
		// "works": 0.5


		motionSensor = Math.abs(+amountRooms.value) * priceMotionSensor;
		glassBreackSensor = Math.abs(+amountRooms.value) * priceGlassBreackSensor;
		openSensor = (Math.abs(+amountWindows.value) + Math.abs(+amountDoors.value)) * priceOpenSensor;
		amountSensors = Math.abs(+amountRooms.value) + Math.abs(+amountWindows.value) + Math.abs(+amountDoors.value);
		amountCable = Math.abs(+amountRooms.value) * 40;
		cable = amountCable * priceCable;

		console.log(installationMethodAlarm.value);
		if (installationMethodAlarm.value === 'decore') {
			decore = amountCable * 0.7 * priceDecore;
		} else if (installationMethodAlarm.value === 'combined') {
			decore = amountCable * 0.4 * priceDecore;
		} else {
			decore = 0;
		}

		reservePower = Math.ceil(amountSensors / 10) * priceReservePower;
		accumulator = (Math.ceil(amountSensors / 10) + 1) * priceAccumulator;
		controlPanel = priceControlPanel;
		siren = priceSiren;
		tmKeys = priceTmKeys;

		let items = [motionSensor, glassBreackSensor, openSensor, cable, decore, reservePower, accumulator, controlPanel, siren, tmKeys];

		console.log(items);

		let summMateriales = items.reduce((res, item) => res + item, 0);

		let works = summMateriales * priceWorks;

		if (hidden.checked) {
			works += works * 0.2;
		};

		if (height.checked) {
			works += works * 0.3;
		};

		if (expencive.checked) {
			works += works * 0.5;
		};

		res.innerHTML = `ИТОГО: ${works + summMateriales}`
	}
}