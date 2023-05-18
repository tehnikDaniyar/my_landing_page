// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';


export const sliderTop = () => {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		speed: 800,
		// autoHeight: true,
		autoplay: {
			delay: 1800,
			disableOnInteraction: false,
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		// on: {
		// 	init() {
		// 		this.el.addEventListener('mouseenter', () => {
		// 			this.autoplay.stop();
		// 		});

		// 		this.el.addEventListener('mouseleave', () => {
		// 			this.autoplay.start();
		// 		});
		// 	}
		// },

	});
}