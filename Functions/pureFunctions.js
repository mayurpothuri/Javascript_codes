'use strict'

/* arrow functions*/
const addBy2 = num => num + 2;
const multiplyBy2 = num => num * 2;
const divideBy2 = num => num / 2;

//pure function - 1) listing out our "lines of code"[functions] by name with each's consequence limited
//  to only affect the next "line"[function call/invocation]
//2) Functions as tiny units to be combined and run automatically "must" be completely predictable
//3) We rely on using their evaluated result to pass the input to the next unit of code(automatically)
//.Any "side effects"[influencing outside env with repect to it's own env] would destroy this
function reduce(arr, howToCombine, buildingUp) {
    for (let i = 0; i < arr.length; i++) {
        buildingUp = howToCombine(buildingUp, arr[i]);
    }
    return buildingUp;
}

function runFn(input, fn) {
    return fn(input);
}

console.log(reduce([
    addBy2,     //label of action to be performed[function name]
    multiplyBy2,    //label of action to be performed[function name]
    divideBy2   //label of action to be performed[function name]
], runFn,   //run the label's task
    11));

/*
eg; - non pure functions
let num = 1;
//here the function is having influence on "num" which is in global scope rather than influencing
//any other data within it's own scopr/env, so it is not a pure function
const add3 = x => {num++; return x+3;}

add3(2);
*/