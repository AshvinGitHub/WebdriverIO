import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^Go to login Page$/, () => {
    // [Given] Sets up the initial state of the system.
});

When(/^Enter the (\w+) and (.+)$/, (username, password) => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(/^User Login successfully$/, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(/^Click on Price$/, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(/^Click on Sell Price$/, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(/^Click on Create$/, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});
