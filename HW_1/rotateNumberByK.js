const n = 562984;
const k = 2;

//get count of digits
//time complexity - O(log(#digits in n))
function countOfDigits(n) {
    let count = 0;
    while (n > 0) {
        count++;
        n = Math.trunc(n / 10);
    }
    return count;
}

//time complexity - O(log(#digits in n)) + O(1) ==> O(log(#digits in n))
function rotateNumberByK(n, k) {

    let count = countOfDigits(n);
    k = k % count;
    if (k < 0) {
        k = k + count;
    }
    let p1 = Math.trunc(n % (Math.pow(10, k)));
    let p2 = Math.trunc(n / (Math.pow(10, k)));
    let rotatedNumber = p1 * (Math.pow(10, count - k)) + p2;
    return rotatedNumber;
}

let rotatedNumber = rotateNumberByK(n, k);
console.log(rotatedNumber);