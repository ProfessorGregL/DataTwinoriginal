import React, { Component } from 'react';

//https://www.codeproject.com/Articles/651609/Validating-Social-Security-Numbers-through-Regular
const basicSSNValidator = (value) => {
    //strip hyphens out of string
    var newValue = value.replace(/-/g, "");
    // basic check that you only have 9 numbers
    let re = /^\d{9}$/;
    console.log("basic test :"+ re.test(String(newValue)));
    return re.test(String(newValue));
}


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

    let re = /^[a-zA-Z '.-]*$/;
    return re.test(String(value).toLowerCase());
}


const validate = (value,rules) => {
    let isValid = true;

    for (let rule in rules) {

        switch (rule) { // has to have every rule from every target !
            case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;
            case 'isRequired': isValid = isValid && requiredValidator(value); break;
            case 'lettersOnly': isValid = isValid && lettersOnlyValidator(value); break;
            case 'basicSSNValidator': isValid = isValid && basicSSNValidator(value); break;
            default: isValid = true;
        }

    }

    return isValid;
}

export default validate;