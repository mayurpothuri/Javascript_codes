//input format
//  A number n1
//  n1 number of elements line separated
//  A number n2 [n1 <= n2]
//  n2 number of elements line separated

//output format
//  A number representing sum of two numbers, represented by two arrays.

const arr1 = [3, 1, 0, 7, 5];
const arr2 = [1, 1, 1, 1, 1, 1];

//time complexity - O(n)
function sumOfArrays(arr1, arr2) {

    let carry = 0, x = 0, y = 0, length1 = arr1.length, length2 = arr2.length, i = 0, j = 0;
    let newArray = [];
    for (i = length1 - 1, j = length2 - 1; i >= 0 && j >= 0;) {
        x = arr1[i--] % 10;
        y = arr2[j--] % 10;
        carry = Math.trunc((x + y + carry) / 10);
        newArray.unshift((x + y + carry) % 10);
    }

    for (; j >= 0;) {
        y = arr2[j--] % 10;
        carry = Math.trunc((y + carry) / 10);
        newArray.unshift((y + carry) % 10);
    }
    if (carry > 0) {
        newArray.unshift(carry);
    }

    for (i = 0; i < newArray.length; i++) {
        if (newArray[i] !== 0) {
            break;
        }
    }
    for (; i < newArray.length; i++) {
        console.log(newArray[i]);
    }
}

sumOfArrays(arr1, arr2);