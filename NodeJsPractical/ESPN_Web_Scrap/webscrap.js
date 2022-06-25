const request = require("request");
const cheerio = require("cheerio");

//asynchronous call, as soon as the call stack is empty then the callback function is called.
request(`https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard`, callbackFn);

console.log("Before");
//call back function implementation
function callbackFn(err, response, data) {
    if (err) {
        console.log(err);
    }
    //load the html using cheerio so that the html content is parsed in terms JS objects.
    let selTool = cheerio.load(data);
    //select the desired paragraph content using CSS selectors.
    let caption = selTool(".ds-text-tight-xs.ds-capitalize");
    let playerName = selTool("span .ds-text-tight-m.ds-font-medium");
    //wrap the cheerio object such that the text content is retrieved.
    console.log(selTool(caption[2]).text(), selTool(playerName[2]).text());
}
console.log("After");


