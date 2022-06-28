'use strict'
//use npm install puppeteer
//then run code as - node main.js
const puppeteer = require("puppeteer");
const codes = require("./code.js");
const browserPromise = puppeteer.launch({
    headless: false,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    slowMo: true,
    defaultViewport: null,
    args: ['--incognito', '--start-maximized']
});
const url = "https:\\www.google.com";
const siteName = "hackerrank";
const userName = "b161808";
const pass = "q2w3e4r5t";
const problemName = "Solve Me First";
let page, br;

//wait for full page load
function waitForLoad(page) {
    page.waitForNavigation({
        waitUntil: 'networkidle0',
    });
}

//since after every link clicked, it takes time for the page to be loaded fully
//and since the css selector is available after full load of page and this function
//is common for every link clicked, so written below function where we are returning 
//a custom promise which upon successful wait for css selector and then link clicking 
//function completed, the custom promise will be resolved and so the following promise chain
//callback functions are triggered normally. 
function waitSelectorClick(selector, currentPage = page) {
    return new Promise(function (resolve, reject) {
        //wait for the selector element to be rendered
        let waitSelectorPromise = currentPage.waitForSelector(selector, { visible: true });
        waitSelectorPromise.then(function () {
            //after waiting, click the selector element
            let clickEventPromise = currentPage.click(selector);
            return clickEventPromise;
        }).then(function () {
            resolve();
        }).catch(function (err) {
            console.log("wait selector promise error", err);
            reject();
        });
    });
}

//waiting for the css selector to be rendered and then type
function waitSelectorType(selector, data) {
    return new Promise(function (resolve, reject) {
        //wait for the selector element to be rendered
        let waitSelectorPromise = page.waitForSelector(selector, { visible: true });
        waitSelectorPromise.then(function () {
            //after waiting, type the data in the selector element
            let typeEventPromise = page.type(selector, data, { delay: 20 });
            typeEventPromise.then(function () {
                resolve();
            }).catch(function (err) {
                console.log("wait and type error", err);
                reject();
            });
        });
    });
}

//select the "solve me first" problem and then redirect to solve it
function waitSelectorGetItemValues(selector, attribute, button) {
    return new Promise(function (resolve, reject) {
        //waiting for the selector element to be available, that is rendered completely 
        let waitElementsPromise = page.waitForSelector(selector, { visible: true });
        waitElementsPromise.then(function () {
            //after fulfilling the above returened promise, this callback funtion within "then" chain is triggered.
            //within this function, the we select the provided selector using '$$' === 'querySelectorAll'.
            let getItemsPromise = page.$$(selector);
            return getItemsPromise;
        })
            .then(async function (arr) {
                //after fulfilling the above returened promise, this callback funtion within "then" chain is triggered.
                //after selecting the list of wrapper element for each question, 
                //select the text Content questions list with the help of "attribute" value asynchonously 
                //for each question [hence the nested loop].
                for (let i = 0; i < arr.length; i++) {
                    //select the .challenge title card questions list with the help of "attribute" value asynchonously
                    let titleCards = await arr[i].$$(attribute);
                    for (let j = 0; j < titleCards.length; j++) {
                        //select text Content questions list with the help of "attribute" value asynchonously
                        let val = await (await titleCards[j].getProperty("textContent")).jsonValue();
                        if (val.includes(problemName) === true) {
                            //if the question text is same as the problemName we want to solve
                            //get the button by passing "button" attribute from wrapper selector
                            let buttonPromise = (await arr[i].$$(button))[0];
                            //at last click the question we want to solve
                            buttonPromise.click();
                            return buttonPromise;
                        }
                    }
                }
            }).then(function () {
                resolve();
            })
            .catch(function (err) {
                console.log("wait get items err", err);
                reject();
            })
    });
}

