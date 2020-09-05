//Modal component
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Container, Col, Row, Form , Button} from "react-bootstrap";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
//import Autosuggest, { ItemAdapter } from 'react-bootstrap-autosuggest'
import '../App.css';
import Select from 'react-select';
import Popover from 'react-bootstrap/Popover'


const States = [
    { label: 'AL', value: 'Alabama' },
    // $fold-start$
    { label: 'AK', value: 'Alaska' },
    { label: 'AZ', value: 'Arizona' },
    { label: 'AR', value: 'Arkansas' },
    { label: 'CA', value: 'California' },
    { label: 'CO', value: 'Colorado' },
    { label: 'CT', value: 'Connecticut' },
    { label: 'DE', value: 'Delaware' },
    { label: 'FL', value: 'Florida' },
    { label: 'GA', value: 'Georgia' },
    { label: 'HI', value: 'Hawaii' },
    { label: 'ID', value: 'Idaho' },
    { label: 'IL', value: 'Illinois' },
    { label: 'IN', value: 'Indiana' },
    { label: 'IA', value: 'Iowa' },
    { label: 'KS', value: 'Kansas' },
    { label: 'KY', value: 'Kentucky' },
    { label: 'LA', value: 'Louisiana' },
    { label: 'ME', value: 'Maine' },
    { label: 'MD', value: 'Maryland' },
    { label: 'MA', value: 'Massachusetts' },
    { label: 'MI', value: 'Michigan' },
    { label: 'MN', value: 'Minnesota' },
    { label: 'MS', value: 'Mississippi' },
    { label: 'MO', value: 'Missouri' },
    { label: 'MT', value: 'Montana' },
    { label: 'NE', value: 'Nebraska' },
    { label: 'NV', value: 'Nevada' },
    { label: 'NH', value: 'New Hampshire' },
    { label: 'NJ', value: 'New Jersey' },
    { label: 'NM', value: 'New Mexico' },
    { label: 'NY', value: 'New York' },
    { label: 'NC', value: 'North Carolina' },
    { label: 'ND', value: 'North Dakota' },
    { label: 'OH', value: 'Ohio' },
    { label: 'OK', value: 'Oklahoma' },
    { label: 'OR', value: 'Oregon' },
    { label: 'PA', value: 'Pennsylvania' },
    { label: 'RI', value: 'Rhode Island' },
    { label: 'SC', value: 'South Carolina' },
    { label: 'SD', value: 'South Dakota' },
    { label: 'TN', value: 'Tennessee' },
    { label: 'TX', value: 'Texas' },
    { label: 'UT', value: 'Utah' },
    { label: 'VT', value: 'Vermont' },
    { label: 'VA', value: 'Virginia' },
    { label: 'WA', value: 'Washington' },
    { label: 'WV', value: 'West Virginia' },
    { label: 'WI', value: 'Wisconsin' },
    // $fold-end$
    { label: 'WY', value: 'Wyoming' }
]


export const popoverssnwrong = (props) => {
    console.log("In the modal" + props.show);
    return(

        <Modal show={props.show} >
            <Modal.Header>
                <h6>Hi </h6>
                <button
                    name="ssnwrong"
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={props.closeModals}>

                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>
            <Modal.Body>
                Enter social security with nine digits and no hypens! For you Trump lovers that means JUST NUMBERS
            </Modal.Body>
        </Modal>

    )
}


export const popoverssnwronglength = (props) => {
    //onClick={() => { props.showPopover("ssnmodalshow",false) }} // how to pass a function!
    console.log("In the modal" + props.show);
    return(

        <Modal show={props.show} >
            <Modal.Header>
                <h6>Hi </h6>
                <button
                    name="ssnwronglength"
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={props.closeModals}>

                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>
            <Modal.Body>
                Hey Bonehead - its only NINE digits
                Use your fingers and count!!!!
            </Modal.Body>
        </Modal>

    )
}

