import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I am on the login page$/, () => {
    // [Given] Sets up the initial state of the system.   
	console.log("I am on the login page")

});

When(/^I login with (\w+) and (.+)$/, (username, password) => {

    // [When] Describes the action or event that triggers the scenario.
		console.log("Enter the username and password")

});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    // [Then] Describes the expected outcome or result of the scenario.
		    console.log("I should see a flash message saying")

});
