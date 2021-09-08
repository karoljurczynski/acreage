import { FieldSegment, FieldIcon } from './FieldStyles';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FieldMenu from '../FieldMenu/FieldMenu';
import { portal } from '../../config/StylesConfig';
import { State } from '../../redux/reduxStore';
import { _Field } from '../../redux/reducers/fieldReducer';
import { store } from '../../redux/reduxStore';
import { setFieldMenuOpened } from '../../redux/actions/fieldActions';
import logo from '../../images/logo.png';
import { crops } from '../../config/crops';
import { buildings } from '../../config/buildings';

interface FieldProps {
  fieldId: number;
  updateUserProps: () => void;
}

const Field: React.FC<FieldProps> = ({ fieldId, updateUserProps }) => {  
  const state: State = useSelector(state => state) as State;
  const fields: _Field[] = state.fields;

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

  const [isFieldMenuOpened, setIsFieldMenuOpened] = useState(false);
  const [fieldCrop, setFieldCrop] = useState(fields[fieldId].field.cropProps.cropType as string);
  const [fieldBuilding, setFieldBuilding] = useState(fields[fieldId].field.cropProps.buildingType as string);
  const [fieldName, setFieldName] = useState(updateFieldName());
  const [fieldStatus, setFieldStatus] = useState(fields[fieldId].field.fieldProps.isFieldBought);
  const [isWatered, setIsWatered] = useState(fields[fieldId].field.cropProps.isWatered);
  const [isReadyToHarvest, setIsReadyToHarvest] = useState(fields[fieldId].field.cropProps.isReadyToHarvest);
  const [isFertilized, setIsFertilized] = useState(fields[fieldId].field.cropProps.isFertilized);

  const updateFieldProps = () => {
    setFieldCrop(fields[fieldId].field.cropProps.cropType as string);
    setFieldBuilding(fields[fieldId].field.cropProps.buildingType as string);
    setFieldName(updateFieldName());
    setFieldStatus(fields[fieldId].field.fieldProps.isFieldBought);
    setIsWatered(fields[fieldId].field.cropProps.isWatered);
    setIsFertilized(fields[fieldId].field.cropProps.isFertilized);
    setIsReadyToHarvest(fields[fieldId].field.cropProps.isReadyToHarvest);
  }

  const handleFieldOnClick = () => {
    console.log(state);
    store.dispatch(setFieldMenuOpened(fieldId));
    setIsFieldMenuOpened(fields[fieldId].isFieldMenuOpened);
  }

  const getIcon = () => {
    let icon: string = "";
    if (fieldCrop) {
      crops.forEach(crop => {
        if (crop.cropName === fieldCrop)
          icon = crop.cropIcon;
      });
    }
    else {
      buildings.forEach(building => {
        if (building.buildingName === fieldBuilding)
          icon = building.buildingIcon;
      });
    }
    return icon;
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
        fieldIcon={ getIcon()}
        isWatered= { isWatered }
        isFertilized={ isFertilized}
        closeFieldMenu={ handleFieldOnClick }
      />
    }
    
    <FieldSegment 
      fieldCrop={ fieldCrop } 
      fieldBuilding={ fieldBuilding }
      fieldStatus={ fieldStatus }
      isReadyToHarvest={ isReadyToHarvest }
      onClick={ handleFieldOnClick }
      title={ fieldCrop ? fieldCrop : fieldBuilding }>

        { (fieldCrop || fieldBuilding) && 
          <FieldIcon src={ getIcon() } />
        }

    </FieldSegment>
    </> 
  )
}

export default Field;