/*
 * Main scripts
 *
 * @author Rogier van der Linde <rogier@bitmatters.be>
 */

$(window).on('load', function() {

	// hamburger menu
	$('#hamburger').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		if ($('body').hasClass('menu-open')) {
			$('body').removeClass('menu-open');
			setTimeout(function() { $('#wrapper').css('overflow', 'hidden'); }, 400);
		} else {
			$('body').addClass('menu-open');
			$('#wrapper').css('overflow', 'visible');
		}
	});
	$(window).on('swipeleft', function(e) {
		e.preventDefault();
		e.stopPropagation();
		if ($(window).width() < 800) {
			$('body').addClass('menu-open');
			$('#wrapper').css('overflow', 'visible');
		}
	});
	$(window).on('swiperight', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('body').removeClass('menu-open');
		setTimeout(function() { $('#wrapper').css('overflow', 'hidden'); }, 400);
	});

});
