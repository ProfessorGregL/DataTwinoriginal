import React, { Component , useState } from 'react';
import axios from 'axios';
import { Container, Col, Row, Form , Button} from "react-bootstrap";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import update from 'immutability-helper';
import validate from './components/validator.js';


//import ModalClass from "./components/ModalClass";  -- using a class
import MyModal2 from "./components/MyModal"; // using a function

import * as displays from './components/DisplayFunctions.js';  // note the differences from the import validate above

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange2 = this.handleChange2.bind(this);
        this.parseIncome = this.parseIncome.bind(this);
        this.parseKids = this.parseKids.bind(this);
        this.hideSpouse2 = this.hideSpouse2.bind(this);
        this.showSpouse2 = this.showSpouse2.bind(this);
        this.toggle = this.toggle.bind(this);  // added for modal
        this.storeIncome = this.storeIncome.bind(this);
        this.printValue = this.printValue.bind(this);

        this.state = {
            showFormMortgagePersonalInfoSpouseName: false,
            hideFormMortgagePersonalInfoSpouseName: true,
            show: false,
            close: false,
            showmodal: false,
            formIsValid: false,

            showArray: {
                dependents: '',
                income: '',
                education: '',
                okeedokee: false
            },


            formControls: {
                firstname: {
                    value: '',
                    placeholder: 'First name',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        minLength: 2, // names like Jo (is that a real name)
                        isRequired: true,
                        lettersOnly: true
                    }
                },
                lastname: {
                    value: '',
                    placeholder: 'Last name',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        minLength: 2, // names like Jo (is that a real name)
                        isRequired: true,
                        lettersOnly: true
                    }
                },

                spouse_firstname: {
                    value: '',
                    placeholder: 'First name',
                    valid: false,
                    touched: false,
                    visible: 'false',
                    validationRules: {
                        minLength: 2, // names like Jo (is that a real name)
                        isRequired: true,
                        lettersOnly: true
                    }
                },
                spouse_lastname: {
                    value: '',
                    placeholder: 'Fast name',
                    valid: false,
                    touched: false,
                    visible: 'false',
                    validationRules: {
                        minLength: 2, // names like Jo (is that a real name)
                        isRequired: true,
                        lettersOnly: true
                    }
                },
                street: {
                    value: '',
                    placeholder: 'Street',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        minLength: 2,
                        isRequired: true,
                    }
                },
                city: {
                    value: '',
                    placeholder: 'City',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        minLength: 4,
                        isRequired: true,
                        lettersOnly: true
                    }
                },
                state: {
                    value: '',
                    placeholder: 'State',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        minLength: 2,
                        isRequired: true,
                    }
                },
                zip: {
                    value: '',
                    placeholder: 'Zip',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        minLength: 2,
                        isRequired: true,
                    }
                },
                birthday: {
                    value: '',
                    placeholder: '1/24/2000',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        isRequired: true,
                    }
                },
                socialsecuritynumber: {
                    value: '',
                    placeholder: '111-222-3333',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        isRequired: true,
                    }
                },
                maritalstatus: {
                    value: '',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        isRequired: true,
                    }
                },
                numdependents: {
                    value: '',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        isRequired: true,
                    }
                },
                income: {
                    value: '',
                    placeholder: '40000',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        isRequired: true,
                    }
                },
                rawincome: {
                    value: '',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        isRequired: true,
                    }
                },
                pastapplications: {
                    value: '',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        isRequired: true,
                    }
                },
                pastapplicationsdenied: {
                    value: '',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        isRequired: true,
                    }
                },
                education: {
                    value: '',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        isRequired: true,
                    }
                },
                residence: {
                    value: '',
                    valid: false,
                    touched: false,
                    visible: true,
                    validationRules: {
                        isRequired: true,
                    }
                }

            }
        };


    }


    // in the event handler need to do a post to the express server passing the user name
    // then the server will run the api retrieval and returnt he numebr of repos

    /*axios.post(`http://localhost:9000/testAPI`, this.state.formControls).then(res => {
    console.log("im here");
    console.log(res.data);
    })
    */

    toggle = () => {

        console.log(this.state.showmodal);
        this.setState({showmodal: !this.state.showmodal});// added for modal
    }


    handleSubmit = (e) => {

        //if (this.state.formControls.numdependents.value === "3") {
        //    this.toggle();
        //}

        //e.preventDefault();

        if (!this.state.formIsValid) {


            const fControls = {
                ...this.state.formControls // gives you all of the form controls and all their ste elements
            };

            for (let inputIdentifier in fControls) {

                if (fControls[inputIdentifier].valid == false) {
                    // set the label style to be red
                }
            }

        }
        if (this.state.formIsValid) {

            let mynum = 0;

            axios.post(`http://localhost:9000/testAPI`, this.state.formControls).then(res => {

                console.log(res.body);
                const newState = update(this.state, {
                    showArray: {
                        dependents: {$set: res.data[0]},
                        income: {$set: res.data[1]},
                        education: {$set: res.data[2]}

                    },
                });

                this.setState(newState);

                console.log("state");
                console.log(this.state);

                console.log(res.data[0] || res.data[1] || res.data[2])

                if (res.data[0] || res.data[1] || res.data[2]) {

                    this.setState({showmodal: true});
                } else {

                    const newState = update(this.state, {
                        showArray: {
                            okeedokee: {$set: true}
                        },
                    });

                    this.setState(newState);
                }
            }, () => {
                console.log(this.state); // Note how the callback fixes the async issue with last character

            });

        }
    }