export const firstLastName = (props) => {

    //console.log(props.firsttouched);
    //console.log(props.lasttouched);
    //console.log(props.firstvalid);
    //console.log(props.lastvalid);
    //console.log('#################');

    let firstinputControl = "validname";
    let firstlabelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        firstinputControl = 'validname invalidname';
        firstlabelname = 'l1 l1invalid'

    }

    let lastinputControl = "validname";
    let lastlabelname = "l1";

    if (props.lasttouched && !props.lastvalid) {
        lastinputControl = 'validname invalidname';
        lastlabelname = 'l1 l1invalid'
    }



    return (

        <Form.Group as={Row} controlId="formMortgagePersonalInfoFName" className="formgroup">

            < Form.Label className={firstlabelname}>
                Name:
            </Form.Label>
            <Col>
                <Form.Control
                    type="text"
                    placeholder={props.firstplaceholder}
                    className={firstinputControl}
                    name="firstname"
                    value={props.firstvalue} // makes this a controlled component
                    onChange={props.onChange}
                />
            </Col>


            < Form.Label className={lastlabelname}>
                Last Name:
            </Form.Label>
            <Col>
                <Form.Control
                    type="text"
                    placeholder={props.lastplaceholder}
                    className={lastinputControl}
                    name="lastname"
                    value={props.lastvalue} // makes this a controlled component
                    onChange={props.onChange}
                />
            </Col>
        </Form.Group>

    )
}

export const spouseName = (props) => {
    let firstinputControl = "validname";
    let firstlabelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        firstinputControl = 'validname invalidname';
        firstlabelname = 'l1 l1invalid'

    }

    let lastinputControl = "validname";
    let lastlabelname = "l1";

    if (props.lasttouched && !props.lastvalid) {
        lastinputControl = 'validname invalidname';
        lastlabelname = 'l1 l1invalid'
    }

    return(

        <Form.Group  as={Row} controlId="formMortgagePersonalInfoSpouseName" className = "formgroup">


            <Form.Label  className={firstlabelname}>
                Spouse First Name:
            </Form.Label>

            <Col>
                <Form.Control
                    type="text"
                    placeholder={props.firstplaceholder}
                    className={firstinputControl}
                    name="spouse_firstname"
                    value={props.firstvalue} // makes this a controlled component
                    onChange={props.onChange}
                />
            </Col>


            <Form.Label className={lastlabelname}>
                Spouse Last Name:
            </Form.Label>


            <Col >
                <Form.Control
                    placeholder={props.lastplaceholder}
                    name = "spouse_lastname"
                    type="text"
                    className={lastinputControl}
                    value={props.lastvalue} // makes this a controlled component
                    onChange={props.onChange}
                />
            </Col>

        </Form.Group>

    )
}


export const streetCity = (props) => {



    let firstinputControl = "validname";
    let firstlabelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        firstinputControl = 'validname invalidname';
        firstlabelname = 'l1 l1invalid'

    }

    let lastinputControl = "validname";
    let lastlabelname = "l1";

    if (props.lasttouched && !props.lastvalid) {
        lastinputControl = 'validname invalidname';
        lastlabelname = 'l1 l1invalid';
    }


    return(


        <Form.Group  as={Row} controlId="formMortgagePersonalInfoCityStreet" className = "formgroup" >
            <Form.Label  className={firstlabelname}>
                Street:
            </Form.Label>
            <Col>
                <Form.Control
                    type="text"
                    placeholder={props.firstplaceholder}
                    className={firstinputControl}
                    name="street"
                    value={props.firstvalue} // makes this a controlled component
                    onChange={props.onChange}
                />
            </Col>
            <Form.Label  className={lastlabelname}>
                City:
            </Form.Label>
            <Col>
                <Form.Control
                    placeholder={props.lastplaceholder}
                    name = "city"
                    type="text"
                    className={lastinputControl}
                    value={props.lastvalue} // makes this a controlled component
                    onChange={props.onChange}
                />
            </Col>


        </Form.Group>

    )
}

