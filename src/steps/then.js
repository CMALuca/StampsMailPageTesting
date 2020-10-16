import checkEqualsText from '../support/check/checkEqualsText';
import checkInURLPath from '../support/check/checkInURLPath';
import MailPage from '../pageObjects/stampsMail.page';
import selectNonStandardOption from '../support/action/selectNonStandardOption';

//This is the Step Definition for the Then statements in our cucumberTest.features.
//We grab each statement and are defining it so it makes sense to Cucumber, and add functions to complete the tasks described in our Scenarios.
//We add a regexr so that we can collect the value in "" from our cucumberTest.features and appliy it to the functions we use to complete the test.

const { Then } = require('cucumber');

Then(
    /^I expect URL to contain "([^"]*)?"(not)*$/, //For this statement, we're, as stated earlier, adding a regexr for the imported below function.
    checkInURLPath
)

Then(
    /^I expect that Weight lbs is "([^"]*)?"$/, 
    (value) => checkEqualsText(value, MailPage.printOnInput) //I did something a little different here and used a lambda to pass on the value to our function. 
);

Then(
    /^I set service to "([^"]*)?"$/,
    (value) => selectNonStandardOption(MailPage.serviceDropdownArrow, MailPage.serviceListSelector, value)
);