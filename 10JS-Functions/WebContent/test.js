// Function declaration.
 
function foo() {
    // Do something.
}

//Named function expression.

var foo = function() {
    // Do something.
};

//A simple function.

var greet = function( person, greeting ) {
    var text = greeting + ", " + person;
    console.log( text );
};
 
greet( "Rebecca", "Hello" ); // "Hello, Rebecca"

//A function that returns a value.

var greet = function( person, greeting ) {
    var text = greeting + ", " + person;
    return text;
};
 
console.log( greet( "Rebecca", "Hello" ) ); // "Hello, Rebecca"

//A function that returns another function.

var greet = function( person, greeting ) {
    var text = greeting + ", " + person;
    return function() {
        console.log( text );
    };
};
 
var greeting = greet( "Rebecca", "Hello" );
 
greeting(); // "Hello, Rebecca"

//An immediately-invoked function expression.

(function() {
    var foo = "Hello world";
})();
 
console.log( foo ); // undefined!

//Passing an anonymous function as an argument.

var myFn = function( fn ) {
    var result = fn();
    console.log( result );
};
 
// Logs "hello world"
myFn( function() {
    return "hello world";
});

//Passing a named function as an argument

var myFn = function( fn ) {
    var result = fn();
    console.log( result );
};
 
var myOtherFn = function() {
    return "hello world";
};
 
myFn( myOtherFn ); // "hello world"

