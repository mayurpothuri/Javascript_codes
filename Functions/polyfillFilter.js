'use strict'

const arr = [1, 2, 3, 4, 6]
/* arrow functions*/
const isEven = num => num % 2 === 0 ? true : false;
const isOdd = num => num % 2 === 0 ? false : true;


//as functions in javascript are "first class functions", we can pass function as a parameter to another function
//higher order function
//this is also example for "immutability" as we are not disturbing for each elements in "arr"
function polyFillFilter(arr, filterFn) {

    let output = [];
    for (let i = 0; i < arr.length; i++) {
        //for each element in the array, find the filter value based on the execution of
        //"mappingFn" function and push the result onto another array
        if (filterFn(arr[i])) {
            output.push(arr[i]);
        }
    }
    //returning the result array
    return output;
}

//function invocation
console.log(polyFillFilter(arr, isEven));

//function invocation
console.log(polyFillFilter(arr, isOdd));