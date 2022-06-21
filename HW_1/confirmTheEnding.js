//  confirmEnding("Bastian", "n") should return true.
//  Passed:confirmEnding("Congratulation", "on") should return true.
//  Passed:confirmEnding("Connor", "n") should return false.
//  Passed:confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
//  Passed:confirmEnding("He has to give me a new name", "name") should return true.
//  Passed:confirmEnding("Open sesame", "same") should return true.
//  Passed:confirmEnding("Open sesame", "sage") should return false.
//  Passed:confirmEnding("Open sesame", "game") should return false.
//  Passed:confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
//  Passed:confirmEnding("Abstraction", "action") should return true.
//  Passed:Your code should not use the built-in method .endsWith() to solve the challenge.

function confirmEnding(str = "", target = "") {
    //return str.endsWith(target);
    let i = str.length - target.length;
    return str.substring(i) === target ? true : false;
}

let result = confirmEnding("Bastian", "n");
console.log(result);