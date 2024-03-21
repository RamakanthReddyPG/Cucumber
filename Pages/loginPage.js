// Import the js-yaml library
const yaml = require('js-yaml');
const fs = require('fs');
const puppeteer = require('puppeteer');
const { element } = require('suitest-js-api');
const { error } = require('console');
console.log("Loading locators from objects.yml...");
const locators = yaml.load(fs.readFileSync("zaz.yml",'utf8'));
console.log("Locators loaded:", locators);

const loginPage = {
    async launchWebsite() {
        const browser = await puppeteer.launch({headless: false,args: ['--start-maximized'], defaultViewport: false});
        const page = await browser.newPage();
        await page.goto('https://discoveryplus.com/');
        await new Promise(resolve => setTimeout(resolve, 16000));
        await page.screenshot({path:"/home/ramakanth/Desktop/GQA_ALL/Cucumber123/Cucumber/ScreenShots/example.png"});
        // const oneTrustGroupContainer = locators.oneTrustGroupContainer;
        const textvalidation="#onetrust-policy-text";
        const textContent=await page.$eval(textvalidation,element=>element.textContent);
        console.log(textContent);
        const expected= "If you consent, we, ouraffiliates and our 63 partners can store and access personal information on your device to provide a more personalised browsing experience. This is accomplished through processing personal data collected from browsing data stored in cookies. You can provide/withdraw consent and object to processing based on a legitimate interest at any time by clicking on the ‘Cookies & AdChoices’ button.Cookie Policy"  
        if(textContent.trim()===expected.trim()){
            console.log("good");
        }
        else{
            throw new error("textContent != expected");
        }
        await page.click("#onetrust-accept-btn-handler");
        // await new Promise(resolve => setTimeout(resolve, 5000));   
    },
    async loginWithValidCredentials(){
        const page = await this.launchWebsite();
        await new Promise(resolve => setTimeout(resolve, 17000)); 
       
    },
    async closeTheBrowser(){
        
    }
};

module.exports = loginPage;
// await new Promise(resolve => setTimeout(resolve, 7000));
//         // await page.
//         await new Promise(resolve => setTimeout(resolve, 2000));        
//         await page.click(signinButton);
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         await page.type(emailfield, 'your_username@123.com');
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         await page.click(continueButton);

// const { oneTrustTitle,OneTrustPolicyText, oneTrustAcceptCTA, oneTrustRejectCTA,oneTrustDPDTitle,oneTrustDPDdescription} = locators.oneTrust;
// const textContent = await page.evaluate(()=>{
//     return Array.from(document.querySelector(".onetrust-policy-title"),element=>element.textContent);
    
// })
// textContent.forEach(line=>{console.log(line.trim())});