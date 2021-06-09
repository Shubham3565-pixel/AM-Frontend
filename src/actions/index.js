import {FETCHED_TRANSACTION_DATA} from './types';
import axios from 'axios';
import apiUrl from '../config/config';


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