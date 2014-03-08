// Creating an object literal.
 
var myObject = {
    sayHello: function() {
        console.log( "hello" );
    },
    myName: "Rebecca"
};
 
myObject.sayHello(); // "hello"
 
console.log( myObject.myName ); // "Rebecca"

var myObject = {
	    validIdentifier: 123,
	    "some string": 456,
	    99999: 789
	};