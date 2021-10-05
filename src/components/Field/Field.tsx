// IMPORTS


import { useState, useEffect, Dispatch } from 'react';
import FieldMenu from '../FieldMenu/FieldMenu';
import BackgroundCloser from '../BackgroundCloser/BackgroundCloser';

import { FieldSegment, FieldIcon } from './FieldStyles';
import { FieldPropsInterface } from '../interfaces';

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
        fieldBuilding={ field.buildingProps.buildingType }
        fieldStatus={ field.fieldProps.isFieldBought }
        isReadyToHarvest={ field.cropProps.isReadyToHarvest }
        onClick={ handleFieldOnClick }
        title={ field.cropProps.cropType.length ? field.cropProps.cropType : field.buildingProps.buildingType }>

        { (field.cropProps.cropType || field.buildingProps.buildingType) &&
          <FieldIcon src={ field.cropProps.cropType ? field.cropProps.cropIcon : field.buildingProps.buildingIcon } />
        }
      
      </FieldSegment>
      </Link>
    </Router> 
  )
}


// EXPORT


export default Field;