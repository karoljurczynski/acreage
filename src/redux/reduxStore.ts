import { createStore, combineReducers } from 'redux';


import { fieldReducer } from './reducers/fieldReducer';
import { _Field } from './reducers/fieldReducer';

import { userReducer } from './reducers/userReducer';
import { _User } from './reducers/userReducer';


export interface State {
  fields: _Field[];
  userData: _User;
}

const reducers = combineReducers({
  fields: fieldReducer,
  userData: userReducer
})

export const store = createStore(reducers)