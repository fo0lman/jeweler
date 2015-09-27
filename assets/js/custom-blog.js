(function($){

	var $body = $('body');
		

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

    $(window).on('load', function () {
        var $preloaderbg = $('.preloader-bg'),
            $preloader   = $preloaderbg.find('.preloader');
        $preloader.fadeOut();
        $preloaderbg.delay(350).fadeOut('slow');

    });

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Animated scrolling / Scroll Up
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$body.scrollspy({
			target: '.navbar-custom',
			offset: 70
		});

		
		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * A jQuery plugin for fluid width video embeds
		/* ---------------------------------------------- */

		$body.fitVids();

	});

})(jQuery);