import axios from 'axios';

async function Senddata(transaction) {
    axios.post('http://localhost:8000/senddata', transaction)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  export default Senddata;