export default (dropdownSelector, listSelector, value) => {
   dropdownSelector.click();
   listSelector.$(`.x-boundlist-item-text*=${value}`).click()
   
    }

