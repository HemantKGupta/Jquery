// Strings can be created with double or single quotes.
var a = "I am a string";
var b = 'So am I!';
alert( a );
alert( b );

//Sometimes a string may contain quotation marks.
var statement1 = 'He said "JavaScript is awesome!"';
var statement2 = "He said \"JavaScript is awesome!\"";

//Numbers are any whole or floating point integer.
var num1 = 100;
var num2 = 100.10;
var num3 = 0.10;

//Boolean values.
var okay = true;
var fail = false;

//Define a null value.
var foo = null;
 
// Two ways to achieve an undefined value.
var bar1 = undefined;
var bar2;

//Creating an object with the constructor:
var person1 = new Object;
 
person1.firstName = "John";
person1.lastName = "Doe";
 
alert( person1.firstName + " " + person1.lastName );
 
// Creating an object with the object literal syntax:
var person2 = {
    firstName: "Jane",
    lastName: "Doe"
};
 
alert( person2.firstName + " " + person2.lastName );

//As mentioned, objects can also have objects as a property.
var people = {};
 
people[ "person1" ] = person1;
people[ "person2" ] = person2;
 
alert( people[ "person1" ].firstName );
alert( people[ "person2" ].firstName );

//Properties that have not been created are undefined.
var person = { name: "John Doe" };
alert( person.email ); // undefined

//Creating an array with the constructor:
var foo = new Array;
 
// Creating an array with the array literal syntax:
var bar = [];

//The array literal returns a foo.length value of 1:
var foo = [ 100 ];
alert( foo[ 0 ] ); // 100
alert( foo.length ); // 1
 
// The array constructor returns a bar.length value of 100:
var bar = new Array( 100 );
alert( bar[ 0 ] ); // undefined
alert( bar.length ); // 100

//Using the push(), pop(), unshift() and shift() methods on an array.

var foo = [];
 
foo.push( "a" );
foo.push( "b" );
 
alert( foo[ 0 ] ); // a
alert( foo[ 1 ] ); // b
 
alert( foo.length ); // 2
 
foo.pop();
 
alert( foo[ 0 ] ); // a
alert( foo[ 1 ] ); // undefined
 
alert( foo.length ); // 1
 
foo.unshift( "z" );
 
alert( foo[ 0 ] ); // z
alert( foo[ 1 ] ); // a
 
alert( foo.length ); // 2
 
foo.shift();
 
alert( foo[ 0 ] ); // a
alert( foo[ 1 ] ); // undefined
 
alert( foo.length ); // 1

//Checking the type of an arbitrary value.

var myValue = [ 1, 2, 3 ];
 
// Using JavaScript's typeof operator to test for primitive types:
typeof myValue === "string"; // false
typeof myValue === "number"; // false
typeof myValue === "undefined"; // false
typeof myValue === "boolean"; // false
 
// Using strict equality operator to check for null:
myValue === null; // false
 
// Using jQuery's methods to check for non-primitive types:
jQuery.isFunction( myValue ); // false
jQuery.isPlainObject( myValue ); // false
jQuery.isArray( myValue ); // true


//Testing the type of various variables.
var myFunction = function() {
    console.log( "hello" );
};
var myObject = {
    foo: "bar"
};
var myArray = [ "a", "b", "c" ];
var myString = "hello";
var myNumber = 3;
var myRegExp = /(\w+)\s(\w+)/;
 
typeof myFunction; // "function"
typeof myObject;   // "object"
typeof myArray;    // "object" -- Careful!
typeof myString;   // "string"
typeof myNumber;   // "number"
typeof null;       // "object" -- Careful!
typeof undefined;  // "undefined"
typeof meh;        // "undefined" -- undefined variable.
typeof myRegExp;   // "function" or "object" depending on environment.
 
 
if ( myArray.push && myArray.slice && myArray.join ) {
    // probably an array (this is called "duck typing")
}
 
if ( Object.prototype.toString.call( myArray ) === "[object Array]" ) {
    // Definitely an array!
    // This is widely considered as the most robust way
    // to determine if a specific value is an Array.
}