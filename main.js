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
 * Callback functions
 * Callback functions are those function which are passed
 * as a parameter to another function.
 */

function done() {
 console.log('Said hello');
}

function hi(name, cb) {
  console.log('Hi there, ' + name + '!');
  cb();
}

function sayHello(name, cb) {
  cb(name, done);
}

sayHello('Vineel', hi);


/**
 * Closures
 * A closure is a function within a function having the parent
 * functions execution context/scope
 */
function orderPizza(x) {
  function printPizza() {
    console.log(x);
  }
  printPizza();
}

var anotherOrderPizza = orderPizza;
anotherOrderPizza('Pepperoni');


/**
 * Currying
 * A function which returns a closure/function within function.
 */
function whatPizza() {
  return function yaayPizza() {
    console.log('Yaay I love pizza');
  };
}

var p = whatPizza();
var c = whatPizza();
p();
c();

/**
* Ways to select DOM elements.
* 1. document.getElementById(x):  Selects a DOM element with an id of x
* 2. document.querySelector(y): Selects a DOM element with a class of y
* 3. document.querySelectorAll(z): Selects a DOM element(s) with a class of z
**/
var content = document.getElementById('content');
