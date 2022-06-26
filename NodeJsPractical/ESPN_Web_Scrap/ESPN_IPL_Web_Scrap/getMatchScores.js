const cheerio = require("cheerio");
const directoryCreate = require("./directoryServices.js");
const path = require("path");
const excelService = require("./excelServices.js");

function getTeamScoresDetail($, inning, directoryPath, teamName, venue, dateYear, opponentTeamName, description) {

    let battingRow = $(inning).find(".ci-scorecard-table tr.ds-border-b.ds-border-line.ds-text-tight-s");
    for (let i = 0; i < battingRow.length; i++) {
        if ($($(battingRow[i]).find(".ds-text-tight-s.ds-font-medium")).hasClass("ds-font-medium") === true) {
            let playerDetail = $($(battingRow[i]).find("td"));
            let playerName = $(playerDetail[0]).text().trim();
            let runs = $(playerDetail[2]).text().trim();
            let balls = $(playerDetail[3]).text().trim();
            let fours = $(playerDetail[5]).text().trim();
            let sixs = $(playerDetail[6]).text().trim();
            let strikeRate = $(playerDetail[7]).text().trim();
            //make corresponding player excel file
            let excelWb = path.join(directoryPath, playerName) + ".xlsx";
            let contents = excelService.excelReader(excelWb, playerName);
            contents.push({
                teamName,
                playerName,
                runs,
                balls,
                fours,
                sixs,
                strikeRate,
                opponentTeamName,
                venue,
                dateYear,
                description
            });
            excelService.excelWriter(excelWb, contents, playerName);
            console.log(`${$(playerDetail[0]).text()} ${$(playerDetail[2]).text()} ${$(playerDetail[3]).text()} ${$(playerDetail[5]).text()} ${$(playerDetail[6]).text()} ${$(playerDetail[7]).text()}`);
        }
    }
}

function getIPLMatchScores(err, response, data) {
    if (err) {
        console.log("getIPLMatchScores Custom Error :\n", err);
    }
    let $ = cheerio.load(data);
    let results = $($(".ds-grow .ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid")[0]).text();
    let desiredDetails = results.split(",");
    let venue = desiredDetails[1].trim();//venue
    let dateYear = `${desiredDetails[2].trim()}, ${desiredDetails[3].trim()}`;//Date and Year
    let innings = $($(".ds-mt-3")[1]).find(".ds-bg-fill-content-prime.ds-rounded-lg");
    let teamName = "", opponentTeamName = "", opponentIndex, description = $(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title").text();
    for (let i = 0; i < innings.length; i++) {
        opponentIndex = i === 0 ? 1 : 0;
        teamName = $($(innings[i]).find(".ds-py-3")).text().split("INNINGS")[0].trim();
        opponentTeamName = $($(innings[opponentIndex]).find(".ds-py-3")).text().split("INNINGS")[0].trim();
        console.log(`${venue} | ${dateYear} | ${teamName} | ${opponentTeamName} | ${description}`);
        //make corresponding teamName folder.
        directoryCreate(__dirname, path.join("ipl", teamName));
        //teamName directory path
        let directoryPath = path.join(__dirname, path.join("ipl", teamName));
        getTeamScoresDetail($, innings[i], directoryPath, teamName, venue, dateYear, opponentTeamName, description);
    }
}

module.exports = getIPLMatchScores;