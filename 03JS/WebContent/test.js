// Single- and multi-line comments.
 
// This is an example of a single-line comment.
 
/*
 * this is an example
 * of a
 * multi-line
 * comment.
 */

// Whitespace is insignificant.
var hello = "Hello";
var world     =      "World!";

//Semantic whitespace promotes readability.
//Readable code is good!
var foo = function() {

 for ( var i = 0; i < 10; i++ ) {

     alert( i );

 }

};

foo();

//This is much harder to read!
var foo=function() {for(var i=0;i<10;i++){alert(i);}};foo();

//Valid identifier names.
var myAwesomeVariable = "a";
var myAwesomeVariable2 = "b";
var my_awesome_variable = "c";
var $my_AwesomeVariable = "d";
var _my_awesome_variable_$ = "e";


//This works:
var test = 1;
var test2 = function() {  };
var test3 = test2( test );
 
// And so does this:
var test4 = 1,
    test5 = function() {  },
    test6 = test2( test );
    
    var x;
    x === undefined; // true