// Import the js-yaml library
const yaml = require('js-yaml');
const fs = require('fs');
const puppeteer = require('puppeteer');
const { element } = require('suitest-js-api');

console.log("Loading locators from objects.yml...");
const locators = yaml.load(fs.readFileSync('objects.yml','utf8'));
console.log("Locators loaded:", locators);

const loginPage = {
    async launchWebsite() {
        const browser = await puppeteer.launch({headless: false,args: ['--start-maximized'], defaultViewport: false});
        const page = await browser.newPage();
        await page.goto('https://discoveryplus.com/');
        await new Promise(resolve => setTimeout(resolve, 8000));
        await page.screenshot({path:"example.png"});
        const oneTrustGroupContainer = locators.oneTrustGroupContainer;
        // const metadatas = await page.$$(oneTrustGroupContainer);
        // for(const metadata of metadatas){}
            // const textContent = await page.evaluate(()=>{
            //     return Array.from(document.querySelector("#onetrust-group-container"),element=>element.textContent);
                
            // });
        console.log(textContent);        
        
        // await page.setViewport({ width: 1920, height: 1080 });
        // await page.emulate(puppeteer.devices['Desktop HD']);
        
        await browser.close();
    },
    async loginWithValidCredentials(){
        const page = await this.launchWebsite();
        await new Promise(resolve => setTimeout(resolve, 17000)); 
       
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