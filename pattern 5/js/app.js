$(function() {
	$('.menu-button').on('click', function(event){
		event.preventDefault();
		
		// $('.offcanvas').toggleClass('visible');
		$('body').toggleClass('menu-opened');
	});

	$('.offcanvas li.has-submenu a').on('click', function(event) {
		var $this = $(this);
		event.preventDefault();

		$this.parent().toggleClass('opened');
		$this.siblings('ul').slideToggle();
	});
});