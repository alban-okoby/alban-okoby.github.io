$(document).ready(function () {
	// Licence | DigitalSouag by Alban Okoby

	// Menu navbar icon when user click
	$('.fa-bars').click(function () {
		$(this).toggleClass('fa-times');
		$('.navbar').toggleClass('nav-toggle');
	});

	// Remove menu icon when user scroll on page
	$(window).on('scroll load', function () {

		$('.fa-bars').removeClass('fa-times');
		$('.navbar').removeClass('nav-toggle');
	// Fixed navbar on top when user scrool > 60px
		if ($(window).scrollTop() > 60) {
			$('header').addClass('header-active');
			if ($(window).scrollTop() > 320) {
				$('header').addClass('header-active-design');
			}
		} else {
			$('header').removeClass('header-active');
			$('header').removeClass('header-active-design');
		}
		// Indicate navbar link navigation
		$('section').each(function () {
			let id = $(this).attr('id');
			let height = $(this).height();
			let offset = $(this).offset().top - 200;
			let top = $(window).scrollTop();
			if (top >= offset && top < offset + height) {
				$('.navbar ul li a').removeClass('active');
				$('.navbar').find('[href="#' + id + '"]').addClass('active');
			}
		})
	});
});