export const stateZip = (props) => {

    let firstinputControl = "validname";
    let firstlabelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        firstinputControl = 'validname invalidname';
        firstlabelname = 'l1 l1invalid'

    }

    let lastinputControl = "validname";
    let lastlabelname = "l1";

    if (props.lasttouched && !props.lastvalid) {
        lastinputControl = 'validname invalidname';
        lastlabelname = 'l1 l1invalid'
    }

    return (

        <Form.Group  as={Row} controlId="formMortgagePersonalInfoCityStreet2" className = "formgroup">
            <Form.Label  className={firstlabelname}>
                State:
            </Form.Label>

            <Col>
                <Form.Control
                    type="text"
                    placeholder={props.firstplaceholder}
                    className={firstinputControl}
                    name="state"
                    value={props.firstvalue} // makes this a controlled component
                    onChange={props.onChange}
                />
            </Col>



            <Form.Label  className={lastlabelname}>
                Zip:
            </Form.Label>

            <Col>
                <Form.Control
                    placeholder={props.lastplaceholder}
                    name = "zip"
                    type="text"
                    className={lastinputControl}
                    value={props.lastvalue} // makes this a controlled component
                    onChange={props.onChange}
                />
            </Col>


        </Form.Group>


    )

}


export const birthdayssn = (props) => {


    let firstinputControl = "validname";
    let firstlabelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        firstinputControl = 'validname invalidname';
        firstlabelname = 'l1 l1invalid'

    }

    let lastinputControl = "validname";
    let lastlabelname = "l1";

    if (props.lasttouched && !props.lastvalid) {
        lastinputControl = 'validname invalidname';
        lastlabelname = 'l1 l1invalid';
    }

    if (props.lasttouched && props.lastvalid) {
        lastinputControl = 'validname invalidname';
        lastlabelname = 'l1 l1valid';
    }

    return(

        <Form.Group  as={Row} controlId="formMortgagePersonalInfoBirthdaySSN" className = "formgroup">

            <Form.Label  className={firstlabelname}>
                Birthday:
            </Form.Label>
            <Col>
                <Form.Control
                    type="text"
                    placeholder={props.firstplaceholder}
                    className={firstinputControl}
                    name="birthday"
                    value={props.firstvalue} // makes this a controlled component
                    onChange={props.firstonChange}
                />
            </Col>

                <Form.Label  className={lastlabelname}>
                    Social Security Number:
                </Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder={props.lastplaceholder}
                        className={firstinputControl}
                        name="socialsecuritynumber"
                        value={props.lastvalue} // makes this a controlled component
                        onChange={props.lastonChange}
                        onKeyUp = {props.lastonKeyUp}
                    />
                </Col>

            </Form.Group>

    )

}



export const income = (props) => {


    let firstinputControl = "validname";
    let firstlabelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        firstinputControl = 'validname invalidname';
        firstlabelname = 'l1 l1invalid'

    }


    return(


        <Form.Group as = {Row} controlId="formMortgagePersonalInfoIncome" className = "formgroup">
            <Form.Label className={firstlabelname} >Gross Income $</Form.Label>
                <Col>
                    <Form.Control
                        type = "text"
                        placeholder={props.placeholder}
                        value = {props.value}
                        onChange = {props.storeIncome}
                        className={firstinputControl}
                        name="rawincome"

                    />
                </Col>
        </Form.Group>

    )

}


export const education = (props) => {

    let inputControl = "radiovalidname";
    let firstlabelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        inputControl = 'radiovalidname invalidname';
        firstlabelname = 'l1 l1invalid'

    }


    return(
        <Form.Group as = {Row}  controlId="formMortgagePersonalInfoEducation" className = "formgroup">


            <Form.Label className={firstlabelname}>Length of Education:</Form.Label>

            <Col>

                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className={inputControl}>
                        <Form.Check inline
                                    label = "HighSchool"
                                    value="21"
                                    name = "education"
                                    type={type}
                                    id={`inline-Education-1`}
                                    onChange ={props.handleChange}
                        />
                        <Form.Check inline
                                    label = "Associate"
                                    value="22"
                                    name = "education"
                                    type={type}
                                    id={`inline-Education-2`}
                                    onChange ={props.handleChange}
                        />

                        <Form.Check inline
                                    label = "Bachelors"
                                    value="23"
                                    name = "education"
                                    type={type}
                                    id={`inline-Education-3`}
                                    onChange ={props.handleChange}
                        />
                        <Form.Check inline
                                    label = "Graduate"
                                    value="24"
                                    name = "education"
                                    type={type}
                                    id={`inline-Education-4`}
                                    onChange ={props.handleChange}
                        />

                    </div>


                ))}

            </Col>

        </Form.Group>

    )

}





