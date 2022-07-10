'use strict'
//Partial application -> passing partial value to our complete desired "functionality"

/* arrow function */
const multiply = (a, b) => a * b;

//outer generic function which returns the function hence enabling closure concepts
function preFillingFn(fn, preFilledVal) {
    //returns the "decorated function"
    const innerFn = (liveVal) => {
        //performs the actual "functionality with passed pre filled value" upon invocation of this "decorated function"
        //when returned from "preFillingFn" and closure concepts, and invocation in global/other local execution
        //context 
        const output = fn(liveVal, preFilledVal);
        return output;
    }
    //returns the innerFn, so "backpack" is attached
    return innerFn;
}

//invoke the generic function with pre filled value and getting the "decorated functionality[passed]"
const multiplyBy2 = preFillingFn(multiply, 2);
//actual functionality id performing on two inputs, but with the help of "partial application", we can perform
//single value functionality
console.log(multiplyBy2(10));

//note: since, the "backpack" data can be changed, so it won't be a "pure function"
//eg - adding specific functionality to part of DOM element and other part can be specified on "run time"
//here we pre filled the actual functionality with one input, but in reality, there are situation
//where we need to pass on "multiple inputs to a generic function" and within "generic function"
//there are series of functions acting upon those multiple inputs one by one respectively. This style of
//functional programming is called "function currying" -> generalized version of "partial function"
