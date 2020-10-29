# Reverse Polish Notation Calculator
This project is a web page that includes a reverse polish notation (RPN) calculator.

## Usage
Enter your operators and operands in the input field, one at a time or in a single line, and then press the "Calculate" button. Press the "Clear" button to clear the RPN stack and the result field.

## How It Works
jQuery is used to collect the input field value after a form submission with the "Calculate" button. The input value and the current RPN stack (if one exists from a previous calculation) is then sent to a function that contains a reverse polish notation algorithm. The algorithm loops over the input value and the element to the RPN stack if it's a number. If the element is one of four operators `(+, -, *, /)`, then the last two elements of the stack array are removed and calculated with the operator. After the loop is done, the function returns the stack array to the jQuery submit handler which then adds the last element of the stack array to the "Result" HTML element.

## Tech Used
- jQuery is used because it is relatively lightweight and offers easy-to-read syntax.
- Bootstrap 4 is used because it provides a clean and simple design and can be implemented quickly.
- QUnit is used because it is easy-to-use and was originally developed for jQuery.

## Future Possible Additions
- Stricter input field validation to prevent non-numeric characters from being entered.
- Add a calculator button interface.
- Add more functionality for floats and decimals.
- More descriptive error messages and error checks.
- More test modules to cover possible use cases.

## How To Use
Add the project to your server and visit index.html in a browser. Visit tests.html to run the test suite.

## Demo
- https://realpage.johnlander.me
- https://realpage.johnlander.me/tests.html
