let mySwiper = new Swiper('.swiper-container', {

	slidesPerView: 3,

	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
});

function windowCheck(windowCheck) {
	var width = $(window).width();

	if (width=>1920) mySwiper.params.slidesPerView = 3;

	if (width<=1211) mySwiper.params.slidesPerView = 2;

	if (width<=799) mySwiper.params.slidesPerView = 1;
}

setInterval(windowCheck, 1);