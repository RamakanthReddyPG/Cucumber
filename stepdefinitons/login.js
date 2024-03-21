const { Given, Then, When} = require('@cucumber/cucumber');
const loginPage = require('../Pages/loginPage');
Given('User is on the home page of the application', function () {
    // Write code here that turns the phrase above into concrete actions
    // loginPage.launchWebsite();
});

Then('Enter the valid credentials', function () {
    // Write code here that turns the phrase above into concrete actions
    loginPage.loginWithValidCredentials();
});
Then('Close the application', function () {
    // Write code here that turns the phrase above into concrete actions
    loginPage.closeTheBrowser();
});

