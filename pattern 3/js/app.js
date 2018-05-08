$(function() {
	$('.menu-button').on('click', function(event){
		event.preventDefault();
		
		$('.mobile-menu').toggleClass('visible');
	});
});