import { FETCHED_TRANSACTION_DATA } from '../actions/types';

export default function getTransactionReducer(state = [], action) {
    switch (action.type) {
        case FETCHED_TRANSACTION_DATA:
            return [...action.payload];
        default:
            return state;
    }
}