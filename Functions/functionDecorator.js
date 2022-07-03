'use strict'

//now we can convert functions more easily to make them suit out task
//without writing a new function from scratch
//we can run code on "other bits of code" to appear to change them

/* arrow function */
const multiplyBy2 = num => num * 2;
const addBy2 = num => num + 2;

//with the help of "closure", "edit" function would have access to "counter"
//"innerFn" -> generic function that evaluates result. Eg -> add, multiply, etc..
const oncify = function (innerFn) {
    let counter = 0;
    const edit = function (val) {
        //if counter === 0 then evaluate the result as per passed "functionality"
        if (counter === 0) {
            counter++;
            return innerFn(val);
        }
        //else return "Sorry" as "functionality" should run once
        else {
            return "Sorry";
        }
    }
    //return the generic function as per passed "functionality"
    return edit;
}

//using "oncify" to acheive the addtion by 2 functionality
const onceAddBy2 = oncify(addBy2);
console.log(onceAddBy2(10));//12
console.log(onceAddBy2(10));//Sorry

//using "oncify" to acheive the multiply by 2 functionality
const onceMultiplyBy2 = oncify(multiplyBy2);
console.log(onceMultiplyBy2(10));//20
console.log(onceMultiplyBy2(10));//Sorry