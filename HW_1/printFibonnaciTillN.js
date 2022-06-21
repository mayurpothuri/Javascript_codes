const n = 10;

//print fibonnaci numbers till given N
function printFibonnaciTillN(n) {

    if (n <= 0) {
        console.log("invalid");
    }
    else if (n === 1) {
        console.log(0);
    }
    else if (n === 2) {
        console.log(0);
        console.log(1);
    }
    else {
        let currFib = 1, prevFib = 0, temp = 0;
        console.log(0);
        for (let i = 2; i <= n; i++) {
            console.log(currFib);
            temp = currFib;
            currFib = prevFib + currFib;
            prevFib = temp;
        }
    }
}

printFibonnaciTillN(n);