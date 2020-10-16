import selectByVisibleText from '../support/action/selectNonStandardValue';
import setInputField from '../support/action/setInputField';
import Page from './page'


class MailPage extends Page {

    get printOnInput() {
        return $('#printmediadroplist-1038-inputEl');
    }
    
    get serialInput() {
        return $('#sdc-mainpanel-nsserialtextfield-inputEl');
    }

    get fromZipInput() {
        return $('#unauthMailFromZip-1048-inputEl');
    }

    get countryInput() {
        return $('#combo-1063-inputEl');
    }

    get poundsInput() {
        return $('#numberfield-1167-inputEl');
    }

    get ouncesInput() {
        return $('#numberfield-1169-inputEl');
    }

    get serviceInput() {
        return $('#sdc-mainpanel-servicedroplist-inputEl');
        
    }

     get serviceDropdownArrow() {
        return $('#sdc-mainpanel-servicedroplist-trigger-picker');
        
    }

    get serviceListSelector() {
        return $('#boundlist-1351-listEl')
    }

    open() {
        super.open('https://print.stamps.com/Webpostage/default2.aspx?')
    }

    
    
    printOnFill(value){
        setInputField(value, this.printOnInput);  
    }

    serialFill(value){
        setInputField(value, this.serialInput);
    }    

    fromZipFill(value){
        setInputField(value, this.fromZipInput);
    }

    countryFill(value){
        setInputField(value, this.countryInput);
    }

    poundsFill(value){
        setInputField(value, this.poundsInput);
    }

    ouncesFill(value){
        setInputField(value, this.ouncesInput);
    }

    serviceFill(value){
        selectByVisibleText(value, this.serviceInput);
    }
           
}

export default new MailPage();