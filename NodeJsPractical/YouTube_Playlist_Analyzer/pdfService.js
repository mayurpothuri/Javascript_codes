const pdfkit = require("pdfkit");
const fs = require("fs");

function generatePDF(filename, allData) {
    let pdfDoc = new pdfkit;
    pdfDoc.pipe(fs.createWriteStream(`${filename}.pdf`));
    pdfDoc
        .text(JSON.stringify(allData, null, 2), 100, 100);
    pdfDoc.end();
}

module.exports = generatePDF;