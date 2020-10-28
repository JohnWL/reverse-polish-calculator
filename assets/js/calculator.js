jQuery(document).ready(function($) {
	$('.form-signin').submit(function(e) {
		e.preventDefault();
		
		let input = $('#inputText').val();

		$('.response').text(input);
	});
});