export default (value, selector) => {
    let sanitizedValue = value;

    if (!value){
        sanitizedValue = '';
    }

    selector.getAttribute(sanitizedValue); //using getAttribute command to confirm the element in our field with our sanitized value.

    }