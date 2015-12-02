/**
 * Hoisting
 * Add about hoisting
 */
var a;
a = 10;

var b = 5;

c = 10;
console.log(a, b, c);

/**
 * Scoping
 * Explain about scoping
 */
function hello() {
  var d = 20;
  console.log(a);
}

if (a > 10) {
  var e = 20;
} else {
  var e = 90
}

hello();
// console.log(d);
console.log(e);


/**
* Ways to select DOM elements.
* 1. document.getElementById(x):  Selects a DOM element with an id of x
* 2. document.querySelector(y): Selects a DOM element with a class of y
* 3. document.querySelectorAll(z): Selects a DOM element(s) with a class of z
**/

var content = document.getElementById('content');
