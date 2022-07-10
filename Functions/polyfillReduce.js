'use strict'

const arr = [1, 2, 3, 4, 5];
/* arrow functions */
const addFn = (a, b) => a + b;
const multiplyFn = (a, b) => a * b;

//as functions in javascript are "first class functions", we can pass function as a parameter to another function
//higher order function
//this is also example for "immutability" as we are not disturbing for each elements in "arr"
function polyFillReduce(arr, helperFn, buildingUp) {

    //for each element in the array, find the reduce value based on the execution of
    //"helperFn" function and then collect the reduced value in "building" variable
    for (let i = 0; i < arr.length; i++) {
        buildingUp = helperFn(buildingUp, arr[i]);
    }
    //return the reduced value
    return buildingUp;
}

//function invocation
console.log("add reducer", polyFillReduce(arr, addFn, 0));

//function invocation
console.log("multiply reducer", polyFillReduce(arr, multiplyFn, 1));