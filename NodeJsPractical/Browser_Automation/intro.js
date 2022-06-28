//use npm install puppeteer
//then run code as - node main.js
const puppeteer = require("puppeteer");
let page;

//will get browser context promise - [kind of token]
//promise -> a token which is provided by almost every JS objects, which can be either "fullfiled"/"rejected" 
//after resolution else it is in "pending state".
//if fullfiled case is handled by "then" which accepts the callback function.
//same is the case for rejected case, "catch" -> handles the rejected state.
let browserOpenPromise = puppeteer.launch({
    headless: false,
    executablePath: `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`,
    defaultViewport: null,//viewport to be maximed
    slowMo: true,
    args: [`--incognito`, '--start-maximized']//incognito mode, max screen
});
//if "browserOpenPromise" if fulfilled "then" case is handled which triggers the callback function.
//which return "object" - here named as "browser" to callback function arg
browserOpenPromise
    .then(function (browser) {

        let PagePromise = browser.pages();//returns tabs promises
        //return that promise
        return PagePromise;
    })
    //if "PagePromise" is fullfiled, the callback functions is triggered which accepts the "tabs" -> pagesArr
    //for current browser promise
    .then(function (pagesArr) {
        page = pagesArr[0];//select first tab within current running browser
        let googlePagePromise = page.goto("https:\\www.google.com");//goto specicified url
        return googlePagePromise;
    })
    //if "goolglePagePromise" is fullfiled then, then the below callback function is triggered
    ////waiting for the selector of input field to be available
    .then(function () {
        let waitForSelectorPromise = page.waitForSelector("input.gLFyf.gsfi", { visible: true });
        return waitForSelectorPromise;
    })
    //if "waitForSelectorPromise" Promise is fulfilled i.e, the input field is available,
    //then the call back function is triggered where the input is to be entered in search bar
    .then(function () {
        let keySendingPromise = page.type("input.gLFyf.gsfi", "nados content");
        return keySendingPromise;
    })
    //after "keySendingPromise" is fulfilled, then callback function is triggered
    //where the enter button is pressed
    .then(function () {
        let searchPromise = page.keyboard.press("Enter");
        return searchPromise;
    })
    //if "searchPromise" is fulfilled, then the call back function is triggered
    //where the first link is found - > wait for selector is again used here
    .then(function () {
        let getLinkPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", { visible: true });
        return getLinkPromise;
    })
    //if "getLinkPromise" is fullfiled, then the call back function is triggered
    //where the first link retrieved with the help of above call back through promises is clicked.
    .then(function () {
        return page.click("h3.LC20lb.MBeuO.DKV0Md");
    })
    //any error in any of the above promises callback chain, it is handled here
    .catch(function (err) {
        console.error(err);
    })