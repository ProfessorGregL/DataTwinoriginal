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
    console.log("in min length validator " + value.length + "  " + minLength);
    console.log (value.length >= minLength);
    return (value.length >= minLength);
}

const requiredValidator = (value,comp) => {
    console.log("in required validator");
    return (value.trim() != '' === comp);
}

// actually name validator
// https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
// Alexander Burakevych
const lettersOnlyValidator = (value,comp) => {
    console.log("in letters only validator");
    let re = /^[a-zA-Z'.-]*$/;
    console.log( re.test(String(value).toLowerCase()));
    return (re.test(String(value).toLowerCase()) === comp);
}

const emptyTextFieldValidator = (value,comp) => {
    console.log("in empty field validator");
    console.log("empty" + (value.length === 0));
    return ((value.length === 0)=== comp);

}

//https://stackoverflow.com/questions/19715303/regex-that-accepts-only-numbers-0-9-and-no-characters
//Michael Liu
//
const numbersOnlyValidator = (value,comp) => {

    console.log("in numbers only validator");
    //accept one or more digits
    let re = /^[0-9]+$/;
    console.log(re.test(Number(value)));
    return (re.test(Number(value)) === comp);


}


const streetValidator = (value,comp) => {

    console.log("in street validator");
    let re = /\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?/;
    return (re.test(String(value).toLowerCase()) === comp);

}



const cityValidator = (value,comp) => {

    console.log("in city validator");
    let re = /(?:[A-Z][a-z.-]+[ ]?)+/;
    return (re.test(String(value).toLowerCase()) === comp);



}

const stateValidator = (value,comp) => {

/// not needed  ///////////////

}

const zipValidator = (value,comp) => {

    console.log("in zip validator");

    //let re = /^[0-9]{5}$/
    let re = /^[0-9]{5}(?:-[0-9]{4})?$/;

    console.log("in the zipp " + (re.test(String(value))));
    return (re.test(String(value)) === comp);
}




const ageValidator = (value,comp) => {


    console.log("in age validator");
    let re = /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/;
    return (re.test(Number(value)) === comp);


}

const validate = (value,rules) => {

    let isValid = true;

    for (let rule in rules) {

        console.log(" rule "+ rule + "isvalid " + isValid)

        switch (rule) { // has to have every rule from every target !
            case 'minLengthValidator': isValid = (isValid && minLengthValidator(value, rules[rule]));
            break;
            case 'requiredValidator': isValid = isValid && requiredValidator(value, rules[rule]);
            break;
            case 'lettersOnlyValidator': isValid = isValid && lettersOnlyValidator(value, rules[rule]);
            break;
            case 'basicSSNValidator': isValid = isValid && basicSSNValidator(value);
            break;
            case 'emptyTextFieldValidator': isValid = isValid && emptyTextFieldValidator(value, rules[rule]);
            break;
            case 'numbersOnlyValidator': isValid = isValid && numbersOnlyValidator(value, rules[rule]);
            break;
            case 'zipValidator': isValid = isValid && zipValidator(value, rules[rule]);
            break;
            case 'ageValidator': isValid = isValid && ageValidator(value, rules[rule]);
            break;
            //default: isValid = true;
        }

    }


    console.log( "isvalid " + isValid)
    return isValid;
}

export default validate;