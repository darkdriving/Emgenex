$(document).foundation();

$(function(){
	$('#home-slide ul').slick({
		prevArrow: "#hero-prev",
		nextArrow: "#hero-next",
		autoplay: true,
		autoplaySpeed: 5000
	});
});
