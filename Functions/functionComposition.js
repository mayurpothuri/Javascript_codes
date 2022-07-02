'use strict'

//function composition:
//1) chaining with dots relies on javascript prototype feature - functions returing array which then inturn
//hae access to over all "higher order functions"[map, filter, reduce, etc..]
//2)We are passing the output to the next function automatically.[divideBy2( addBy2( multiplyBy2 (11) ) )]
//3)what if we want to chain functions that just returns a regular output

/* arrow functions*/
const addBy2 = num => num + 2;
const multiplyBy2 = num => num * 2;
const divideBy2 = num => num / 2;
const arr = [addBy2, multiplyBy2, divideBy2];//array of functions as function


//as functions in javascript are "first class functions", we can pass function as a parameter to another function
//higer order function
function functionComposition(arr, howToCombine, val) {

    for (let i = 0; i < arr.length; i++) {
        //since each element in array is function, we can invoke it with parameter
        val = howToCombine(val, arr[i]);
    }
    return val;
}

function runFn(input, fn) {
    return fn(input);
}

//function invocation
console.log(functionComposition(arr, runFn, 11));