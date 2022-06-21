const n = 5;

//time complexity - O(n*n)
function printPattern(n) {

    let s = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            s += "*\t";
        }
        console.log(s);
        s = "";
    }
}

printPattern(n);