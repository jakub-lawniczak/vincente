$(document).ready(function () {
	var jsNavIcon = $('.js--nav-icon');
	var icon = $('#js--nav-icon-svg');
	var nav = $('#js--main-nav');
	/* For sticky navigation */
	var logo = $('#logo');
	$('.js--section-features').waypoint(
		function (direction) {
			console.log('waypoint');
			if (direction == 'down') {
				$('nav').addClass('sticky');
				$('#js--nav-icon-svg').addClass('icon-active');
				logo[0].src = 'resources/img/logo-dark.svg';
			} else {
				$('nav').removeClass('sticky');
				$('#js--nav-icon-svg').removeClass('icon-active');
				logo[0].src = 'resources/img/logo.svg';
			}
		},
		{
			offset: '70px;',
		}
	);

	/* Scroll buttons */
	$('.js--scroll-to-contact').click(function () {
		$('html, body').animate({ scrollTop: $('.js--section-contact').offset().top }, 1500);
	});
	$('.js-scroll-to-features').click(function () {
		$('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
	});

	/* Navigation scroll*/

	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate(
						{
							scrollTop: target.offset().top - 60,
						},
						1000
					);
					return false;
				}
			}
		});
	});

	/* Scroll animation */

	$('.js--wp-1').waypoint(
		function (direction) {
			$('.js--wp-1').addClass('animated fadeIn');
		},
		{
			offset: '50%',
		}
	);

	$('.js--wp-2').waypoint(
		function (direction) {
			$('.js--wp-2').addClass('animated zoomIn');
		},
		{
			offset: '60%',
		}
	);

	$('.js--wp-3').waypoint(
		function (direction) {
			$('.js--wp-3').addClass('animated fadeIn');
		},
		{
			offset: '60%',
		}
	);

	$('.js--wp-4').waypoint(
		function (direction) {
			$('.js--wp-4').addClass('animated pulse');
		},
		{
			offset: '60%',
		}
	);
	/* Mobile nav */
	jsNavIcon.click(function () {
		icon[0].classList.toggle('icon-active');
		nav[0].classList.toggle('flex');
	});

	$('.main-nav > li > a').on('click', function () {
		nav[0].classList.remove('flex');
		icon[0].classList.remove('icon-active');
	});

	// var links = $('.main-nav > li > a');
	// links.forEach((link) => {
	// 	link.addEventListener('click', function () {
	// 		nav[0].classList.remove('flex');
	// 	});
	// });
	/* Map */
	var map = new GMaps({
		div: '#map',
		lat: 39.6607198,
		lng: -0.2079836,
		zoom: 14,
	});
	map.addMarker({
		lat: 39.6607198,
		lng: -0.2279836,
		title: 'Puerto de Sagunto',
		infoWindow: {
			content: '<p>Mi despacho</p>',
		},
	});
	var swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		// pagination: {
		// 	el: '.swiper-pagination',
		// },

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
});
