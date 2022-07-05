'use strict';

function getIterator(arr) {
    let i = 0, end = arr.length;
    //because of closure concept, the inner function can access the array "arr", "i" and "end".
    let obj = {
        next: function () {
            if (i >= end) {
                return;
            }
            else {
                return arr[i++];
            }
        }
    }
    //return the object which has "next" method
    return obj;
}

const arr = [1, 2, 3, 4]
const iterator = getIterator(arr);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());