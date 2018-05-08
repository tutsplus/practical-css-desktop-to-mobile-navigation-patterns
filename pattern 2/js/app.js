$(function() {
	$('.menu-button').on('click', function(event){
		event.preventDefault();
		
		$('.overlay-navigation').toggleClass('visible');
	});
});