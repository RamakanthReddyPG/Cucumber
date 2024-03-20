// Import the js-yaml library
const yaml = require('js-yaml');
const fs = require('fs');
const puppeteer = require('puppeteer');

console.log("Loading locators from objects.yml...");
const locators = yaml.load(fs.readFileSync('objects.yml', 'utf8'));
console.log("Locators loaded:", locators);

const loginPage = {
    async launchWebsite() {
        const browser = await puppeteer.launch({headless: false,args: ['--start-maximized']});
        const page = await browser.newPage();
        await page.goto('https://www.amazon.com/');
        console.log("login.js");
        // await page.setViewport({ width: 1920, height: 1080 });
        await page.emulate(puppeteer.devices['Desktop HD']);

        
        return page;
    },
    async loginWithValidCredentials(){
        const page = await this.launchWebsite();

        const { signInSignUp,signinButton, emailfield, continueButton } = locators.login;

        // Now you can use these locators to interact with the page
        await new Promise(resolve => setTimeout(resolve, 7000));
        await page.click(signInSignUp);
        await new Promise(resolve => setTimeout(resolve, 2000));        
        await page.click(signinButton);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await page.type(emailfield, 'your_username@123.com');
        await new Promise(resolve => setTimeout(resolve, 1000));
        await page.click(continueButton);

        // You might want to add some error handling and await for navigation, etc.
    }
};

module.exports = loginPage;
