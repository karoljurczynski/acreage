import { Wrapper, Road } from './BoardStyles';
import Field from '../Field/Field';
import React from 'react';
import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';


const Board: React.FC = () => {
  const state: StateInterface = useSelector(state => state) as StateInterface;
  const fields: FieldInterface[] = state.fields;

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

      { fields.map(( field: FieldInterface ) => {
        return (
          <Field key={ field.data.fieldId } fieldId={ field.data.fieldId } />
        )
      })}

    </Wrapper>
  )
}

export default Board;