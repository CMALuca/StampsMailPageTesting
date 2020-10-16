import setInputField from '../support/action/setInputField';
import Page from './page'

//Using the get command from WebDriverIO, It's easier to adhere to the Page Object Pattern.
//I can use it to store any elements from our browser element picker into simple, easy to read selectors.

class MailPage extends Page {

    get printOnInput() {
        return $('#printmediadroplist-1038-inputEl'); //This element is the Print On field on our Stamps.com Mail Page. 
    }
    
    get serialInput() {
        return $('#sdc-mainpanel-nsserialtextfield-inputEl'); //This represents our Serial Number field.
    }

    get fromZipInput() {
        return $('#unauthMailFromZip-1048-inputEl'); //This element is for the Mail From Zip Code field.
    }

    get countryInput() {
        return $('#combo-1063-inputEl'); //This is for our country field.
    }

    get poundsInput() {
        return $('#numberfield-1167-inputEl'); //This is for the pounds field on our page.
    }

    get ouncesInput() {
        return $('#numberfield-1169-inputEl'); //This is for the ounces field.
    }

    get serviceInput() {
        return $('#sdc-mainpanel-servicedroplist-inputEl'); //So this one is to represent our Service dropdown list.       
    }

     get serviceDropdownArrow() {
        return $('#sdc-mainpanel-servicedroplist-trigger-picker'); //For later use in one of our actions, I grabbed the service dropdown arrow.       
    }

    get serviceListSelector() {
        return $('#boundlist-1351-listEl') //I grabbed the actual value for one of the mail classes in the Service dropdown for testing. This is for Letter.
    }

    open() {
        super.open('https://print.stamps.com/Webpostage/default2.aspx?') //This is how we extend on our page.js and provide additional details.
    }
            
}

export default new MailPage(); //I exported this out so that we can import it simply into other Steps or Actions, so we can reference the above elements.