'use strict'

const arr = [1, 2, 3, 4]
/* arrow functions*/
const addBy2 = num => num + 2;
const multiplyBy2 = num => num * 2;
const divideBy2 = num => num / 2;


//as functions in javascript are "first class functions", we can pass function as a parameter to another function
//higer order function
//this is also example for "immutability" as we are not disturbing for each elements in "arr"
function polyFillMap(arr, mappingFn) {

    let output = [];
    for (let i = 0; i < arr.length; i++) {
        //for each element in the array, find the mapping value based on the execution of
        //"mappingFn" function and push the result onto another array
        output.push(mappingFn(arr[i]));
    }
    //returning the result array
    return output;
}

//function invocation
console.log(polyFillMap(arr, addBy2));

//function invocation
console.log(polyFillMap(arr, multiplyBy2));

//function invocation
console.log(polyFillMap(arr, divideBy2));