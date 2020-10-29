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

			if (expr[i] === "+") {
				stack.push(parseInt(a) + parseInt(b));
			} else if (expr[i] === "-") {
				stack.push(parseInt(b) - parseInt(a));
			} else if (expr[i] === "*") {
				stack.push(parseInt(a) * parseInt(b));
			} else if (expr[i] === "/") {
				stack.push(parseInt(b) / parseInt(a));
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

		$('.response').text(input[input.length - 1]);
	});

	$('.clear-button').click(function(e) {
		e.preventDefault();

		currentStack = false;
		$('.response').text('');
	});
});