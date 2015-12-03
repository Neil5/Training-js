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

// Function declaration
add(2, function saidHello() {
  console.log('Printed hello');
});

function add(a, cb) {
  setTimeout(function() {
    console.log('Inner function');
  }, 2000);
  console.log(a);
  cb();
}

// Function Expression
var anotherAdd = function() {
  console.log('Another function');
};
anotherAdd();

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

/**
 * This keyword
 */
console.log(this);

function thisExplained(x) {
  this.x = x;
  this.log = function() {
    console.log('Logging from class here with a value of ' + this.x);
  }
}

console.log(thisExplained.x);
var thisObj = new thisExplained(5);
var thatObj = new thisExplained(6);
thisObj.log(); // print 5
thatObj.log(); // print 6
console.log(thisObj);

var obj = {
  x: 6,
  log: function() {
   console.log('Logging from object here with a value of ' + this.x); // obj.x
  }
};
console.log(obj);

function anotherObj() {
  this.hello = 'hello';
}

anotherObj.prototype = {
  log: function() {
    console.log('Logging from prototype');
  }
};
var aobj = new anotherObj();
aobj.log();

/**
 1. Bind
 2. Apply
 3. Call
 */
this.x = 9;
var module = {
 x: 81,
 getX: function() {
   return this.x;
 }
};

console.log(module.getX()); // 81

var retrieveX = module.getX;
console.log(retrieveX());

var boundRetrieveX = retrieveX.bind(module);
console.log(boundRetrieveX());


/* min/max number in an array */
var numbers = [5, 6, 2, 3, 7];

var funcMax = Math.max.apply(numbers);
var funcMin = Math.min.apply(numbers);
console.log(funcMax, funcMin);

var funcMaxBind = Math.max.bind(numbers);
var funcMinBind = Math.min.bind(numbers);
console.log(funcMaxBind(), funcMinBind());


function hello(x) {
  return this.x;
}

var y = {
  x: 'From obj',
  setX: function(x) {
    this.x = x;
  }
};

var msg = hello('Hello');
var bindMsg = hello.bind(y, 'Hi there');
console.log(msg);
console.log(bindMsg());

var applyMsg = hello.apply(y, ['Apply there']);
console.log(applyMsg);

var callMsg = hello.call(y, 'Call there');
console.log(callMsg);

// A sample test comment here
