import axios from 'axios';
import apiUrl from '../config/config';


async function Senddata(transaction) {
    axios.post(apiUrl+'/senddata', transaction)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  export default Senddata;