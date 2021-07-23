import { Wrapper, Road } from './BoardStyles';
import Field from '../Field/Field';
import { FieldsPattern } from '../../config/fields';
import React from 'react';

interface BoardProps {
  fields: FieldsPattern[];
}

const Board: React.FC<BoardProps> = ({ fields }) => {

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

      { fields.map((field: FieldsPattern) => {
        return (
          <Field
            key={ field.fieldId } 
            fieldData={ field }
          />
        )
      })}

    </Wrapper>
  )
}

export default Board;