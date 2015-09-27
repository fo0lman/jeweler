(function($){

	var $body = $('body'),
		$testimonials = $('.testimonials'),
		$lastBlogEntries = $('.last-entries-blog');
		$filterLi = $('#filter li'),
		$contactFormButton = $('#contact-form button');

    /* ---------------------------------------------- /*
	 * Background image.
	/* ---------------------------------------------- */

		$(".js-height-full").height($(window).height());

		$(window).resize(function(){
			$(".js-height-full").height($(window).height());
		});

		$('#home').backstretch([
		    //Рисунки слайдера	на главной	    
			'http://jeweler.dp.ua/themes/jeweler/assets/images/home1.jpg',
			'http://jeweler.dp.ua/themes/jeweler/assets/images/home2.jpg'
			//Рисунки слайдера	на главной	 
		], {duration: 3000, fade: 750});

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
		 * Twitter
		/* ---------------------------------------------- */

		var twitterConfig = {
			id: '345170787868762112',
			domId: '',
			maxTweets: 3,
			enableLinks: true,
			showUser: false,
			customCallback: handleTweets
		};

		twitterFetcher.fetch(twitterConfig);

		function handleTweets(tweets) {
			var x = tweets.length;
			var n = 0;
			var html = '';
			while(n < x) {
				html += '<div class="owl-item">' + tweets[n] + '</div>';
				n++;
			}
			$testimonials.html(html);

			$('.twitter_retweet_icon').html('<i class="fa fa-retweet"></i>');
			$('.twitter_reply_icon').html('<i class="fa fa-reply"></i>');
			$('.twitter_fav_icon').html('<i class="fa fa-star"></i>');

			$testimonials.owlCarousel({
				singleItem: true,
				navigation: false,
				pagination: false,
				slideSpeed : 300,
				paginationSpeed : 400,
				autoPlay: 5000,
				navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
			});
		}

		/* ---------------------------------------------- /*
		 * Last blog entries
		/* ---------------------------------------------- */

		$lastBlogEntries.owlCarousel({
            singleItem: true,
            navigation: false,
            pagination: false,
            slideSpeed : 300,
            paginationSpeed : 400,
            autoPlay: 5000,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

		/* ---------------------------------------------- /*
		 * Initialize shuffle plugin
		/* ---------------------------------------------- */

		var $portfolioContainer = $('.portfolio-items-container');

		$filterLi.on('click', function (e) {
			e.preventDefault();

			$filterLi.removeClass('active');
			$(this).addClass('active');

			group = $(this).attr('data-group');
			var groupName = $(this).attr('data-group');

			$portfolioContainer.shuffle('shuffle', groupName );
		});

		$('.simple-ajax-popup').magnificPopup({
			type: 'ajax',
			callbacks: {
				parseAjax: function(mfpResponse) {
					$.getScript('http://jeweler.dp.ua/themes/jeweler/assets/js/jquery.fitvids.js');
					$.getScript('http://jeweler.dp.ua/themes/jeweler/assets/js/custom-portfolio.js');
				}
			}
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

		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').submit(function(e) {

			e.preventDefault();

			
			var s_name = $('#c_name');
			var s_tel = $('#c_tel');
			var s_email = $('#c_email');
			var s_message = $('#c_message ');

			var c_name = $('#c_name').val();
			var c_tel = $('#c_tel').val();
			var c_email = $('#c_email').val();
			var c_message = $('#c_message ').val();
			
			var responseMessage = $('.ajax-response');
			var responseMessageName = $('#contact-form .ajax-response-name');
			var responseMessageTel = $('#contact-form .ajax-response-tel');
			var responseMessageEmail = $('#contact-form .ajax-response-email');
			var responseMessageMessage = $('#contact-form .ajax-response-message');

			/* -------------------------------------------------------------------------------------------- */
			if ( c_name== '') {
				responseMessageName.fadeIn(500);
				responseMessageName.html('<i class="fa fa-warning"></i> Введите Ваше имя.');
				s_name.css( "border-color", "#e74b3c");
			} else {
				responseMessageName.empty();
				s_name.css( "border-color", "#d8e1e4");
			}
			if ( c_tel== '') {
				responseMessageTel.fadeIn(500);
				responseMessageTel.html('<i class="fa fa-warning"></i> Введите Ваш телефон или логин Skype.');
				s_tel.css( "border-color", "#e74b3c");
			} else {
				responseMessageTel.empty();
				s_tel.css( "border-color", "#d8e1e4");
			}  
			if ( c_email== '') {
				responseMessageEmail.fadeIn(500);
				responseMessageEmail.html('<i class="fa fa-warning"></i> Введите Ваш e-mail.');
				s_email.css( "border-color", "#e74b3c");
			} else {
				responseMessageEmail.empty();
				s_email.css( "border-color", "#d8e1e4");
			} 
			if (!isValidEmailAddress(c_email)) {
				responseMessageEmail.fadeIn(500);
				responseMessageEmail.html('<i class="fa fa-warning"></i> Введён некорректный e-mail.');
				s_email.css( "border-color", "#e74b3c");
			} else {
				responseMessageEmail.empty();
				s_email.css( "border-color", "#d8e1e4");
			}  
			if ( c_message== '') {
				responseMessageMessage.fadeIn(500);
				responseMessageMessage.html('<i class="fa fa-warning"></i> Введите Ваше сообщение.');
				s_message.css( "border-color", "#e74b3c");
			}else {
				responseMessageMessage.empty();
				s_message.css( "border-color", "#d8e1e4");
			} 
			/* -------------------------------------------------------------------------------------------- */

			if (!( c_name== '') && !(c_email == '') && !(c_message == '') && isValidEmailAddress(c_email))  {
				
				$.ajax({
					type: 'POST',
					url: 'http://jeweler.dp.ua/themes/jeweler/assets/php/mailer.php',
					dataType: 'json',
					data: {
						c_email: c_email,
						c_name: c_name,
						c_tel: c_tel,
						c_message: c_message
					},
					cache: false,
					beforeSend: function(result) {
						$contactFormButton.empty();
						$contactFormButton.append('<i class="fa fa-cog fa-spin"></i> Отправкка...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$('#contact-form .ajax-hidden').fadeOut(500);
							responseMessage.html(result.message).fadeIn(500);
						} else {
							$contactFormButton.empty();
							$contactFormButton.append('<i class="fa fa-retweet"></i> Попробуйте снова.');
							responseMessage.html(result.message).fadeIn(500);
						}
					}
				});
			}

			return false;

		});

		/* ---------------------------------------------- /*
		 * Google Map
		/* ---------------------------------------------- */

		var mapLocation = new google.maps.LatLng(48.464586,35.0437493,15);
		
		map = new GMaps({
			streetViewControl : false,
			overviewMapControl: false,
			mapTypeControl: false,
			zoomControl : false,
			panControl : false,
			scrollwheel: false,
			center: mapLocation,
			el: '#map',
			zoom: 16,
			styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		});

		var image = new google.maps.MarkerImage('http://jeweler.dp.ua/themes/jeweler/assets/images/map-icon.png',
			new google.maps.Size(80, 80),
			new google.maps.Point(0, 0),
			new google.maps.Point(40, 40)
		);

		map.addMarker({
			position: mapLocation,
			icon: image,
			animation: google.maps.Animation.BOUNCE
		});

	});

})(jQuery);