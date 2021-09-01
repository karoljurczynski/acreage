import { Wrapper, Road } from './BoardStyles';
import Field from '../Field/Field';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reduxStore';
import { _Field } from '../../redux/reducers/fieldReducer';


const Board: React.FC = () => {
  const state = useSelector(state => state) as State;

  return (
    <Wrapper>
      <Road></Road>
      <Road></Road>
      <Road></Road>
      <Road></Road>
      <Road></Road>
      <Road></Road>
      <Road></Road>
      <Road></Road>

      { state.fields.map(( field: _Field ) => {
        return (
          <Field
            key={ field.field.fieldId } 
            fieldData={ field }
          />
        )
      })}

    </Wrapper>
  )
}

export default Board;