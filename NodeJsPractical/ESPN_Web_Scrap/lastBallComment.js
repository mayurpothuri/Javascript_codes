const request = require("request");
const cheerio = require("cheerio");

//asynchronous call, as soon as the call stack is empty then the callback function is called.
request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary', callBackFn);

console.log("Before");
//call back function implementation
function callBackFn(err, response, data) {
    if (err) {
        console.log(err);
    }
    else {
        extractHTML(data);
    }
}
console.log("After");

//extract desired content - "player of the match and name of the player"
function extractHTML(data) {
    //load the html using cheerio so that the html content is parsed in terms JS objects.
    let $ = cheerio.load(data);
    //select the desired paragraph content using CSS selectors.
    let lastComment = $($('[itemprop = articleBody]')[0].children[0]);
    //wrap the cheerio object such that the text content is retrieved.
    console.log("Text data: \n", $(lastComment).text());
    console.log("HTML data: \n", $(lastComment).html());
}