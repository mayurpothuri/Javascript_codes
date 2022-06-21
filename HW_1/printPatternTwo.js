const n = 5;

//time complexity - O(n*n)
function printPattern(n) {

    let s = "", spaces = n - 1, stars = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < spaces; j++) {
            s += "\t";
        }
        for (let j = 0; j < stars; j++) {
            s += "*\t";
        }
        console.log(s);
        spaces--;
        stars++;
        s = "";
    }
}

printPattern(n);