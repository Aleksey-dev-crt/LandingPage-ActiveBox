$(function() {
	// Fixed header
	let header = $("#header");
	let intro = $("#intro");
	let headerH = header.innerHeight();
	let ScrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		headerH = header.innerHeight();

		ScrollPos = $(this).scrollTop();

		if (ScrollPos >= headerH) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");	
		}

	});

	// Smooth scroll
	$("[data-scroll]").click(function(event){
		event.preventDefault();

		let blockID = $(this).data('scroll');
		let blockOffset = $(blockID).offset().top;

		$('#nav').removeClass("active");
		$("#navToggle").removeClass("active");
		
		
		$("html, body").animate({
			scrollTop: blockOffset-60
		}, 500);

	});

	// Nav Toggle
	$("#navToggle").click(function(event){
		event.preventDefault();

		$('#nav').toggleClass("active");
		$("#navToggle").toggleClass("active");
	});

	// testimonials: https://kenwheeler.github.io/slick/
	let slider = $("#reviews");

	slider.slick({
	  infinite: true,
	  fade: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true
});
			
});