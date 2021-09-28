import { Wrapper, Road } from './BoardStyles';
import Field from '../Field/Field';

import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';

interface BoardPropsInterface {}


const Board: React.FC<BoardPropsInterface> = (): JSX.Element => {
  const fields: FieldInterface[] = useSelector((state: StateInterface): FieldInterface[] => state.fields);

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

      { fields.map((field: FieldInterface) => <Field key={ field.data.fieldId } fieldId={ field.data.fieldId } /> ) }
    
    </Wrapper>
  )
}

export default Board;