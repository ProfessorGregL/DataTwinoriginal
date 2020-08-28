import React, { Component } from 'react';


const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
}

const requiredValidator = (value) => {
    return value.trim() != '';
}

// actually name validator
// https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
// Alexander Burakevych
const lettersOnlyValidator = (value) => {

    var re = /^[a-zA-Z '.-]*$/;
    return re.test(String(value).toLowerCase());
}


const validate = (value,rules) => {
    let isValid = true;

    for (let rule in rules) {

        switch (rule) { // has to have every rule from every target !
            case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;
            case 'isRequired': isValid = isValid && requiredValidator(value); break;
            case 'lettersOnly': isValid = isValid && lettersOnlyValidator(value); break;

            default: isValid = true;
        }

    }

    return isValid;
}

export default validate;