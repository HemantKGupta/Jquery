// Concatenation
var foo = "hello";
var bar = "world";
 
console.log( foo + " " + bar ); // "hello world"

//Multiplication and division
2 * 3;
2 / 3;

//Incrementing and decrementing
//The pre-increment operator increments the operand before any further processing.
var i = 1;
console.log( ++i ); // 2 - because i was incremented before evaluation
console.log( i );   // 2

//The post-increment operator increments the operand after processing it.
var i = 1;
console.log( i++ ); // 1 - because i was evaluated to 1 and _then_ incremented
console.log( i );   // 2 - incremented after using it

//Addition vs. Concatenation
var foo = 1;
var bar = "2";
 
console.log( foo + bar ); // 12

// Coercing a string to act as a number.
var foo = 1;
var bar = "2";
 
console.log( foo + Number(bar) ); // 3

//Forcing a string to act as a number (using the unary plus operator).
console.log( foo + +bar ); // 3

//Logical AND and OR operators

var foo = 1;
var bar = 0;
var baz = 2;
 
// returns 1, which is true
foo || bar;
 
// returns 1, which is true
bar || foo;
 
// returns 0, which is false
foo && bar;
 
// returns 2, which is true
foo && baz;
 
// returns 1, which is true
baz && foo;

// Do something with foo if foo is truthy.
foo && doSomething( foo );
 
// Set bar to baz if baz is truthy;
// otherwise, set it to the return value of createBar()
var bar = baz || createBar();

//Comparison operators

var foo = 1;
var bar = 0;
var baz = "1";
var bim = 2;
 
foo == bar; // false
foo != bar; // true
foo == baz; // true; but note that the types are different
 
foo === baz;             // false
foo !== baz;             // true
foo === parseInt( baz ); // true
 
foo > bim;  // false
bim > baz;  // true
foo <= baz; // true