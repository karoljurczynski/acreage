import { FieldSegment } from './FieldStyles';
import { FieldsPattern } from '../../config/fields';
import { useState, useEffect } from 'react';
import FieldMenu from '../FieldMenu/FieldMenu';
import { portal } from '../../config/StylesConfig';

import { store } from '../../redux/reduxStore';
import { setFieldMenuOpened } from '../../redux/actions/fieldActions';

interface FieldProps {
  fieldData: FieldsPattern;
}

const Field: React.FC<FieldProps> = ({ fieldData }) => {  
  const [isFieldMenuOpened, setIsFieldMenuOpened] = useState(false);
  const handleFieldOnClick = () => {
    store.dispatch(setFieldMenuOpened(fieldData.fieldId));
    setIsFieldMenuOpened(store.getState().fields[fieldData.fieldId].isFieldMenuOpened);
  }

  useEffect(() => {
    isFieldMenuOpened ? portal.style.zIndex = "1" : portal.style.zIndex = "-1";
    return () => { portal.style.zIndex = "-1" };

  }, [ isFieldMenuOpened ]);

  return (
    <>
    { isFieldMenuOpened && 
      <FieldMenu
        closeFieldMenu={ handleFieldOnClick }
        fieldData={ fieldData }
      />
    }
    
    <FieldSegment 
      fieldCrop={ fieldData.cropProps.cropType } 
      fieldStatus={ fieldData.isFieldBought } 
      onClick={ handleFieldOnClick }
    />

    </> 
  )
}

export default Field;