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



function getBirthday(teamName, playerName, link) {
    request(link, birthDayCallBackFn);
    function birthDayCallBackFn(err, response, data) {
        if (err) {
            console.log(err);
        }
        else {
            let $ = cheerio.load(data);
            let birthDay = $($("div span h5")[1]).text();
            console.log(`${teamName} : Player Name ==> ${playerName} : BirthDay ==> ${birthDay}`);
        }
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
    let wrapper = $(".ds-mt-3")[1], tables = "", wTables, batTable;
    tables = $(wrapper).find(".ds-bg-fill-content-prime.ds-rounded-lg");

    for (let i = 0; i < tables.length; i++) {
        if ($($(tables[i]).find(".ds-py-3")).text().includes(winningTeamName)) {
            wTables = $(tables[i]);
        }
    }
    wTables = $(wTables).find("table");
    for (let i = 0; i < wTables.length; i++) {
        if ($(wTables[i]).hasClass("ci-scorecard-table") === true) {
            batTable = $(wTables[i]).html();
        }
    }
    let players = $($(batTable).find("td a")), fullLink;
    console.log("#players =", players.length);
    for (let i = 0; i < players.length; i++) {
        fullLink = url.split("/series")[0] + $(players[i]).attr("href")
        getBirthday(winningTeamName, $(players[i]).text(), fullLink);
    }
}