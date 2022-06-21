//Q Given a array first=[1,2,3,4,5];
// Write a JavaScript program that fill second array in reverse order of first
// ?
//narr=[5,4,3,2,1]

const arr = [1, 2, 3, 4, 5];

//time complexity - O(n)
function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    console.log(newArray);
}

reverseArray(arr);