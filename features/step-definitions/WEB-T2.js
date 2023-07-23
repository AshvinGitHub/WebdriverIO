import { Given, When, Then } from '@wdio/cucumber-framework';

Given(`Go to login Page`, () => {
    // [Given] Sets up the initial state of the system.
    console.log('Go to login Page')

});

When(`Enter the (\w+) and (.+)}`, (username, password) => {
    // [When] Describes the action or event that triggers the scenario.
	    console.log('Enter the username and password')

});

Then(`User Login successfully`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
		    console.log('User Login successfully')

});