import { Button, Modal, InputGroup, Form, FormControl } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import Senddata from './Senddata';


function Addtransaction(props) {
    const options = [
        {
            key:1,
            label: "Debit",
            value: "debit",
        },
        {
            key:2,
            label: "Credit",
            value: "credit",
        }];
    const [transactionType, setTransactionType] = useState();
    const [transactionAmount, setTransactionAmount] = useState();
    const [transactionDescription, setTransactionDescription] = useState();
    const handleSubmit = (e) => {
        Senddata({transactionType,transactionAmount,transactionDescription});
        e.preventDefault();
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Enter Transaction Details
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Enter Amount</h5>
                <p>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Transaction Type</Form.Label>
                        <Form.Control as="select" name='type' value={transactionType} defaultValue={transactionType} onChange={e => setTransactionType(e.target.value)}>
                            {options.map((option) => (
                                <option value={option.value} key={option.key}>{option.label}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>₹</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount (to the nearest Rupees)" type="number" name='amount' value={transactionAmount} onChange={e => setTransactionAmount(e.target.value)} />
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Description: </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" name='description' value={transactionDescription} onChange={e => setTransactionDescription(e.target.value)} />
                    </InputGroup>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={transactionType && transactionAmount && transactionDescription ? e => { 
                    if(props.totalBalance==0 && transactionType=="debit"){
                        if(transactionAmount>props.totalBalance){
                            alert("Amount can not be debited.!! ")    
                        }
                    }
                    else{
                    handleSubmit(e)
                    props.isDataInserted()}
                    }:null}
                    >Add Transaction</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Addtransaction;