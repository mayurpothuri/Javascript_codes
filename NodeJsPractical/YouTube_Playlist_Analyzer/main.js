//npm install pdfkit puppeteer
const url = "https://www.youtube.com/playlist?list=PL-Jc9J83PIiFj7YSPl2ulcpwy-mwj1SSk";
const puppeteer = require("puppeteer");
const generatePDF = require("./pdfService");
const pdfFileName = "videoInfo";
const browserPromise = puppeteer.launch({
    headless: false,
    executablePath: `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`,
    slowMo: true,
    defaultViewport: null,
    args: [`--incognito`, `--start-maximized`]
});

//wait for the selector to render and then return thr desired attribute value
async function waitSelectorAttribute(selector, attribute, page) {
    await page.waitForSelector(selector, { visible: true });//returns promise
    let val = await (await (await page.$(selector)).getProperty(attribute)).jsonValue();
    return val.trim();
}

//wait on selector and then returns the length of collected selector
async function waitSelectorAttributes(selector, page) {
    await page.waitForSelector(selector);//returns promise
    let len = await page.$$(selector);
    return len.length;
}

//wait on selector and then returns the array of objects containing video Titles and it's duration
async function waitSelectorGetValues(selector, videoTitleSelector, durationSelector, page) {
    await page.waitForSelector(selector, { visible: true });//returns promise
    let values = await page.$$(selector);
    let result = [];
    for (let i = 0; i < values.length; i++) {
        let videoTitle = (await (await (await values[i].$(videoTitleSelector)).getProperty("textContent")).jsonValue()).trim();
        let duration = (await (await (await values[i].$(durationSelector)).getProperty("textContent")).jsonValue()).trim();
        result.push({ videoTitle, duration });
    }
    return result;
}

//wait on selector and then returns the total no. of videos and views
async function waitSelectorVideoCountAndViews(selector, page) {

    await page.waitForSelector(selector, { visible: true });//returns promise
    let [videosCount, views] = await page.evaluate(function (eval) {
        videosCount = document.querySelectorAll(eval)[0].textContent;
        views = document.querySelectorAll(eval)[1].textContent;
        return [videosCount, views];
    }, selector);
    return [videosCount, views];

}

//scrolling on browser functionality
async function scrollDown(page) {
    await page.evaluate(function () {
        window.scrollBy(0, window.innerHeight)
    });
}

browserPromise
    .then(async function (browser) {
        //get current tab
        const page = (await browser.pages())[0];
        //type the desired url
        await page.goto(url);
        //get the playlist name
        const title = await waitSelectorAttribute("h1[id=title]", "textContent", page);
        //get the total no. of videos and views on playlist
        let [noOfVideos, views] = await waitSelectorVideoCountAndViews("div.style-scope.ytd-playlist-sidebar-primary-info-renderer yt-formatted-string", page);
        console.log(title, noOfVideos, views);
        let currentNoOfVideos = 0;
        // scrolling function till bottom till no further scrolling is there at the bottom of webpage
        noOfVideos = noOfVideos.split(" ")[0];//remove 'videos' part from whole string
        while (noOfVideos - currentNoOfVideos >= 4) {
            await scrollDown(page);
            currentNoOfVideos = await waitSelectorAttributes("a[id=video-title]", page);
        }
        //get the video titles and durations in the form array of objects
        const allData = await waitSelectorGetValues("[id=container].style-scope.ytd-playlist-video-renderer", "h3", "[id=text]", page);
        console.log(allData);
        //generating pdf of the resulted content
        generatePDF(pdfFileName, allData);

    }).catch(function (err) {
        console.log("catch : ", err);
    })