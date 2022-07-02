'use strict'

const arr = [1, 2, 3, 4, 5];

//chaining of array methods, since each "map" function returns new array, and every array has built-in functions 
//with the help of "prototype chaining", as __proto__ points to the shared object which contains all the 
//array functions
const newArr = arr
    .map(function (val) { return val * 2 })
    .map(function (val) { return val * 2 });
console.log(newArr);