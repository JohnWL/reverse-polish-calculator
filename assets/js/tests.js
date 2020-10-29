QUnit.module('Multiple Inputs', function() {
	QUnit.test('5 8 +', function(assert) {
		let actual = false;

		(function($) {
			$('#inputText').val('5');
			$('.form-signin .btn').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('8');
			$('.form-signin .btn').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('+');
			$('.form-signin .btn').click();
			actual = $('.response').text();
			assert.step(actual);
		})(jQuery);
		
		assert.verifySteps( ['5', '8', '13'] );
	});
});