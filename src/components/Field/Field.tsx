// IMPORTS


import { useState, useEffect, Dispatch } from 'react';
import FieldMenu from '../FieldMenu/FieldMenu';
import BackgroundCloser from '../BackgroundCloser/BackgroundCloser';

import { FieldSegment, FieldIcon } from './FieldStyles';
import { FieldPropsInterface } from '../interfaces';
import { cropsArray } from '../../config/crops';
import { buildings } from '../../config/buildings';

import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


// COMPONENT


const Field: React.FC<FieldPropsInterface> = ({ fieldId }): JSX.Element => {


  // STATE
  

  const fields: FieldInterface[] = useSelector((state: StateInterface): FieldInterface[] => state.fields);  
  const [redirectPath, setRedirectPath]: [string, Dispatch<React.SetStateAction<string>>] = useState<string>(`/farm`);
  const field: FieldInterface = fields[fieldId];


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

  
  const getIcon = () => {
    let icon: string = "";
    if (field.cropProps.cropType) {
      cropsArray.forEach(crop => {
        if (crop.cropName === field.cropProps.cropType)
          icon = crop.cropIcon;
      });
    }
    else {
      buildings.forEach(building => {
        if (building.buildingName === field.cropProps.buildingType)
          icon = building.buildingIcon;
      });
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