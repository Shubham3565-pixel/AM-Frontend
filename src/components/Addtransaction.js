import { Button, Modal, InputGroup, Form, FormControl } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import Senddata from './Senddata';


function Addtransaction(props) {
    const options = [
        {
            key: 1,
            label: "Choose Transaction Type",
            value: "-",
        },
        {
            key: 2,
            label: "Debit",
            value: "debit",
        },
        {
            key: 3,
            label: "Credit",
            value: "credit",
        }];
    const [transactionType, setTransactionType] = useState();
    const [transactionAmount, setTransactionAmount] = useState();
    const [transactionDescription, setTransactionDescription] = useState();
    const handleSubmit = (e) => {
        Senddata({ transactionType, transactionAmount, transactionDescription });
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
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Transaction Type</Form.Label>
                    <Form.Control as="select" name='type' value={transactionType} onChange={e => setTransactionType(e.target.value)}>
                        {options.map((option) => (
                            <option value={option.value} key={option.key}>{option.label}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Label>Enter Amount</Form.Label>
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={transactionType && transactionAmount && transactionDescription ? e => {
                    if (transactionType === 'debit' || transactionType === 'credit') {
                        if (transactionType === 'debit' && parseInt(transactionAmount) > parseInt(props.totalbalance)) {
                            alert("Transaction should be a Credit Type.!!")
                        }
                        else if (parseInt(transactionAmount) <= 0) {
                            alert("Invalid Amount..!!");
                        } else {
                            handleSubmit(e)
                            props.isdatainserted()
                        }
                    }
                    else {
                        alert('Please Choose a transaction Type..!!')
                    }
                } : null}
                >Add Transaction</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Addtransaction;