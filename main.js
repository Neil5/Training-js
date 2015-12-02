// Hoisting
var a;
a = 10;

var b = 5;

c = 10;
console.log(a, b, c);

// Scoping

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