export const maritalStatus = (props) => {

    let inputControl = "radiovalidname";
    let labelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        inputControl = 'radiovalidname invalidname';
        labelname = 'radiovalidname'

    }


    return(

        <Form.Group as = {Row} controlId="formMortgagePersonalInfoMaritalStatus" className = "formgroup">

            <Form.Label className={labelname}>Marital Status</Form.Label>
            <Col>

                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className={inputControl}>
                        <Form.Check inline
                                    label = "Single"
                                    value="Single"
                                    name = "maritalstatus"
                                    type={type}
                                    id={`inline-MaritalStatus-1`}
                                    onChange ={props.hideSpouse}

                        />
                        <Form.Check inline
                                    label = "Married"
                                    value="Married"
                                    name = "maritalstatus"
                                    type={type}
                                    id={`inline-MaritalStatus-2`}
                                    onChange ={props.showSpouse}

                        />

                        <Form.Check inline
                                    label = "Divorced"
                                    value="Divorced"
                                    name = "maritalstatus"
                                    type={type}
                                    id={`inline-MaritalStatus-3`}
                                    onChange ={props.hideSpouse}

                        />

                    </div>
                ))}
            </Col>

        </Form.Group>





    )
}


export const dependents = (props) => {

    //console.log("in dependents display" + props.value)

    let inputControl = "radiovalidname";
    let labelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        inputControl = 'radiovalidname invalidname';
        labelname = 'l1 l1invalid'

    }

    let checkedbuttonnumber = props.value;

    //console.log(checkedbuttonnumber==="2");


    return(

        <Form.Group as = {Row} controlId="formMortgagePersonalInfoNumDependents" className = "formgroup">

            <Form.Label className={labelname}>Number of Dependents</Form.Label>
            <Col>

                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className={inputControl}>
                        <Form.Check inline
                                    label = "0"
                                    value="0"
                                    name = "numdependents"
                                    type={type}
                                    id={`inline-NumDependents-1`}
                                    onChange ={props.parseKids}
                                    defaultChecked = {checkedbuttonnumber === "0"}



                        />
                        <Form.Check inline
                                    label = "1"
                                    value="1"
                                    name = "numdependents"
                                    type={type}
                                    id={`inline-NumDependents-2`}
                                    onChange ={props.parseKids}
                                    defaultChecked = {checkedbuttonnumber === "1"}


                        />

                        <Form.Check inline
                                    label = "2"
                                    value="2"
                                    name = "numdependents"
                                    type={type}
                                    id={`inline-NumDependents-3`}
                                    onChange ={props.parseKids}
                                    defaultChecked = {checkedbuttonnumber === "2"}


                        />
                        <Form.Check inline
                                    label = "3"
                                    value="3"
                                    name = "numdependents"
                                    type={type}
                                    id={`inline-NumDependents-4`}
                                    onChange ={props.parseKids}
                                    defaultChecked = {checkedbuttonnumber === "3"}


                        />
                        <Form.Check inline
                                    label = "4"
                                    value="4"
                                    name = "numdependents"
                                    type={type}
                                    id={`inline-NumDependents-5`}
                                    onChange ={props.parseKids}
                                    defaultChecked = {checkedbuttonnumber === "4"}


                        />
                        <Form.Check inline
                                    label = "5+"
                                    value="5"
                                    name = "numdependents"
                                    type={type}
                                    id={`inline-NumDependents-6`}
                                    onChange ={props.parseKids}
                                    defaultChecked = {checkedbuttonnumber === "5"}


                        />

                    </div>
                ))}
            </Col>

        </Form.Group>

    )
}


export const residence= (props) => {

    let inputControl = "radiovalidname";
    let labelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        inputControl = 'radiovalidname invalidname';
        labelname = 'l1 l1invalid'

    }


   return (

       <Form.Group as = {Row} controlId="formMortgagePersonalInfoResidence" className = "formgroup">
           <Form.Label className={labelname}>Residence Type</Form.Label>
           {['radio'].map((type) => (
               <div key={`inline-${type}`} className={inputControl}>
                   <Form.Check
                       inline
                       label="Owner"
                       type={type}
                       id={`inline-${type}-1`}
                       name = "residence"
                       value = "owner"
                       onChange = {props.handleChange}
                   />
                   <Form.Check
                       inline
                       label="Tenant"
                       type={type}
                       id={`inline-${type}-2`}
                       name = "residence"
                       value = "tenant"
                       onChange = {props.handleChange}
                   />
                   <Form.Check
                       inline
                       label="Living with Relative"
                       type={type}
                       id={`inline-${type}-3`}
                       name = "residence"
                       value = "livewithrelative"
                       onChange = {props.handleChange}
                   />
               </div>
           ))}
       </Form.Group>




   )
}



