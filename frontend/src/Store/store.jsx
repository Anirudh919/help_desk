import { createStore } from 'redux';
import {allReducers} from './Reducers/userReducer'

const store = createStore(allReducers);

export default store;
