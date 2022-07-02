'use strict'

//Functions are our units to build with but they are limited! - they forget everything each time they finish
//running - with no global state.
//imagine if we could  give functions memories!
//it begins with returning a function from function!

const funcGenerator = () => {
    let counter = 0;
    const add3 = (num) => {
        const result = num + 3;
        console.log("counter", counter++);
        return result;
    }
    //returing function[function are also objects], since that function is having reference to "counter" which is in
    //"funcGenerator" scope's, With the help if [[Scope]]("backpack to function add3[having little persistent memory]")
    //property, we still would have access to "counter" -> "Closure"
    //any variables/objects which add3 refers in "funcGenerator" scope, only those will be saved with respect to 
    //[[Scope]] property and all other things are garbage collected.
    //[[Scope]] === covered over variable environment === closure
    return add3;
}

//every function call/invocation returns a new "backpack" attached to respective function object
const generatedFn = funcGenerator();
console.log(generatedFn(2)); //output is 0,5
console.log(generatedFn(2)); //output is 1,5
console.log(generatedFn(2)); //output is 2,5
console.log(generatedFn(2)); //output is 3,5

//note: in javascript, we have lexical scoping -> accessability of variables/objects is based on where it was
//defined/saved and not upon runtime execution scope/position[dynamic scope]