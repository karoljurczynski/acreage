import { createStore, combineReducers } from 'redux';
import { fieldReducer } from './reducers/fieldReducer';


export const store = createStore(fieldReducer)