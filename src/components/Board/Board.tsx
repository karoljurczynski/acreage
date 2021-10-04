// IMPORTS


import Field from '../Field/Field';

import { Wrapper, Road } from './BoardStyles';
import { BoardPropsInterface } from '../interfaces';

import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { useEffect } from 'react';


// COMPONENT


const Board: React.FC<BoardPropsInterface> = (): JSX.Element => {


  // STATE

  const fields: FieldInterface[] = useSelector((state: StateInterface): FieldInterface[] => state.fields);

  // JSX

  useEffect(() => {
    console.log(fields);

  }, [fields]);


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

      { fields.map((field: FieldInterface) => { return <Field key={ field.fieldId } fieldId={ field.fieldId } />} ) }
    
    </Wrapper>
  )
}


// EXPORT


export default Board;