//title case a sentence
const input = "I'm a little tea pot";
//output - I'm A Little Tea Pot.

//time complexity - O(n)
function toggleCase(inputString = "") {

    let flag = false, temp = "", str = "";
    for (let i = 0; i < inputString.length; i++) {

        if (i === 0 || flag === true) {
            str += inputString[i].toUpperCase();
            flag = false;
        }
        else if (inputString[i] === ' ') {
            flag = true;
            str += inputString[i];
        }
        else {
            str += inputString[i];
        }
    }
    console.log(str + ".");
}

toggleCase(input);