$(document).ready(function() {


	$('.js-obj').cycle({
		fx: "carousel",
		// manualSpeed: 800,
		timeout: 0,
		log: false,
		carouselVisible: 3,
		// allowWrap: false,
		// autoHeight: "container",
		// hideNonActive: false,
		slideActiveClass: "is-active",
		// pagerActiveClass: "is-active",
		disabledClass: "is-disabled",
		slideClass: "object",
		//pager: ".case__pager",
		slides: ".object",
		next: ".objects__next",
		prev: ".objects__prev",
		// pagerTemplate: "<li></li>"
	});


	$(' .btn-toggle ').on('click', function() {
		$( this ).parents( '.js-drop' )
			.toggleClass( 'is-open' );

		$( this ).parents( '.js-drop' )
			.find( '.dropdown__content' )
				.slideToggle('fast');

		return false;
	});

	$('.js-points a').each(function() {
		$(document).on('mouseenter','.js-points a', function(){
			$('.building__point').removeClass('is-active');
			var elementName = $(this).data('target');
			$('div.'+elementName).addClass('is-active');
		}).on('mouseleave','.js-points a', function(){
				var elementName = $(this).data('target');
				$('div.'+elementName).removeClass('is-active');
		});
	});

	$('.js-points a').on('click', function() {
		return false;
	});

});