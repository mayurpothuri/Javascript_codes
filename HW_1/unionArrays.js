//Q Write a JavaScript program to compute the union of two arrays using push pop without using extra space.
//Input arr1= [1, 2, 3]
//arr2= [100, 2, 1,10]
//Output: [1,2,3,100,10]

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

//time complexity - O(n1 + n2) ==> O(n)
function unionArrays(arr1, arr2) {

    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        //includes method -> return true if exits else false
        if (newArray.includes(arr1[i]) === false) {
            newArray.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        //includes method -> return true if exits else false
        if (newArray.includes(arr2[i]) === false) {
            newArray.push(arr2[i]);
        }
    }

    console.log(newArray);
}

unionArrays(arr1, arr2);