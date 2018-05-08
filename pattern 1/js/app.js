$(function() {
	$('.menu-button').on('click', function(event){
		event.preventDefault();
		
		$(this).toggleClass('active');
		$('.mobile-menu-container').slideToggle();
	});
});