import { Wrapper, Road } from './BoardStyles';
import Field from '../Field/Field';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reduxStore';
import { _Field } from '../../redux/reducers/fieldReducer';


const Board: React.FC = () => {
  const state: State = useSelector(state => state) as State;
  const fields: _Field[] = state.fields;

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

      { fields.map(( fieldData: _Field ) => {
        return (
          <Field
            key={ fieldData.field.fieldId }
            fieldId={ fieldData.field.fieldId } 
          />
        )
      })}

    </Wrapper>
  )
}

export default Board;