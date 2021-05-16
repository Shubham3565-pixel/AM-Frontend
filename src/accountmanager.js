import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Table from './components/Table'
import { Button, Container, Badge } from 'react-bootstrap';
import Addtransaction from './components/Addtransaction';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactionData } from './actions';

function Accountmanager() {
  const data = useSelector(state => state.get);
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = React.useState(false);
  const [isInserted, setIsInserted] = React.useState(false);
  const [totalBalance, setTotalBalance] = React.useState(0);

  useEffect(() => {
    dispatch(fetchTransactionData())
    setIsInserted(false)
  },[isInserted]);

  useEffect(() => {
    if (data.length) {
      setTotalBalance(data[0].totalbalance);
    }
  });

  return (
    <div className="background">
      <Navbar />
      <Container fluid='lg' style={{ backgroundColor: '#c5c6c7', paddingTop: '12px',paddingBottom:'5px', borderRadius: '10px', marginTop: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <Button variant="primary">
            Running Balance: {data.length ? <Badge variant="light" style={{ backgroundColor: '#ccffcc' }}>{totalBalance}</Badge> : null}
            <span className="sr-only">unread messages</span>
          </Button>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            <Badge variant="light">+</Badge> Add Transaction
        </Button>
          <Addtransaction
            totalBalance={totalBalance}
            show={modalShow}
            inserted={isInserted}
            isDataInserted={() => setIsInserted(true)}
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
