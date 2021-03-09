$(document).ready(function() {

	$('.scroll').on('click', function(event) {

			event.preventDefault();

			var href = $(this).attr('href'),

				offset = $(href).offset().top;

		$('html, body').animate({scrollTop: offset}, 500);
	});

	function show() {

		$('.modal').fadeIn();

		$('.modal-toggle').fadeIn();

		$('.modal').css('display', 'flex');

		$('html, body').attr('style', 'overflow: hidden');

		$('meta').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');

		$('.modal-toggle').css('display', 'block');

		$('.modal-toggle-await').fadeOut();

		$('.modal-toggle-await').css('display', 'none');
	};

	$('.modal-open').on('click', function() {

		show();
	});

	$('.window__input_phone').mask('+7 (999) 999 99-99');

	function close() {

		clearTimeout(timer);

		$('.modal').fadeOut();

		timer = setTimeout(function() {

			$('.modal').css('display', 'none');
		}, 400);

		$('html, body').attr('style', '');

		$('meta').attr('content', 'width=device-width, initial-scale=1.0');
	};

	var timer;

	$('.close').on('click', function() {

		close();
	});

	$('.modal').on('click', function(shadowClose) {

		if (shadowClose.target == this) {

			close();
		};
	});

	function awaitShow() {
		
		$('.modal-toggle').fadeOut();

		$('.modal-toggle').css('display', 'none');

		setTimeout(function() {

			$('.modal-toggle-await').fadeIn();

			$('.modal-toggle-await').css('display', 'block');

		}, 400);
	};

	function awaitHide() {

		$('.modal-toggle-await').fadeOut();

		$('.modal-toggle-await').css('display', 'none');
	};

	function elemShow() {

		setTimeout(function() {

			$('.modal-toggle').fadeIn();

			$('.modal-toggle').css('display', 'block');
		}, 400);
	};

	$('.window__submit').on('click', function() {

		awaitShow();
	});

	$('.window__submit-again').on('click', function() {

		awaitHide();

		elemShow();
	});

	$('.menu').on('click', function() {

		$('.header__menu').slideToggle();

		$('.menu').toggleClass('menu_opened');
	});
})