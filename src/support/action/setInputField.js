export default (value, selector) => { //selector = relevant element for our fields. 
    let sanitizedValue = value; //We want to clean our values

    if (!value){
        sanitizedValue = '';
    }

    selector.setValue(sanitizedValue); //We use the setValue command here update the element with our now sanitized value.
    
    }