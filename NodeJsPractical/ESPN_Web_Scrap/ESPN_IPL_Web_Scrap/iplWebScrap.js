const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request = require("request");
const cheerio = require("cheerio");
const getIPLMatchScores = require("./getMatchScores.js");
const directoryCreate = require("./directoryServices.js");

//asynchronous call back function to get data from above URL
request(url, callBackFn);

//call back function to get the links of full score card info for all IPL matches
function getMatchInfoCallBackFn(err, response, data) {
    if (err) {
        console.log("getMatchInfoCallBackFn Custom error :\n", err);
    }
    else {
        //make directory
        directoryCreate(__dirname, "ipl");
        let $ = cheerio.load(data);
        let scoreCards = $($(".ds-p-0")[1]).find(".ds-flex.ds-mx-4.ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent");
        let scoreCardLinks = [];
        for (let i = 0; i < scoreCards.length; i++) {
            scoreCardLinks.push($($($(scoreCards[i]).find("span"))[4]).find("a").attr("href"));
        }
        console.log("Score Card length = ", scoreCardLinks.length);
        for (let i = 0; i < scoreCardLinks.length; i++) {
            scoreCardLinks[i] = url.split("/series")[0] + scoreCardLinks[i];
            console.log(scoreCardLinks[i]);
            request(scoreCardLinks[i], getIPLMatchScores);
        }
    }
}

function getMatchIfo(url) {
    //getMatchInfoCallBackFn -> call back function to get the links of full score card info for all IPL matches
    request(url, getMatchInfoCallBackFn);
}

//call back function trigger to get another link [VIEW ALL RESULT]
function callBackFn(err, response, data) {
    if (err) {
        console.log("callBackFn Custom Error :\n", err);
    }
    else {
        let $ = cheerio.load(data);
        let resultLink = $(".ds-inline-flex.ds-items-center.ds-leading-none a.ds-block.ds-text-center").attr("href");
        resultLink = url.split("/series")[0] + resultLink;
        getMatchIfo(resultLink);
    }
}