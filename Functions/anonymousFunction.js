'use strict'

//anonymous function expression assigning to variable greet, so greet is having anonymous[nameless function]
//upon invocation with "Mayur" parameter gives "Hello Mayur"
let greet = function (name) {
    console.log(`Hello ${name}`);
}

//function invocation - gives "Hello Mayur"
greet("Mayur");