const url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");
const path = require("path");
const createDirectory = require("./directoryServices.js");
const fileService = require("./filesServices.js");

//asynchronous call to callBackFn function
request(url, callBackFn);

function getIssues(repoIssueLink, filePath) {
    console.log(repoIssueLink);
    request(repoIssueLink, getIssuesLinkCallBackFn);
    let issues = [];
    function getIssuesLinkCallBackFn(err, response, data) {
        if (err) {
            console.log("getIssuesLinkCallBackFn Custom Error :", err);
        }
        else {
            let $ = cheerio.load(data);
            let issuesLinks = $("[aria-label=Issues] a[id^=issue]");
            for (let i = 0; i < issuesLinks.length; i++) {
                issues.push($(issuesLinks[i]).attr("href"));
            }
            console.log(issues);
            fileService.writeData(filePath, issues);
        }
    }
}

function getRepos(directoryName, topicLink) {
    //create directory for topic
    let topicDirectoryPath = path.join(__dirname, directoryName);
    createDirectory(topicDirectoryPath);
    request(topicLink, getTopicsCallBackFn);
    function getTopicsCallBackFn(err, response, data) {
        if (err) {
            console.log("getTopicsCallBackFn Custom Error :", err);
        }
        else {
            console.log("directory name", directoryName);
            let $ = cheerio.load(data), repoIssueLink, repos, repoName, repoFilePath, maxLength;
            repos = $("article.border.rounded.color-shadow-small.color-bg-subtle.my-4");
            maxLength = repos.length >= 8 ? 8 : repos.length;
            for (let i = 0; i < maxLength; i++) {
                repoName = $($(repos[i]).find("h3 a.text-bold.wb-break-word")).text().trim();
                console.log(repoName);
                repoFilePath = path.join(topicDirectoryPath, repoName + ".json");
                repoIssueLink = $($(repos[i]).find("nav a[id^=issues]")).attr("href").trim();
                console.log(repoIssueLink);
                repoIssueLink = url.split("/topics")[0] + repoIssueLink;
                getIssues(repoIssueLink, repoFilePath);
            }
            console.log("==================================================");
        }
    }
}

function callBackFn(err, response, data) {
    if (err) {
        console.log("CallbackFn function Custom Error :", err);
    }
    let $ = cheerio.load(data);
    let topics = $($(".container-lg.p-responsive.mt-6")).find("ul li");
    let directoryName = "";
    for (let i = 0; i < topics.length; i++) {
        directoryName = $($(topics[i]).find("p.f3")).text().trim();
        let topicLink = $($(topics[i]).find("a")[0]).attr("href");
        topicLink = url.split("/topics")[0] + topicLink;
        getRepos(directoryName, topicLink);
    }
}