// helper change handler
    handleChange = (name, value, visible = true) => {

        const updatedControls = {
            ...this.state.formControls // gives you all of the form controls and all their ste elements
        };

        // all of the state for firstname (or whatever is the target) - particular form control
        const updatedFormElement = {
            ...updatedControls[name]
        };

        updatedFormElement.value = value;
        updatedFormElement.touched = true; // we did enter something - may not be correct yet
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules); // goes though each rule in switch

        updatedControls[name] = updatedFormElement;

        let formIsValid = true;


        // dealing with the conditional display - there has got to be a better way to do this
        for (let inputIdentifier in updatedControls) {

            if (updatedControls[inputIdentifier].visible) {
                formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
            }
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        }, () => {
            console.log("checking form is valid");
            console.log(this.state);


        });

    }


// can handle any target
    handleChange2 = (e) => {


        const name = e.target.name;

        const value = e.target.value;

        const updatedControls = {
            ...this.state.formControls // gives you all of the form controls and all their ste elements
        };

        // all of the state for firstname (or whatever is the target) - particular form control
        const updatedFormElement = {
            ...updatedControls[name]
        };


        updatedFormElement.value = value;
        updatedFormElement.touched = true; // we did enter something - may not be correct yet
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules); // goes though each rule in switch

        updatedControls[name] = updatedFormElement;

        let formIsValid = true;


        // dealing with the conditional display - there has got to be a better way to do this
        for (let inputIdentifier in updatedControls) {

            if (updatedControls[inputIdentifier].visible) {
                formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
            }
        }


        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        }, () => {
            console.log(this.state);

        });

    }

