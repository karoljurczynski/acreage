import { FieldSegment } from './FieldStyles';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FieldMenu from '../FieldMenu/FieldMenu';
import { portal } from '../../config/StylesConfig';
import { State } from '../../redux/reduxStore';
import { _Field } from '../../redux/reducers/fieldReducer';
import { store } from '../../redux/reduxStore';
import { setFieldMenuOpened } from '../../redux/actions/fieldActions';

interface FieldProps {
  fieldId: number;
  updateUserProps: () => void;
}

const Field: React.FC<FieldProps> = ({ fieldId, updateUserProps }) => {  
  const state: State = useSelector(state => state) as State;
  const fields: _Field[] = state.fields;

  const [isFieldMenuOpened, setIsFieldMenuOpened] = useState(false);
  const [fieldCrop, setFieldCrop] = useState("");
  const [fieldBuilding, setFieldBuilding] = useState("");
  const [fieldName, setFieldName] = useState(`${fields[fieldId].field.fieldProps.fieldPrice} $`);
  const [fieldStatus, setFieldStatus] = useState(false);
  const [isWatered, setIsWatered] = useState(false);
  const [isFertilized, setIsFertilized] = useState(false);

  const updateFieldProps = (fields: _Field[]) => {
    setFieldCrop(fields[fieldId].field.cropProps.cropType as string);
    setFieldBuilding(fields[fieldId].field.cropProps.buildingType as string);
    setFieldName(updateFieldName());
    setFieldStatus(fields[fieldId].field.fieldProps.isFieldBought);
    setIsWatered(fields[fieldId].field.cropProps.isWatered);
    setIsFertilized(fields[fieldId].field.cropProps.isFertilized);
  }

  const updateFieldName = (): string => {
    if (fields[fieldId].field.fieldProps.isFieldBought) {
      if (fields[fieldId].field.cropProps.cropType)
        return fields[fieldId].field.cropProps.cropType as string;
      if (fields[fieldId].field.cropProps.buildingType)
        return fields[fieldId].field.cropProps.buildingType as string;
      else
        return "Empty";
    }
    else
      return `${fields[fieldId].field.fieldProps.fieldPrice} $`;
  }

  const handleFieldOnClick = () => {
    console.log(state);
    store.dispatch(setFieldMenuOpened(fieldId));
    setIsFieldMenuOpened(fields[fieldId].isFieldMenuOpened);
  }
  
  useEffect(() => {
    isFieldMenuOpened ? portal.style.zIndex = "1" : portal.style.zIndex = "-1";
    return () => { portal.style.zIndex = "-1" };

  }, [ isFieldMenuOpened ]);

  return (
    <>
    { isFieldMenuOpened && 
      <FieldMenu
        fieldId={ fieldId }
        updateFieldProps= { updateFieldProps }
        updateUserProps={ updateUserProps }
        fieldName={ fieldName }
        isWatered= { isWatered }
        isFertilized={ isFertilized}
        closeFieldMenu={ handleFieldOnClick }
      />
    }
    
    <FieldSegment 
      fieldCrop={ fieldCrop } 
      fieldBuilding={ fieldBuilding }
      fieldStatus={ fieldStatus }
      onClick={ handleFieldOnClick }
    />

    </> 
  )
}

export default Field;