export const applications = (props) => {

    let inputControl = "radaiovalidname";
    let labelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        inputControl = 'radiovalidname invalidname';
        labelname = 'l1 l1invalid'

    }


    return(
        <Form.Group as = {Row}  controlId="formMortgagePersonalInfoApplications" className = "formgroup">


            <Form.Label className={labelname}>Number of Past Applications</Form.Label>

                <Col>

                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className={inputControl}>
                            <Form.Check inline
                                        label = "0"
                                        value="0"
                                        name = "pastapplications"
                                        type={type}
                                        id={`inline-PastApplications-1`}
                                        onChange ={props.handleChange}
                            />
                            <Form.Check inline
                                        label = "1"
                                        value="1"
                                        name = "pastapplications"
                                        type={type}
                                        id={`inline-PastApplications-2`}
                                        onChange ={props.handleChange}
                            />

                            <Form.Check inline
                                        label = "2"
                                        value="2"
                                        name = "pastapplications"
                                        type={type}
                                        id={`inline-PastApplications-3`}
                                        onChange ={props.handleChange}
                            />
                            <Form.Check inline
                                        label = "3+"
                                        value="3"
                                        name = "pastapplications"
                                        type={type}
                                        id={`inline-PastApplications-4`}
                                        onChange ={props.handleChange}
                            />

                        </div>


                    ))}

            </Col>

        </Form.Group>

    )

}


export const applicationsdenied = (props) => {

    let inputControl = "radiovalidname";
    let labelname = "l1";


    if (props.firsttouched && !props.firstvalid) {
        inputControl = 'radiovalidname invalidname';
        labelname = 'l1 l1invalid'

    }


        return(
            <Form.Group as = {Row}  controlId="formMortgagePersonalInfoApplicationsDenied" className = "formgroup">

            <Form.Label className={labelname}>Number of Past Applications Denied</Form.Label>

            <Col>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className={inputControl}>
                        <Form.Check inline
                                    label = "0"
                                    value="0"
                                    name = "pastapplicationsdenied"
                                    type={type}
                                    id={`inline-PastApplicationsDenied-1`}
                                    onChange ={props.handleChange}
                        />
                        <Form.Check inline
                                    label = "1"
                                    value="1"
                                    name = "pastapplicationsdenied"
                                    type={type}
                                    id={`inline-PastApplicationsDenied-2`}
                                    onChange ={props.handleChange}
                        />

                        <Form.Check inline
                                    label = "2"
                                    value="2"
                                    name = "pastapplicationsdenied"
                                    type={type}
                                    id={`inline-PastApplicationsDenied-3`}
                                    onChange ={props.handleChange}
                        />
                        <Form.Check inline
                                    label = "3+"
                                    value="3"
                                    name = "pastapplicationsdenied"
                                    type={type}
                                    id={`inline-PastApplicationsDenied-4`}
                                    onChange ={props.handleChange}
                        />

                    </div>


                ))}

            </Col>

        </Form.Group>

    )
}

export const okeedokee = (props) => {
    return(
        <Form.Group  as={Row} controlId="thanksforsubmitting" className = "formgroup">

            <Col>
                Thanks for submitting your application! We are reviewing and validating your information using a battery
                of sophisticated algortihmic tools from DataTwin.  You should receive an email shortly with an account number
                and password.
            </Col>
        </Form.Group>
    )
}


export const basicssnmistake = (props) => {
    return(
        <Form.Group  as={Row} controlId="basicssnmistake" className = "formgroup">

            <Col>
                Your Social Security Number contains exactly 9 numbers with no letters or other characters.  Please check what you have entered.
            </Col>
        </Form.Group>
    )
}