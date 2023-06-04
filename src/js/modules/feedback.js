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
			let inputAgreement = form.querySelector('#agreement');
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


			if (!inputAgreement.checked) {
				inputAgreement.classList.add('error');
				inputAgreement.parentElement.classList.add('error');
				error++;

			} else {
				inputAgreement.classList.remove('error');
				inputAgreement.parentElement.classList.remove('error');
			}

			error > 0 ? scrollToElement(form) : null;

			return error;
		};

		async function sendForm(form) {
			let formDate = new FormData(form);
			try {

				form.classList.add('await');

				await fetch('http://daniyardev.atwebpages.com/files/sendmailer.php', {
					method: "POST",
					body: formDate
				});

				form.classList.remove('await');
				let confirmationOk = document.querySelector('.feedback__confirmation_ok');
				confirmationOk.classList.add('show')
				setTimeout(() => confirmationOk.classList.remove('show'), 3000);
				scrollToElement(form);
				form.reset();
			} catch (error) {
				form.classList.remove('await');
				let confirmationError = document.querySelector('.feedback__confirmation_error');
				confirmationError.classList.add('show')
				setTimeout(() => confirmationError.classList.remove('show'), 3000);
				scrollToElement(form);
				form.reset();
			}

		};
	});

	function scrollToElement(element) {
		if (element) {
			const positonElement = element.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: positonElement,
				behavior: "smooth"
			})
		}
	}
}