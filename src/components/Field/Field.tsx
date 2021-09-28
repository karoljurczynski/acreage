// IMPORTS

import { useState, useEffect } from 'react';
import FieldMenu from '../FieldMenu/FieldMenu';
import { FieldSegment, FieldIcon } from './FieldStyles';

import { portal } from '../../config/StylesConfig';
import { cropsArray } from '../../config/crops';
import { buildings } from '../../config/buildings';

import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { setFieldMenuOpened } from '../../redux/actions/fieldActions';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


interface FieldPropsInterface {
  fieldId: number;
}


const Field: React.FC<FieldPropsInterface> = ({ fieldId }): JSX.Element => {
  const fields: FieldInterface[] = useSelector((state: StateInterface): FieldInterface[] => state.fields);  
  const dispatch = useDispatch();
  const field: FieldInterface = fields[fieldId];

  
  const handleFieldOnClick = () => {
    console.log("fsf");
    dispatch(setFieldMenuOpened(fieldId));
    console.log(field.isFieldMenuOpened);
  }

  const getIcon = () => {
    let icon: string = "";
    if (field.data.cropProps.cropType) {
      cropsArray.forEach(crop => {
        if (crop.cropName === field.data.cropProps.cropType)
          icon = crop.cropIcon;
      });
    }
    else {
      buildings.forEach(building => {
        if (building.buildingName === field.data.cropProps.buildingType)
          icon = building.buildingIcon;
      });
    }
    return icon;
  }

  useEffect(() => {
    fields[fieldId].isFieldMenuOpened ? portal.style.zIndex = "1" : portal.style.zIndex = "-1";
    return () => { portal.style.zIndex = "-1" };

  }, [ fields[fieldId].isFieldMenuOpened ]);

  return (
    <>
    { fields[fieldId].isFieldMenuOpened && 
      <FieldMenu
        fieldId={ fieldId }
        closeFieldMenu={ handleFieldOnClick }
      />
    }
    
    <FieldSegment 
      fieldCrop={ field.data.cropProps.cropType } 
      fieldBuilding={ field.data.cropProps.buildingType }
      fieldStatus={ field.data.fieldProps.isFieldBought }
      isReadyToHarvest={ field.data.cropProps.isReadyToHarvest }
      onClick={ handleFieldOnClick }
      title={ field.data.cropProps.cropType ? field.data.cropProps.cropType : field.data.cropProps.buildingType }>

        { (field.data.cropProps.cropType || field.data.cropProps.buildingType) && 
          <FieldIcon src={ getIcon() } />
        }

    </FieldSegment>
    </> 
  )
}

export default Field;