import { Wrapper, Road } from './BoardStyles';
import Field from '../Field/Field';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reduxStore';
import { _Field } from '../../redux/reducers/fieldReducer';

interface _Board {
  updateUserProps: () => void;
}

const Board: React.FC<_Board> = ({ updateUserProps }) => {
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
            updateUserProps={ updateUserProps } 
          />
        )
      })}

    </Wrapper>
  )
}

export default Board;