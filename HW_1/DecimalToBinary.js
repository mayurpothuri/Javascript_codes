const n = 127;

function decimalToBinary(n) {

    let p = 1, ans = 0;
    while (n > 0) {
        ans += (n % 2) * p;
        p *= 10;
        n = Math.trunc(n / 2);
    }
    return ans;
}

let ans = decimalToBinary(n);
console.log(ans);