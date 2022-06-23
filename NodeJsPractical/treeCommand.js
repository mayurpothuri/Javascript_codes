let fs = require("fs");
let cp = require("child_process");
let path = require("path");

//picks up the command line args and wraps it up in an array.
let command = process.argv;
console.log("Command line args : ")
console.log(command);
//Returns a copy of a section of an array. For both start and end, a negative index 
//can be used to indicate an offset from the end of the array. 
//For example, -1 refers to the last element of the array.
let directoryPath = command.slice(-1);
console.log("Directory Path array :");
console.log(directoryPath);

//using built-in command line arg -> tree command
//process.cwd() -> returns the path of current working directory path
function treeCommand(directoryPath = process.cwd()) {

    //return information about the symbolic link that is being used to refer to a file or directory.
    let isDirectoryPath = fs.lstatSync(directoryPath);
    //check whether it is directory path or not
    if (isDirectoryPath.isDirectory() === true) {

        console.log(cp.execSync(`tree  ${directoryPath}`).toString('utf8'));
    }
    else {
        console.log("not valid directory path");
    }
    return;
}

//custom tree command implementation
function treeHelper(directoryPath = process.cwd(), indent = 0) {

    let isDirectoryPath = fs.lstatSync(directoryPath);
    let fileDirectoryPath;
    //check whether it is directory path or not
    if (isDirectoryPath.isDirectory() === true) {
        //read contents under current directory path
        let files = fs.readdirSync(directoryPath);
        //loop through each file/directory and process to print current level directories
        // and under recursion, print all sub directories
        for (let i = 0; i < files.length; i++) {
            fileDirectoryPath = path.join(directoryPath, files[i]);
            //if current path id directory then print and proceed for recursion
            if (fs.lstatSync(fileDirectoryPath).isDirectory() === true) {
                //print all the sub directory names under current directory
                console.log("\t".repeat(indent) + "└──" + files[i]);
                //recursion faith - print contents under sub direc under current directory path
                treeHelper(fileDirectoryPath, (indent + 1));
            }
        }
    }
    else {
        console.log("not valid directory path");
    }
}
//destructure the cuurent directory path array containing only one element
//directoryPath ------> ...directoryPath
//['D:\JavaScript_codes\'] ------> 'D:\JavaScript_codes\'
treeHelper(...directoryPath, 0);
//treeCommand(...directoryPath);

//console.log(process.cwd());
//it is string type
//console.log(typeof process.cwd());