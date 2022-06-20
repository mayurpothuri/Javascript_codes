const n = 65784383;

//parameter - "n" is a local one and not the global one so modifying it, possible.
//time complexity - O(log(#digits))
function countOfDigits(n) {
    let count = 0;
    while (n > 0) {
        count++;
        //as numbers in javascript are floating point, need to "trunc - ate" the point decimal digits.
        n = Math.trunc(n / 10);
    }
    console.log(count);
}

countOfDigits(n);