//import the "child_process" module from node JS
let cp = require('child_process');
cp.execSync("calc"); // ==> opens the calculator
cp.execSync("code ."); // ==> opens vs code
cp.execSync("start chrome"); // ==> opens chrome
cp.execSync("start chrome http://www.youtube.com"); // ==> open chrome which opens youtube
let output = cp.execSync("node tempNodeJSProgram.js"); // ==> executes "tempNodeJSProgram.js" JS file.
console.log("Output of tempNodeJSProgram.js file", output);// ==> outputs in binary format
//also helps us to execute any executable[.java, .cpp, .py, ....] files
console.log("Output of tempNodeJSProgram.js file " + output);// outputs the actual output of "tempNodeJSProgram.js" JS file
cp.execSync("javac ./java_prog/TempJava.java"); // ==> compiles the java program
output = cp.execSync("java ./java_prog/TempJava.java"); // ==> executes the JAVA file
console.log("Output of TempJava.java file" + output); // ==> output of TempJava.java
