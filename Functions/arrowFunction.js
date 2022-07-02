'use strict'

//below arrow function is just a function expression as:
//function (name) { return console.log(`Hello ${name}`) }
//concept of "this" binding is with parent env
let greet = (name) => console.log(`Hello ${name}`);

//function invocation - gives "Hello Mayur"
greet("Mayur");