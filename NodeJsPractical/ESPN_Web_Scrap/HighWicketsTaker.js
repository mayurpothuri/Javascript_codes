const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");

request(url, callBackFn);

function callBackFn(err, statusCode, data) {
    if (err) {
        console.log(err);
    }
    else {
        extractHTML(data);
    }
}

function extractHTML(data) {
    let $ = cheerio.load(data);
    let teamNames = $(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo-title.ds-mb-2");
    let winningTeamName;
    for (let i = 0; i < teamNames.length; i++) {
        if (teamNames[i].attribs.class.includes("ds-opacity-50") === false) {
            winningTeamName = $(teamNames[i]).text().split("(")[0];
        }
    }
    console.log(winningTeamName);//get winning team name
    let wrapper = $(".ds-mt-3")[1], tables = "", wTables, bowlTable;
    tables = $(wrapper).find(".ds-bg-fill-content-prime.ds-rounded-lg");

    for (let i = 0; i < tables.length; i++) {
        if ($($(tables[i]).find(".ds-py-3")).text().includes(winningTeamName)) {
            wTables = $(tables[i]);
        }
    }
    wTables = $(wTables).find("table");
    for (let i = 0; i < wTables.length; i++) {
        if ($(wTables[i]).hasClass("ci-scorecard-table") === false) {
            bowlTable = $(wTables[i]).find("tr");
        }
    }
    let bowlerName = "", wicketsTaken = -1;
    for (let i = 0; i < bowlTable.length; i++) {
        if (wicketsTaken < Number($($(bowlTable[i]).find("td")[4]).text())) {
            bowlerName = $($(bowlTable[i]).find("td .ds-font-medium")).text();
            wicketsTaken = Number($($(bowlTable[i]).find("td")[4]).text());
        }
    }
    console.log("Bowler Name =", bowlerName);
    console.log("Wickets Taken =", wicketsTaken);
}