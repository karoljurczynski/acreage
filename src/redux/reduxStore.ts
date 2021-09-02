import { createStore, combineReducers } from 'redux';


import { fieldReducer } from './reducers/fieldReducer';
import { _Field } from './reducers/fieldReducer';

import { userReducer } from './reducers/userReducer';
import { User } from './reducers/userReducer';

import { storageReducer } from './reducers/storageReducer';
import { StorageItem } from './reducers/storageReducer';


export interface State {
  fields: _Field[];
  userData: User;
  storage: StorageItem[];
}


const reducers = combineReducers({
  fields: fieldReducer,
  userData: userReducer,
  storage: storageReducer
})


export const store = createStore(reducers)