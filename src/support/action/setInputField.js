export default (value, selector) => {
    let sanitizedValue = value;

    if (!value){
        sanitizedValue = '';
    }

    selector.setValue(sanitizedValue);
    
    }