// tink this was a test function ????
    requestRiskScore = (e) => {
        e.preventDefault();
        const user = e.target.elements.firstName.value;
        if (user) {

            console.log(user);

            axios.post(`http://localhost:9000/testAPI`, {user}).then(res => {

                if (res.data === "its greg") {
                    this.setState({
                        isGreg: true
                    })
                } else {
                    this.setState({
                        isGreg: false
                    })
                }
                console.log(res.data)
                console.log(this.state.isGreg)
            })

        } else {
            return;
        }
    }


    hideSpouse2 = e => {  // called from marital selector

        let fieldname1 = "spouse_firstname";

        const value = e.target.value;

        let updatedControls = {
            ...this.state.formControls // gives you all of the form controls and all their ste elements
        };

        // all of the state for firstname (or whatever is the target) - particular form control
        const updatedFormElement = {
            ...updatedControls[fieldname1]
        };

        updatedFormElement.visible = false;

        updatedControls[fieldname1] = updatedFormElement;

        ///////////////////////////////////////////////////////////////////////

        fieldname1 = "spouse_lastname";

        // all of the state for firstname (or whatever is the target) - particular form control
        const updatedFormElement2 = {
            ...updatedControls[fieldname1]
        };

        updatedFormElement2.visible = false;

        updatedControls[fieldname1] = updatedFormElement2;

        let name1 = "spouse_firstname";
        let name2 = "spouse_lastname";

        console.log(updatedControls[name1])
        console.log(updatedControls[name2])

        this.setState({
            showFormMortgagePersonalInfoSpouseName: false,
            hideFormMortgagePersonalInfoSpouseName: true,
            formControls: updatedControls
        }, () => {
            console.log(this.state);
            this.handleChange("maritalstatus", value);

        });
    }


    showSpouse2 = e => {  // called from marital selector

        let fieldname1 = "spouse_firstname";

        const value = e.target.value;

        let updatedControls = {
            ...this.state.formControls // gives you all of the form controls and all their ste elements
        };

        // all of the state for firstname (or whatever is the target) - particular form control
        const updatedFormElement = {
            ...updatedControls[fieldname1]
        };

        updatedFormElement.visible = true;

        updatedControls[fieldname1] = updatedFormElement;

        ///////////////////////////////////////////////////////////////////////

        fieldname1 = "spouse_lastname";

        // all of the state for firstname (or whatever is the target) - particular form control
        const updatedFormElement2 = {
            ...updatedControls[fieldname1]
        };

        updatedFormElement2.visible = true;

        updatedControls[fieldname1] = updatedFormElement2;

        let name1 = "spouse_firstname";
        let name2 = "spouse_lastname";

        console.log(updatedControls[name1])
        console.log(updatedControls[name2])

        this.setState({
            showFormMortgagePersonalInfoSpouseName: true,
            hideFormMortgagePersonalInfoSpouseName: false,
            formControls: updatedControls
        }, () => {
            console.log(this.state);
            this.handleChange("maritalstatus", value);

        });
    }


    printValue = e => {

        console.log(e.target.value);

    }


