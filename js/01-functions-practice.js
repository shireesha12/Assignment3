/*eslint-env browser*/

//STEP 1
/*var number = window.prompt("Enter a number for getting half number");
function halfNumber(number) {
    "use strict";
    window.console.log("Half of " + number + " is " + (number / 2));
}
halfNumber(number);*/

//STEP 2

/*var number = window.prompt("Enter a number for squaring");
function squareNumber(number) {
    "use strict";
    window.console.log("The result of squaring the number " + number + " is " + (number * number ));
}
squareNumber(number);*/


//STEP 3

/*var x = window.prompt("Enter x value");
var y = window.prompt("Enter y value");
function percentOf(x,y) {
    "use strict";
    var percent = (x / y) * 100;
    window.console.log( x + " is " + percent + "% of " + y );
}
percentOf(x,y);*/


//STEP 4
/*var x = window.prompt("enter x value");
var y = window.prompt("enter y value");
function findModulus(x, y) {
    "use strict";
    var modulus = x % y;
    window.console.log( modulus + " is the modulus of " + x + " and " + y + ".");
}
findModulus(x,y);*/


//STEP 5

var a = window.prompt("Enter a value"); 
var b = window.prompt("Enter b value"); 
var c = window.prompt("Enter c value"); 
var d = window.prompt("Enter d value"); 
var e = window.prompt("Enter e value"); 

function sum(a, b, c, d, e) {    
    window.document.write("The Numbers you entered are: " +  arguments[0] + "," + arguments[1] + "," + arguments[2] + "," + arguments[3] + "," + arguments[4] + "<br>" );
	var base = Number(a, b, c, d, e);
	var i;
	for (i = 1; i < arguments.length; i += 1){
        base += Number(arguments[i],10);
    }
	window.document.write("Sum of all numbers is:" + base);
}sum(a, b, c, d, e);


  
  

