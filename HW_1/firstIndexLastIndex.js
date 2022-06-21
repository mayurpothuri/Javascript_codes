//sorted array
const arr = [1, 5, 10, 15, 22, 33, 33, 33, 33, 33, 40, 42, 55, 66, 77];
const d = 33;

//time complexity - O(log(n))
function getFirstIndex(arr, d) {

    let start = 0, mid = 0, end = arr.length - 1, firstIndex = -1;
    while (start <= end) {
        mid = start + (end - start) / 2;
        if (arr[mid] == d) {
            firstIndex = mid;
            end = mid - 1;
        }
        else if (d < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    console.log(firstIndex);
}

//time complexity - O(log(n))
function getLastIndex(arr, d) {

    let start = 0, mid = 0, end = arr.length - 1, lastIndex = -1;
    while (start <= end) {
        mid = start + (end - start) / 2;
        if (arr[mid] == d) {
            lastIndex = mid;
            start = mid + 1;
        }
        else if (d < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    console.log(lastIndex);
}

getFirstIndex(arr, d);
getLastIndex(arr, d);