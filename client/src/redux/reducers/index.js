import {combineReducers} from 'redux';
import {countryReducer, loadingReducer} from './getReducer';

const allReducers = combineReducers({ countryReducer, loadingReducer});

export default allReducers;