QUnit.module('Multiple Inputs', function() {
	QUnit.test('5, 8, +', function(assert) {
		let actual = false;

		(function($) {
			$('#inputText').val('5');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('8');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('+');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);
		})(jQuery);
		
		assert.verifySteps( ['5', '8', '13'] );
	});
});

QUnit.module('Single Line Input', function() {
	QUnit.test('5 5 5 8 + + -, 13 +', function(assert) {
		let actual = false;

		(function($) {
			$('#inputText').val('5 5 5 8 + + -');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('13 +');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);
		})(jQuery);
		
		assert.verifySteps( ['-13', '0'] );
	});
});

QUnit.module('Negatives and Floats', function() {
	QUnit.test('-3, -2, *, 5, +', function(assert) {
		let actual = false;

		(function($) {
			$('#inputText').val('-3');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('-2');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('*');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('5');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('+');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);
		})(jQuery);
		
		assert.verifySteps( ['-3', '-2', '6', '5', '11'] );
	});
});

QUnit.module('Floats and Division', function() {
	QUnit.test('5, 9, 1, -, /', function(assert) {
		let actual = false;

		(function($) {
			$('#inputText').val('5');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('9');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('1');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('-');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);

			$('#inputText').val('/');
			$('.form-signin .calculate-button').click();
			actual = $('.response').text();
			assert.step(actual);
		})(jQuery);
		
		assert.verifySteps( ['5', '9', '1', '8', '0.625'] );
	});
});