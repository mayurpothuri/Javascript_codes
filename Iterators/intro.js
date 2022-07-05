'use strict'

/*  Iterators automate the accessing of each element - so that we can focus on what to do with each element
    - make it available to us in a smooth way
*/

function getIterator(arr) {
    let i = 0, end = arr.length;
    //because of closure concept, the inner function can access the array "arr", "i" and "end".
    const inner = function () {
        if (i >= end) {
            return;
        }
        else {
            return arr[i++];
        }

    }
    return inner;
}

const arr = [1, 2, 3, 4];
const iterator = getIterator(arr);
//returns data upon multiple invocations of the iterator function.
console.log(iterator());
console.log(iterator());
console.log(iterator());
console.log(iterator());
console.log(iterator());