//converts the dollar amount to the index
    parseIncome = () => {

        let tempvalue = this.state.formControls.rawincome.value;
        let incomenumber = '';

        if (tempvalue < 0) {
            console.log("income must be positive") // todo this should generate an immediate pop up
        } else if (tempvalue >= 0 && tempvalue <= 13850) {
            incomenumber = "11";
        } else if (tempvalue > 13850 && tempvalue <= 52850) {
            incomenumber = "12";
        } else if (tempvalue > 52850 && tempvalue <= 84200) {
            incomenumber = "13";
        } else if (tempvalue > 84200 && tempvalue <= 160700) {
            incomenumber = "14";
        } else if (tempvalue > 160700 && tempvalue <= 204100) {
            incomenumber = "15";
        } else if (tempvalue > 204100 && tempvalue <= 510300) {
            incomenumber = "16";
        } else if (tempvalue > 510300) {
            incomenumber = "17";
        }

        let name = "income";
        let value = incomenumber;

        console.log(incomenumber);

        this.handleChange(name, value);

    }

    storeIncome = e => {
        const name = e.target.name;

        console.log(e.target.name);

        const value = e.target.value;

        const updatedControls = {
            ...this.state.formControls // gives you all of the form controls and all their ste elements
        };

        // all of the state for firstname (or whatever is the target) - particular form control
        const updatedFormElement = {
            ...updatedControls[name]
        };


        updatedFormElement.value = value;
        updatedFormElement.touched = true; // we did enter something - may not be correct yet
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules); // goes though each rule in switch

        updatedControls[name] = updatedFormElement;

        let formIsValid = true;


        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }


        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        }, () => {
            this.parseIncome();

        });
    }

    parseKids = e => {
        let name = "numdependents";
        let value = Number(e.target.value);
        if (value >= 5) {
            value = 5;
        }
        value = String(value);
        this.handleChange(name, value);
    }


    setUpModal = (displayRiskyVariables) => {


    }


    render() {

        const {showFormMortgagePersonalInfoSpouseName, hideFormMortgagePersonalInfoSpouseName, showmodal} = this.state;

        return (

            <Container className="container">

                <Form
                    className="form"
                    /*onSubmit = {this.handleSubmit}*/
                >


                    <Form.Label className="l2">
                        Personal Information:
                    </Form.Label>


                    <displays.firstLastName
                        type="text"
                        firstplaceholder={this.state.formControls.firstname.placeholder}
                        lastplaceholder={this.state.formControls.lastname.placeholder}
                        firstvalue={this.state.formControls.firstname.value} // makes this a controlled component
                        lastvalue={this.state.formControls.lastname.value}
                        onChange={this.handleChange2}
                        firstvalid={this.state.formControls.firstname.valid}
                        lastvalid={this.state.formControls.lastname.valid}
                        firsttouched={this.state.formControls.firstname.touched}
                        lasttouched={this.state.formControls.lastname.touched}
                    />


                    {showFormMortgagePersonalInfoSpouseName && !hideFormMortgagePersonalInfoSpouseName && (
                        <displays.spouseName
                            type="text"
                            firstplaceholder={this.state.formControls.spouse_firstname.placeholder}
                            lastplaceholder={this.state.formControls.spouse_lastname.placeholder}
                            firstvalue={this.state.formControls.spouse_firstname.value} // makes this a controlled component
                            lastvalue={this.state.formControls.spouse_lastname.value}
                            onChange={this.handleChange2}
                            firstvalid={this.state.formControls.spouse_firstname.valid}
                            lastvalid={this.state.formControls.spouse_lastname.valid}
                            firsttouched={this.state.formControls.spouse_firstname.touched}
                            lasttouched={this.state.formControls.spouse_lastname.touched}
                        /> )}


                    <displays.streetCity
                        type="text"
                        firstplaceholder={this.state.formControls.street.placeholder}
                        lastplaceholder={this.state.formControls.city.placeholder}
                        firstvalue={this.state.formControls.street.value} // makes this a controlled component
                        lastvalue={this.state.formControls.city.value}
                        onChange={this.handleChange2}
                        firstvalid={this.state.formControls.street.valid}
                        lastvalid={this.state.formControls.city.valid}
                        firsttouched={this.state.formControls.street.touched}
                        lasttouched={this.state.formControls.city.touched}
                    />


                    <displays.stateZip
                        type="text"
                        firstplaceholder={this.state.formControls.state.placeholder}
                        lastplaceholder={this.state.formControls.zip.placeholder}
                        firstvalue={this.state.formControls.state.value} // makes this a controlled component
                        lastvalue={this.state.formControls.zip.value}
                        onChange={this.handleChange2}
                        firstvalid={this.state.formControls.state.valid}
                        lastvalid={this.state.formControls.zip.valid}
                        firsttouched={this.state.formControls.state.touched}
                        lasttouched={this.state.formControls.zip.touched}
                    />


                    <displays.birthdayssn
                        type="text"
                        firstplaceholder={this.state.formControls.birthday.placeholder}
                        firstvalue={this.state.formControls.birthday.value} // makes this a controlled component
                        firstonChange={this.handleChange2}
                        firstvalid={this.state.formControls.birthday.valid}
                        firsttouched={this.state.formControls.birthday.touched}
                        lastplaceholder={this.state.formControls.socialsecuritynumber.placeholder}
                        lastvalue={this.state.formControls.socialsecuritynumber.value} // makes this a controlled component
                        lastonChange={this.handleChange2}
                        lastvalid={this.state.formControls.socialsecuritynumber.valid}
                        lasttouched={this.state.formControls.socialsecuritynumber.touched}
                    />

                    <displays.maritalStatus
                        numdependents={this.state.formControls.maritalstatus.value}
                        showSpouse={this.showSpouse2}
                        hideSpouse={this.hideSpouse2}
                        type="text"
                        value={this.state.formControls.maritalstatus.value} // makes this a controlled component
                        valid={this.state.formControls.maritalstatus.valid}
                        touched={this.state.formControls.maritalstatus.touched}/>


                    <displays.dependents
                        numdependents={this.state.formControls.numdependents.value}
                        parseKids={this.parseKids}
                        type="text"
                        value={this.state.formControls.numdependents.value} // makes this a controlled component
                        valid={this.state.formControls.numdependents.valid}
                        touched={this.state.formControls.numdependents.touched}/>


                    <displays.residence
                        residence={this.state.formControls.residence.value}
                        handleChange={this.handleChange2}
                        type="text"
                        value={this.state.formControls.residence.value} // makes this a controlled component
                        valid={this.state.formControls.residence.valid}
                        touched={this.state.formControls.residence.touched}/>


                    <displays.income
                        rawincome={this.state.formControls.rawincome.value}
                        storeIncome={this.storeIncome}
                        placeholder={this.state.formControls.income.placeholder}
                        valid={this.state.formControls.rawincome.valid}
                        touched={this.state.formControls.rawincome.touched}/>


                    <displays.education
                        education={this.state.formControls.education.value}
                        handleChange={this.handleChange2}
                        type="text"
                        placeholder={this.state.formControls.education.placeholder}
                        value={this.state.formControls.education.value} // makes this a controlled component
                        valid={this.state.formControls.education.valid}
                        touched={this.state.formControls.education.touched}/>

                    <Form.Label className="l2">
                        Mortgage Applications:
                    </Form.Label>


                    <displays.applications
                        applications={this.state.formControls.pastapplications.value}
                        handleChange={this.handleChange2}
                        placeholder={this.state.formControls.pastapplications.placeholder}
                        value={this.state.formControls.pastapplications.value} // makes this a controlled component
                        valid={this.state.formControls.pastapplications.valid}
                        touched={this.state.formControls.pastapplications.touched}/>

                    <displays.applicationsdenied
                        applicationsdenied={this.state.formControls.pastapplicationsdenied.value}
                        handleChange={this.handleChange2}
                        placeholder={this.state.formControls.pastapplicationsdenied.placeholder}
                        value={this.state.formControls.pastapplicationsdenied.value} // makes this a controlled component
                        valid={this.state.formControls.pastapplicationsdenied.valid}
                        touched={this.state.formControls.pastapplicationsdenied.touched}/>


                    <Form.Group as={Row} controlId="submitButton" className="formgroup">
                        <Col>
                            <Button
                                className="submitButton"
                                onClick={this.handleSubmit}
                                disabled={!this.state.formIsValid}
                            > Submit
                            </Button>
                        </Col>

                    </Form.Group>


                    <Form.Group as={Row} controlId="modalButton" className="formgroup">
                        <Col>
                            <Button
                                className="submitButton"

                                onClick={this.toggle}
                            >
                                Show Modal
                            </Button>
                        </Col>

                    </Form.Group>


                    {showmodal && (
                        <MyModal2
                            show={this.state.showmodal}
                            showArray={this.state.showArray}
                            firstname={this.state.formControls.firstname}
                            rawincome={this.state.formControls.rawincome}
                            numdependents={this.state.formControls.numdependents}
                            education={this.state.formControls.education}
                            storeIncome={this.storeIncome}
                            parentAction={this.toggle}/>
                        /*  <ModalClass show = {this.state.show} parentAction = {this.toggle}/>*/
                    )}

                </Form>
            </Container>
        );

    }

}





export default App;