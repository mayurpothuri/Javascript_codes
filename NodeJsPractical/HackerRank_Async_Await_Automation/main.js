//use npm install puppeteer
//then run code as - node main.js
'use strict'
const url = "https:\\www.google.com";
const siteName = "hackerrank";
const userName = "b161808";
const pass = "q2w3e4r5t";
const problemName = "Solve Me First";
const puppeteer = require("puppeteer");
const codes = require("./codes.js");
const browserPromise = puppeteer.launch({
    headless: false,
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    slowMo: true,
    defaultViewport: null,
    args: ['--incognito', '--start-maximized']
});

async function waitSelectorType(selector, data, page) {
    await page.waitForSelector(selector, { visible: true });
    let typed = await page.type(selector, data, { delay: 10 });
    return typed;
}

async function waitSelectorClick(selector, currentPage) {
    let waitingPromise = await currentPage.waitForSelector(selector, { visible: true });
    console.log(`${selector} -> waiting for, promise -> ${waitingPromise}`);
    let clicked = await Promise.all([
        currentPage.click(selector), // Clicking the link will indirectly cause a navigation
    ]);
    console.log(`${selector} is clicked -> ${clicked}`);
    return clicked;
}

async function waitSelectorClickProblemName(selector, titleSelector, buttonSelector, page) {
    let selectorValue = await page.waitForSelector(selector, { visible: true });
    if (selectorValue === null) {
        console.log("it is null");
        return;
    }
    const divs = await page.$$(selector);
    console.log(divs);
    for (let i = 0; i < divs.length; i++) {
        let val = await (await (await divs[i].$(titleSelector)).getProperty("textContent")).jsonValue();
        if (val.includes(problemName) === true) {
            let clikableButton = await divs[i].$(buttonSelector);
            clikableButton.click();
            console.log(`${selector} is clicked -> ${clikableButton}`);
            return clikableButton;
        }
    }
}

browserPromise.then(async function (browser) {
    const page = (await browser.pages())[0];
    try {
        await page.goto(url);
        await waitSelectorType("input.gLFyf.gsfi", siteName, page);
        await page.keyboard.press("Enter");
        await waitSelectorClick("h3.LC20lb.MBeuO.DKV0Md", page);
        await waitSelectorClick("a[data-event-label=header][data-event-action=Login]", page);
        await waitSelectorClick("div.fl-col.fl-node-5bd106f71cd43 a[class=fl-button]", page);
        await waitSelectorType(".auth-content-wrap input[id=input-1]", userName, page);
        await waitSelectorType(".auth-content-wrap input[id=input-2]", pass, page);
        await waitSelectorClick("button[data-analytics=LoginPassword]", page);
        await waitSelectorClick("[data-analytics=SelectTopic][data-attr1=algorithms]", page);
        await waitSelectorClickProblemName("div.content--list_body", "h4.challengecard-title", "button.ui-btn-styled", page);
        await waitSelectorClick("div.checkBoxWrapper input[type=checkbox]", page);
        await waitSelectorType("div.ui-tooltip-wrapper textarea", codes[0], page);
        await page.keyboard.down("Control");
        await page.keyboard.press("A");
        await page.keyboard.press("X");
        await page.keyboard.up("Control");
        await waitSelectorClick(".monaco-editor.no-user-select.vs", page);
        await page.keyboard.down("Control");
        await page.keyboard.press("A");
        await page.keyboard.press("V");
        await waitSelectorClick("button.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled", page);
        await page.waitForTimeout(10000);
    }
    catch (error) {
        console.log("catch :", error);
    }
    browser.close();

}).catch(function (err) {
    console.log("browser promise error", err);
})