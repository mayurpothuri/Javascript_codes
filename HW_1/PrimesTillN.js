const low = 10;
//const low = Number(prompt()); => when input require from browser and running js file from browser
const high = 20;
//const high = Number(prompt()); => when input require from browser and running js file from browser

//time complexity = O(nloglogn)
//multiples of 2's are crossed, then 3, then 5, so on.
//n/2 + n/3 + n/5 + n/7 + .... < n/2 + n/3 + n/4 + n/5 + .....
//n/2 + n/3 + n/5 + n/7 + .... < nlogn[loose bound]
//but for n/2 + n/3 + n/5 + n/7 + .... ~ nloglogn[exact bound]
function primesTillN(low, high) {
    //const primes doesn't mean that the content of array can't be changed but 
    //the address of current primes array can't be changed.
    const primes = new Array(high + 1);
    primes[0] = primes[1] = false;
    for (let i = 2; i * i <= high; i++) {
        if (primes[i] === undefined) {
            primes[i] = true;
            for (let j = 2 * i; j <= high; j += i) {
                primes[j] = false;
            }
        }
    }

    for (let i = low; i <= high; i++) {
        if (primes[i] === true || primes[i] == undefined) {
            console.log(i);
        }
    }
}

primesTillN(low, high);