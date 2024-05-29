import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slider = () => {
  const swiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination, Autoplay],
		loop: true,
		speed: 600,
		autoplay: {
			delay: 3000
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			440: {
				slidesPerView: 'auto',
				spaceBetween: 50,
			},
		},
	})
}

export default slider;
