import { FieldSegment } from './FieldStyles';
import { useState, useEffect } from 'react';
import FieldMenu from '../FieldMenu/FieldMenu';
import { portal } from '../../config/StylesConfig';
import { _Field } from '../../redux/reducers/fieldReducer';
import { store } from '../../redux/reduxStore';
import { setFieldMenuOpened } from '../../redux/actions/fieldActions';

interface FieldProps {
  fieldData: _Field;
}

const Field: React.FC<FieldProps> = ({ fieldData }) => {  
  const [isFieldMenuOpened, setIsFieldMenuOpened] = useState(false);
  const handleFieldOnClick = () => {
    store.dispatch(setFieldMenuOpened(fieldData.field.fieldId));
    setIsFieldMenuOpened(store.getState().fields[fieldData.field.fieldId].isFieldMenuOpened);
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
      fieldCrop={ fieldData.field.cropProps.cropType } 
      fieldBuilding={ fieldData.field.cropProps.buildingType }
      fieldStatus={ fieldData.field.isFieldBought } 
      onClick={ handleFieldOnClick }
    />

    </> 
  )
}

export default Field;