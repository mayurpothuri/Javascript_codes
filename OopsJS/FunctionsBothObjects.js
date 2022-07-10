'use strict';

//normal function
function foo() {
    console.log("Hello peps");
}

//normal function invocation
foo();//Hello peps

//since function in javascript are also objects, we can assign "property:value" to functions
foo.score = 5;

//print assigned property's value for function "object".
console.log(foo.score);//5

//normal function invocation
foo();//Hello peps

console.log(foo.prototype);//{}
/*  We could use the fact that the functions have a default property on their object version - "prototype", which is
    itself an object - to replace our functionStore object.
*/