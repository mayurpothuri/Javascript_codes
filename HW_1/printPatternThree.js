const n = 7;

//time complexity - O(n*n)
function printPattern(n) {

    let s = "", spaces = Math.trunc(n / 2), stars = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < spaces; j++) {
            s += "\t";
        }
        for (let j = 0; j < stars; j++) {
            s += "*\t";
        }
        console.log(s);
        s = "";
        if (i < Math.trunc(n / 2)) {
            spaces--;
            stars += 2;
        }
        else {
            spaces++;
            stars -= 2;
        }
    }
}

printPattern(n);