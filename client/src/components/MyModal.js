//Modal component
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import * as displays from './DisplayFunctions.js';


export const MyModal2 = (props) => {

    return (


        <Modal
            show = {props.show}
            showArray={props.showArray}
            showincome = {props.showincome}
            animation = {true}
            size = "md"
        >
            <Modal.Header>
                <h6>Hi {props.firstname.value},
                this bank uses advanced algorithmic software from DataTwin to check for errors and issues that
                    can affect your application. Either confirm or correct the information below.</h6>
                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={props.parentAction}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>


            <Modal.Body>
                <p>Please confirm this information</p>


                { props.showArray.dependents ? < displays.dependents  numdependents = {props.numdependents} parseKids = {props.parseKids} /> : ""}
                { props.showArray.income ? < displays.income  rawincome = {props.rawincome} storeIncome = {props.storeIncome}/>: "" }
                { props.showArray.education ? < displays.education  education = {props.education}  handleChange = {props.handleChange2} /> : "" }
                { props.showArray.okeedokee ? < displays.okeedokee />: "" }

            </Modal.Body>


            <Modal.Footer>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={props.parentAction}
                >
                    Confirm
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={props.parentAction}
                >
                    Save changes
                </button>
            </Modal.Footer>
        </Modal>
    )
}


export default MyModal2;