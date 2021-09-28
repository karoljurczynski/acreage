// IMPORTS

import { useState, useEffect } from 'react';
import FieldMenu from '../FieldMenu/FieldMenu';
import { FieldSegment, FieldIcon } from './FieldStyles';

import { portal } from '../../config/StylesConfig';
import { cropsArray } from '../../config/crops';
import { buildings } from '../../config/buildings';

import { useDispatch, useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { setFieldMenuOpened } from '../../redux/actions/fieldActions';


// COMPONENT


interface FieldProps {
  fieldId: number;
}

const Field: React.FC<FieldProps> = ({ fieldId }) => {
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);  
  const dispatch = useDispatch();
  const fields: FieldInterface[] = state.fields;
  const field: FieldInterface = state.fields[fieldId];

  const updateFieldName = (): string => {
    if (field.data.fieldProps.isFieldBought) {
      if (field.data.cropProps.cropType)
        return field.data.cropProps.cropType as string;
      if (field.data.cropProps.buildingType)
        return field.data.cropProps.buildingType as string;
      else
        return "Empty";
    }
    else
      return `${field.data.fieldProps.fieldPrice} $`;
  }

  const [isFieldMenuOpened, setIsFieldMenuOpened] = useState(false);
  const [fieldCrop, setFieldCrop] = useState(fields[fieldId].data.cropProps.cropType as string);
  const [fieldBuilding, setFieldBuilding] = useState(fields[fieldId].data.cropProps.buildingType as string);
  const [fieldName, setFieldName] = useState(updateFieldName());
  const [fieldStatus, setFieldStatus] = useState(fields[fieldId].data.fieldProps.isFieldBought);
  const [isWatered, setIsWatered] = useState(fields[fieldId].data.cropProps.isWatered);
  const [isReadyToHarvest, setIsReadyToHarvest] = useState(fields[fieldId].data.cropProps.isReadyToHarvest);
  const [isFertilized, setIsFertilized] = useState(fields[fieldId].data.cropProps.isFertilized);

  const updateFieldProps = () => {
    setFieldCrop(fields[fieldId].data.cropProps.cropType as string);
    setFieldBuilding(fields[fieldId].data.cropProps.buildingType as string);
    setFieldName(updateFieldName());
    setFieldStatus(fields[fieldId].data.fieldProps.isFieldBought);
    setIsWatered(fields[fieldId].data.cropProps.isWatered);
    setIsFertilized(fields[fieldId].data.cropProps.isFertilized);
    setIsReadyToHarvest(fields[fieldId].data.cropProps.isReadyToHarvest);
  }

  const handleFieldOnClick = () => {
    dispatch(setFieldMenuOpened(fieldId));
    setIsFieldMenuOpened(fields[fieldId].isFieldMenuOpened);
  }

  const getIcon = () => {
    let icon: string = "";
    if (fieldCrop) {
      cropsArray.forEach(crop => {
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
        updateUserProps={ () => {} }
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