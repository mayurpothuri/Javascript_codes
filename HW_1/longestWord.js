//  Que  Find the Longest Word in a String.

//  Input:"The quick brown fox jumped over the lazy dog"
//  Output: 6

const input = "The quick brown fox jumped over the lazy dog";

//time complexity - O(n)
function longestWordLength(str = "") {

    let currLength = 0, longestLength = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            currLength++;
        }
        else if (str[i] === ' ') {
            if (currLength > longestLength) {
                longestLength = currLength;
            }
            currLength = 0;
        }
    }
    longestLength = currLength > longestLength ? currLength : longestLength;
    console.log(longestLength);
}

longestWordLength(input);