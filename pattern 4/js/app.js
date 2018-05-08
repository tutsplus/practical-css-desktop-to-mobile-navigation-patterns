$(function() {
	$('.menu-button').on('click', function(event){
		event.preventDefault();
		
		$('.mobile-menu').toggleClass('visible');
		$('.dark-overlay').toggleClass('visible');
	});

	$('.mobile-navigation li.has-submenu a').on('click', function(event) {
		var $this = $(this);
		event.preventDefault();

		$this.parent().toggleClass('opened');
		$this.siblings('ul').slideToggle();
	});
});