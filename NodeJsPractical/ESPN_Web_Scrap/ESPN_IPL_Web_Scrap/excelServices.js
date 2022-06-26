const xlsx = require("xlsx");
const fs = require("fs");

function excelReader(filePath, sheetName) {
    if (fs.existsSync(filePath) === false) {
        return [];
    }
    let wb = xlsx.readFile(filePath);
    let excelData = wb.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(excelData);
}

function excelWriter(filePath, data, sheetName) {
    let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, filePath);
}

module.exports = {
    excelReader: excelReader,
    excelWriter: excelWriter
}