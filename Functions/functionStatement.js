'use strict'

greet("Mayur");

//function statement (or) function definition
//due to "hoisting" property -  compilation step such that the variable declaration[var] and function statements
//are "hoisted" up.
function greet(name) {
    console.log(`Hello ${name}`);
}

//var a;
//because of hoisting, "var a" is accessible to console.log() even if the declaration of "a" variable
//is below the "console.log()" line, at that moment, "a" is having value undefined
console.log("accessing a before declaration =", a);

var a = 10;

console.log("accessing a after declaration =", a);


//for "let" and "const": same behavior as above happens because of "temporal dead zone" - TDZ property
//gives error => ReferenceError: Cannot access 'b' before initialization
console.log("accessing b before declaration =", b);

let b = 10;

console.log("accessing b after declaration =", b);