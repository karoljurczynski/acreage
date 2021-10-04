// IMPORTS


import React, { useState, useEffect, Dispatch, useContext } from 'react';
import FieldMenu from '../FieldMenu/FieldMenu';
import BackgroundCloser from '../BackgroundCloser/BackgroundCloser';

import { FieldSegment, FieldIcon } from './FieldStyles';
import { FieldPropsInterface } from '../interfaces';
import { cropsArray } from '../../config/crops';
import { buildings } from '../../config/buildings';
import logo from '../../images/logo.png';

import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// COMPONENT


const Field: React.FC<FieldPropsInterface> = ({ fieldId }): JSX.Element => {


  // STATE
  

  const field: FieldInterface = useSelector((state: StateInterface): FieldInterface => state.fields[fieldId]);  
  const [redirectPath, setRedirectPath]: [string, Dispatch<React.SetStateAction<string>>] = useState<string>(`/farm`);


  // EFFECTS

  // Closes field menu after pressing back button on browser
  useEffect(() => {
    window.addEventListener("popstate", closeField);
    return () => window.removeEventListener("popstate", closeField);
  }, []);


  // HANDLERS


  const handleFieldOnClick: React.MouseEventHandler = (e: React.MouseEvent) => {
    document.querySelectorAll("button").forEach(button => button.blur());
    window.location.pathname === "/farm" 
    ? setRedirectPath(`/farm/field${fieldId + 1}`)
    : setRedirectPath("/farm");
  }
  const closeField = () => {
    setRedirectPath("/farm");
  }


  // TOOL FUNCTIONS

  // const getFieldName = (): string => {
  //   if (field.fieldProps.isFieldBought) {
  //     if (field.cropProps.cropType)
  //       return field.cropProps.cropType as string;
  //     if (field.cropProps.buildingType)
  //       return field.cropProps.buildingType as string;
  //     else
  //       return "Empty";
  //   }
  //   else
  //     return `${field.fieldProps.fieldPrice} $`;
  // }
  const getFieldName = (): string => {
    if (field.fieldProps.isFieldBought) {
      if (field.cropProps.cropType)
        return field.cropProps.cropType as string;
      if (field.cropProps.buildingType)
        return field.cropProps.buildingType as string;
      else
        return "Empty";
    }
    else
      return `${field.fieldProps.fieldPrice} $`;
  }
  const getIcon = (): string => {
    let icon: string = "";
    if (field.cropProps.cropType) {
      cropsArray.forEach(crop => {
        if (crop.cropName === field.cropProps.cropType)
          icon = crop.cropIcon;
      });
    }
    else if (field.cropProps.buildingType) {
      buildings.forEach(building => {
        if (building.buildingName === field.cropProps.buildingType)
          icon = building.buildingIcon;
      });
    }
    else {
      icon = logo;
    }
    return icon;
  }

  
  // JSX


  return (
    <Router>
      <Switch>
        <Route path={`/farm/field${fieldId + 1}`}>
          <FieldMenu
            fieldId={ fieldId }
            fieldName={ getFieldName() }
            fieldIcon={ getIcon() }
            closeFieldMenu={ handleFieldOnClick }
          />
        </Route>
      </Switch>

      { redirectPath && <Redirect to={redirectPath} /> }

      { redirectPath !== "/farm" && <BackgroundCloser onClick={closeField} />}
      <Link to={`/farm/field${fieldId + 1}`}>
      <FieldSegment
        fieldCrop={ field.cropProps.cropType } 
        fieldBuilding={ field.cropProps.buildingType }
        fieldStatus={ field.fieldProps.isFieldBought }
        isReadyToHarvest={ field.cropProps.isReadyToHarvest }
        onClick={ handleFieldOnClick }
        title={ field.cropProps.cropType ? field.cropProps.cropType : field.cropProps.buildingType }>
          
          { (field.cropProps.cropType || field.cropProps.buildingType) && 
            <FieldIcon src={ getIcon() } />
          }

      </FieldSegment>
      </Link>
    </Router> 
  )
}


// EXPORT


export default Field;