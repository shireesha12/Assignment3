/*eslint-env browser*/
function calculate(x, y, operator) {
    "use strict";
     x = Number(window.prompt("Enter x value"));
     y = Number(window.prompt("Enter y value "));
     operator = window.prompt("Enter the operator that you would like to perform (add(+), subtract(-), multiply(*), divide(/))");
    if ((operator === "+") || (operator === "-") || (operator === "*") || (operator === "/")) {
		switch (operator) {
        case "+":
            window.alert(x + y);
            break;
        case "-":
            window.alert(x - y);
            break;
        case "*":
            window.alert(x * y);
            break;
        case "/":
            window.alert(x / y);
            break;
	}
} else {
    window.alert("You entered wrong operator please enter again!...");
    calculate();
}

}  calculate();

