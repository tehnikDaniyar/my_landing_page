export const feedback = () => {
	window.addEventListener('load', () => {
		const form = document.querySelector('.feedback__form');

		form.addEventListener('submit', function (e) {
			e.preventDefault();
			let error = checkValid(this);

			if (!error > 0) {
				sendForm(this);
			};
		});

		function checkValid(form) {
			let inputName = form.querySelector('#name');
			let inputTel = form.querySelector('#tel');
			let inputSelect = form.querySelector('#select');
			let error = 0;

			if (inputName.value === "") {
				inputName.classList.add("error");
				inputName.parentElement.classList.add("error");
				error++;
			} else {
				inputName.classList.remove("error");
				inputName.parentElement.classList.remove("error");

			};

			if (/^(0|\+996)\d+$/g.test(inputTel.value) && 10 === inputTel.value.length || inputTel.value.length === 13) {
				inputTel.classList.remove('error');
				inputTel.parentElement.classList.remove('error'); //parentElement
			} else {
				inputTel.classList.add('error');
				inputTel.parentElement.classList.add('error'); //parentElement
				error++;
			};

			if (inputSelect.value === "none") {
				inputSelect.classList.add('error');
				inputSelect.parentElement.classList.add('error');
				error++;

			} else {
				inputSelect.classList.remove('error');
				inputSelect.parentElement.classList.remove('error');
			};

			return error;
		};

		async function sendForm(form) {

			let formDate = new FormData(form);
			console.log(formDate.get('name'), formDate.get('tel'), formDate.get('select'), formDate.get('message'));

			let response = await fetch('../files/server/form.json', { ///files/server/form.json
				method: "POST",
				body: formDate
			});


			if (response.ok) {
				let confirmation = document.querySelector('.feedback__confirmation');
				confirmation.classList.add('show')
				setTimeout(() => confirmation.classList.remove('show'), 3000);
				form.reset();
				console.log(response);
			} else {
				alert('sendError')
			}
		};
	});
}