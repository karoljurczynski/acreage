import { createStore, combineReducers } from 'redux';
import { fieldReducer } from './reducers/fieldReducer';
import { _Field } from './reducers/fieldReducer';

export interface State {
  fields: _Field[];
}

const reducers = combineReducers({
  fields: fieldReducer
})

export const store = createStore(reducers)