import { combineReducers } from 'redux';
import getTransactionReducer from './getTransactionReducer';

export default combineReducers({
    get: getTransactionReducer
});