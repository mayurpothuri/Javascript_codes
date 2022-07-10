'use strict'

//because of "hoisting" property, greet variable declaration is hoisted up and since no value is there
//at this moment so "undefined" will be printed
//var greet;
console.log(greet);

//function expression
//since functions in javascript is treated as "first class functions -> functions are also objects", so
//the object[function object] can be assigned to another variable
var greet = function greeting(name) {
    console.log(`Hello ${name}`);
}

//will get function object [actual function]
console.log(greet);

//function invocation - gives "Hello Mayur"
greet("Mayur");

//because of TDZ - temporal dead zone, will get error because of below error
//ReferenceError: Cannot access 'letGreet' before initialization
//console.log(letGreet);

//function expression, assigning function object to letGreet variable
let letGreet = function letGreeting(name) {
    console.log(`Hello ${name}`);
}
//will get function object [actual function]
console.log(letGreet);

//function invocation - gives "Hello Yo yo"
letGreet("Yo yo");