//if "browserOpenPromise" if fulfilled, "then" case is handled which triggers the callback function.
//which return "object" - here named as "browser" to callback function arg
browserPromise
    .then(function (browser) {
        console.log("browser about to be opened");
        let PagePromise = browser.pages();//returns tabs promises
        br = browser;
        return PagePromise;
    })
    //if "PagePromise" is fullfiled, the callback functions is triggered which accepts the "tabs" -> pagesArr
    //call back function arg, for current browser promise
    .then(function (pagesArr) {
        console.log("get current tab in opened browser");
        page = pagesArr[0];
        console.log(`goto ${url}`);
        let googlePagePromise = page.goto(url);
        return googlePagePromise;
    })
    //if "goolglePagePromise" is fullfiled then, then the below callback function is triggered
    //waiting for the selector of input field to be available and then click and return the 
    //promise for further processing of inncoming requests
    .then(function () {
        console.log("waiting for search field to be loaded fully");
        return waitSelectorType("input.gLFyf.gsfi", siteName);
    })
    //if "waiting and click" of input field is fullfiled then, then the below callback function is triggered
    //to press "Enter" in keyboard and return the 
    //promise for further processing of inncoming requests
    .then(function () {
        console.log("pressed keyboard enter to start google search");
        let pressEnterPromise = page.keyboard.press("Enter");
        return pressEnterPromise;
    })
    //if "waiting and click" of siteName is fullfiled then, then the below callback function is triggered
    //waiting for the selector of site link to be available and then click and return the 
    //promise for further processing of inncoming requests
    .then(function () {
        console.log(`waiting for ${siteName} link to be ready and then click`);
        return waitSelectorClick("h3.LC20lb.MBeuO.DKV0Md");
    })
    //if "waiting and click" of login is fullfiled then, then the below callback function is triggered
    //waiting for the selector of login link to be available and then click and return the 
    //promise for further processing of inncoming requests
    .then(function () {
        console.log(`waiting for ${siteName} login link to be fully loaded and then click`);
        return waitSelectorClick("a[data-event-label=header][data-event-action=Login]");
    })
    //if "waiting and click" of developer login is fullfiled then, then the below callback function is triggered
    //waiting for the selector of developer login link to be available and then click and return the 
    //promise for further processing of inncoming requests
    .then(function () {
        console.log(`waiting for the login form[companies, developer] to be fully loaded and then click`);
        //wait for full page load
        waitForLoad(page);
        return waitSelectorClick("div.fl-col.fl-node-5bd106f71cd43 a[class=fl-button]");
    })
    //if "waiting and click" of username field is fullfiled then, then the below callback function is triggered
    //waiting for the selector of username field to be available and then click and return the 
    //promise for further processing of inncoming requests
    .then(function () {
        console.log(`waiting for the developer login form to be fully loaded and then click`);
        return waitSelectorType(".auth-content-wrap input[id=input-1]", userName);
    })
    //if "waiting and click" of password field is fullfiled then, then the below callback function is triggered
    //waiting for the selector of password field to be available and then click and return the 
    //promise for further processing of inncoming requests
    .then(function () {
        console.log("waiting for password field to be loaded fully and then click");
        return waitSelectorType(".auth-content-wrap input[id=input-2]", pass);
    })
    //if "waiting and click" of login fullfiled then, then the below callback function is triggered
    //waiting for the selector of login field to be available and then click and return the 
    //promise for further processing of inncoming requests
    .then(function () {
        console.log("waiting for developer login button to be fully loaded and then click");
        return waitSelectorClick("button.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    })
    //if "waiting and click" of algo attr link is fullfiled then, then the below callback function is triggered
    //waiting for the selector of algo attr link to be available and then click and return the 
    //promise for further processing of inncoming requests
    .then(function () {
        console.log(`waiting for the ${userName} profile in ${siteName} to be loaded and then click`);
        //wait for full page load
        waitForLoad(page);
        return waitSelectorClick("[data-analytics=SelectTopic][data-attr1=algorithms]");
    })
    //if "waiting and click" of problemName is fullfiled then, then the below callback function is triggered
    //waiting for the selector of problemName link to be available and then click and return the 
    //promise for further processing of inncoming requests
    .then(function () {
        console.log("waiting for the 'solve me first problem' problem to be ready and then click");
        return waitSelectorGetItemValues("div .content--list_body", "h4.challengecard-title", "button.ui-btn-styled");
    })
    //if "waiting and click" of text against custom input field is fullfiled then, then the below 
    //callback function is triggered waiting for the selector of text against custom input field
    // to be available and then click and return the promise for further processing of inncoming requests
    .then(function () {
        console.log("waiting for checkbox 'text against custom input' and then click");
        waitForLoad(page);
        return waitSelectorClick("div.checkBoxWrapper input[type=checkbox]");
    })
    .then(function () {
        console.log("waiting textarea to be fully loaded and then type")
        return waitSelectorType("div.ui-tooltip-wrapper textarea", codes[0]);
    })
    .then(function () {
        console.log("holding control button down");
        let controlPromise = page.keyboard.down("Control");
        return controlPromise;
    })
    .then(function () {
        console.log("selectinf all text");
        let selectAllPromise = page.keyboard.press("A");
        return selectAllPromise;
    })
    .then(function () {
        console.log("cut is being done");
        let cutPromise = page.keyboard.press("X");
        return cutPromise;
    })
    .then(function () {
        console.log("control is being released");
        let controlUpPromise = page.keyboard.up("Control");
        return controlUpPromise;
    })
    .then(function () {
        console.log("clicking the editor area");
        return waitSelectorClick(".monaco-editor.no-user-select.vs");
    })
    .then(function () {
        console.log("control down is being hold");
        let controlDownPromise = page.keyboard.down("Control");
        return controlDownPromise;
    })
    .then(function () {
        console.log("selecting code in editor area");
        let selectAllPromise = page.keyboard.press("A");
        return selectAllPromise;
    })
    .then(function () {
        console.log("pasting the answer[code] in editor area");
        let pastePromise = page.keyboard.press("V");
        return pastePromise;
    })
    .then(function () {
        console.log("control being released");
        let controlUpPromise = page.keyboard.up("Control");
        return controlUpPromise;
    })
    .then(function () {
        console.log("waiting for 'submit code' button to be fully loaded and then click it");
        waitForLoad(page);
        return waitSelectorClick("button.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
    })
    .then(function () {
        return br.close();//close the browser
    })
    .catch(function (err) {
        console.log("error", err);
    })
