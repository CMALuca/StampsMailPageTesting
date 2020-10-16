import checkEqualsText from '../support/check/checkEqualsText';
import checkInURLPath from '../support/check/checkInURLPath';
import MailPage from '../pageObjects/stampsMail.page';
import selectNonStandardOption from '../support/action/selectNonStandardOption';


const { Then } = require('cucumber');

Then(
    /^I expect URL to contain "([^"]*)?"(not)*$/,
    checkInURLPath
)

Then(
    /^I expect that Weight lbs is "([^"]*)?"$/,
    (value) => checkEqualsText(value, MailPage.printOnInput)
);

Then(
    /^I set service to "([^"]*)?"$/,
    (value) => selectNonStandardOption(MailPage.serviceDropdownArrow, MailPage.serviceListSelector, value)
);