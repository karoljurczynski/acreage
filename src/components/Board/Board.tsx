import { Wrapper, Field, Road } from './BoardStyles';
import { FieldsPattern } from '../../config/fields';

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

      { fields.map(field => {
        return (
          <Field key={ field.fieldId } fieldCrop={ field.fieldCrop } fieldStatus={ field.fieldStatus } />
        )
      })}

    </Wrapper>
  )
}

export default Board;