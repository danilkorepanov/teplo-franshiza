$(document).ready(function () {
	$('.header__burger').bind('click', function () {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	})
});