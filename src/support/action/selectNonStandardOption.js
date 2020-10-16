//Had to make this function as the Service dropdown on the Mail Page appears to be non-Standard -aka not using "select" to generate it and its values.
//This gave me trouble using selectByVisibleText or other selector functions built into WebdriverIO. I had to resort to click() to complete this.

export default (dropdownSelector, listSelector, value) => { //dropdown selector = element ID for the dropdown arrow. listSelector = element class for items within list.
   dropdownSelector.click();
   listSelector.$(`.x-boundlist-item-text*=${value}`).click() //had to reference the actual element list here to recognize the clicks.
   
    }

