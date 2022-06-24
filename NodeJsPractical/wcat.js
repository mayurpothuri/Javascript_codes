let fs = require("fs");
let path = require("path");
let command = process.argv;

//1- wcat filepath => displays content of the file in the terminal ✔ 
//2- wcat filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) 
//  in the given order. ✔ 
//3- wcat -s filepath => convert big line breaks into a singular line break ✔

//4- wcat -n filepath => give numbering to all the lines ✔ 
//5- wcat -b filepath => give numbering to non-empty lines ✔ 
//6- wcat filepath > filename2path => put all the content of filename into filename2 by overriding 
//and also creates filename2 if it doesn't exist. ✔ 
//7- wcat filename2path >> filename2path => append all the content of filename into filename2✔ 
//8- node wcat -s filename > filename2 =>get the file content of filename remove large spaces 
//and save the output in filename2 ✔ 
//We can mix and match the options.

//Edge cases:
//1- If file entered is not found then it gives file does not exist error. 
//2- -n and -b are 2 options available together then command should give you an error

//it splits the lines and forms the array of lines and based on options, it either collapses multiple 
//line breaks to single line break or the lines remain intact.
function getContent(file, option) {
    let content = fs.readFileSync(file).toString().split('\r\n');
    let result = [];
    for (let i = 0; i < content.length; i++) {
        if (i === 0) {
            result.push(content[i]);
        }
        else if (content[i] !== '' || (content[i] === '' && content[i] !== content[i - 1]) && option === 1) {
            result.push(content[i]);
        }
        else if (option === 0) {
            result.push(content[i]);
        }
    }
    result.push("");
    return result;
}

//it numbers the lines of content and based on option field, it numbers all the lines within the contents array
//or it numbers only the non empty lines within the contents array.
function getNumbering(contents, option) {

    let result = [], count = 1;
    for (let i = 0; i < contents.length; i++) {
        if (option === 1) {
            if (contents[i] !== '')
                result.push(`${count++}. ${contents[i]}`);
            else {
                result.push(contents[i]);
            }
        }
        else if (option === 0) {
            result.push(`${count++}. ${contents[i]}`);
        }
    }
    return result;
}

function wcat(command) {

    //if command not paased
    if (command === undefined) {
        console.log("invalid command");
        return;
    }
    //if both -n and -b is provided then error
    else if ((command.includes('-n') === true && command.includes('-b'))) {
        console.log("both -n and -b is error combo");
        return;
    }
    let filePath, isFilePresent, contents = [], flag = false;
    //loop through the command
    for (let val of command) {
        //if not file in command then continue
        if (fs.existsSync(val) === false) {
            continue;
        }
        filePath = fs.lstatSync(val).isFile() === true ? val : path.join(__dirname, val);
        isFilePresent = fs.lstatSync(filePath).isFile();
        //if file and if -s then colllapse the multiple lines break to single line break
        if (isFilePresent === true) {
            flag = true;
            if (command.includes('-s') === true) {
                //gets multiple line breaks to single line breaks
                contents = contents.concat(...getContent(filePath, 1));
            }
            else {
                //the content doesn't change, remaind intact
                contents = contents.concat(...getContent(filePath, 0));
            }
        }
    }
    //if flag === true ==> file was present in the command and -n option included then
    //get numbering included.
    if (flag === true && command.includes('-n') === true) {
        contents = getNumbering(contents, 0);
    }
    //if flag === true ==> file was present in the command and -b option included then
    //get numbering included only for non empty lines.
    if (flag === true && command.includes('-b') === true) {
        contents = getNumbering(contents, 1);
    }
    if (flag === false) {
        console.log("file error");
    }
    else {
        //display the actual content parsed based on options field
        for (let val of contents) {
            console.log(val);
        }
    }
    return;
}

wcat(command.slice(2));