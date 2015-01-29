$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scroll_box').fadeIn();
		} else {
			$('.scroll_box').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scroll_box').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});