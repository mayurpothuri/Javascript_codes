const fs = require("fs");

function writeData(filePath, issues) {

    issues = JSON.stringify(issues);
    fs.writeFileSync(filePath, issues);
}

module.exports = {
    writeData: writeData
};