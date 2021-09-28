import { createStore, combineReducers } from 'redux';

import { fieldReducer } from './reducers/fieldReducer';
import { FieldInterface } from './reducers/fieldReducer';

import { userReducer } from './reducers/userReducer';
import { UserInterface } from './reducers/userReducer';

import { storageReducer } from './reducers/storageReducer';
import { StorageItem } from './reducers/storageReducer';


export interface StateInterface {
  fields: FieldInterface[];
  userData: UserInterface;
  storage: StorageItem[];
}


const reducers = combineReducers({
  fields: fieldReducer,
  userData: userReducer,
  storage: storageReducer
})


export const store = createStore(reducers)