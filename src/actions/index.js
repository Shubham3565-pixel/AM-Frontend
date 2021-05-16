import {FETCHED_TRANSACTION_DATA} from './types';
import axios from 'axios';
const apiUrl = 'http://localhost:8000';


export const fetchTransactionData = () => {
    return (dispatch) => {
        return axios.get(apiUrl+"/getdata")
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: FETCHED_TRANSACTION_DATA,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};