for ( var i = 0; i < 5; i++ ) {
    // Logs "try 0", "try 1", ..., "try 4".
    console.log( "try " + i );
}	

var i = -1;
while ( ++i < 100 ) {
    // This block will be executed 100 times.
    console.log( "Currently at " + i );
}

do {
    // Even though the condition evaluates to false
    // this loop's body will still execute once.
    alert( "Hi there!" );
 
} while ( false );

//Stopping a loop
for ( var i = 0; i < 10; i++ ) {
    if ( something ) {
        break;
    }
}

//Skipping to the next iteration of a loop
for ( var i = 0; i < 10; i++ ) {
    if ( something ) {
        continue;
    }
 
    // The following statement will only be executed
    // if the conditional "something" has not been met
    console.log( "I have been reached" );
 
}