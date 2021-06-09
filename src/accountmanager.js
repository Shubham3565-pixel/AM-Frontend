import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import Table from './components/Table'
import { Button, Container, Badge } from 'react-bootstrap';
import Addtransaction from './components/Addtransaction';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactionData } from './actions';

function Accountmanager(props) {
  // console.log(props)
  const data = useSelector(state => state.get);
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = useState(false);
  const [isInserted, setIsInserted] = useState(false);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    dispatch(fetchTransactionData())
    setIsInserted(false)
    setModalShow(false)
  },[isInserted]);

  useEffect(() => {
    if (data.length) {
      setTotalBalance(data[0].totalbalance);
    }
  },[data]);

  return (
    <div className="background">
      <Navbar props={props.props}/>
      <Container fluid='lg' style={{ backgroundColor: '#c5c6c7', paddingTop: '12px',paddingBottom:'5px', borderRadius: '10px', marginTop: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <Button variant="primary">
            Running Balance: {data.length ? <Badge variant="light" style={{ backgroundColor: '#ccffcc' }}>{'₹ '+totalBalance}</Badge> : null}
            <span className="sr-only">unread messages</span>
          </Button>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            <Badge variant="light">+</Badge> Add Transaction
        </Button>
          <Addtransaction
            totalbalance={totalBalance}
            show={modalShow}
            inserted={isInserted}
            isdatainserted={() => setIsInserted(true)}
            onHide={() => setModalShow(false)}
          />
        </div>
        {data.length ? 
        <Table data={data} />
        : null}
      </Container>
    </div>
  );
}

export default Accountmanager;
