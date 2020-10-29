let currentStack = false;

function reversePolish(newExpr, stackParam) {
	let expr = newExpr.split(" ");
	let stack = (currentStack === false) ? [] : stackParam;

	if (expr === '') {
		return 0;
	}

	for (let i = 0; i < expr.length; i++) {
		if ( !isNaN(expr[i]) && isFinite(expr[i]) ) {
			stack.push(expr[i]);
		} else {
			let a = stack.pop();
			let b = stack.pop();
			a = parseFloat(a);
			b = parseFloat(b);

			if (expr[i] === "+") {
				stack.push( (a + b).toFixed(3) );
			} else if (expr[i] === "-") {
				stack.push( (b - a).toFixed(3) );
			} else if (expr[i] === "*") {
				stack.push( (a * b).toFixed(3) );
			} else if (expr[i] === "/") {
				stack.push( (b / a).toFixed(3) );
			}
		}
	}

	return stack;
}

jQuery(document).ready(function($) {
	$('.form-signin').submit(function(e) {
		e.preventDefault();

		let inputField = $('#inputText');		
		let input = reversePolish( inputField.val(), currentStack );
		currentStack = input;
		inputField.val('');

		// Parse the last stack element to a float, and then convert to a string to remove trailing zeroes
		let responseValue = parseFloat(input[input.length - 1]).toString();
		$('.response').text(responseValue);
	});

	$('.clear-button').click(function(e) {
		e.preventDefault();

		currentStack = false;
		$('.response').text('');
	});
});