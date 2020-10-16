import openWebsite from '../support/action/openWebsite';
import MailPage from '../pageObjects/stampsMail.page';
import setInputField from '../support/action/setInputField';


const { When } = require('cucumber');

When(
    /^I go to "([^"]*)?"$/,
    openWebsite
);

When(
    /^I set Print On to "([^"]*)?"$/,
   (value) => setInputField(value, MailPage.printOnInput) //For the next few when statements, I'm just using the setInputField function and passing on our values.
);

When(
    /^I set Serial Number to "([^"]*)?"$/,
    (value) => setInputField(value, MailPage.serialInput)
);

When(
    /^I set Mail From Zip to "([^"]*)?"$/,
    (value) => setInputField(value, MailPage.fromZipInput)
);

When(
    /^I set Mail to Country to "([^"]*)?"$/,
    (value) => setInputField(value, MailPage.countryInput)
);

When(
    /^I set Weight lbs to "([^"]*)?" and oz to "([^"]*)?"$/,
    (pounds, ounces) => {setInputField(pounds, MailPage.poundsInput); setInputField(ounces, MailPage.ouncesInput)} //Due to the nature of multiple values in this statement, I had to use a lambda to pass the values.

)
