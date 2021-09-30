// IMPORTS


import { useState, Dispatch } from 'react';
import ReactDOM from 'react-dom';
import FieldProperties from '../FieldProperties/FieldProperties';
import FieldPlantWindow from '../FieldPlantWindow/FieldPlantWindow';
import FieldBuildWindow from '../FieldBuildWindow/FieldBuildWindow';
import FieldMenuButton from '../FieldMenuButton/FieldMenuButton';
import LargeButton from '../LargeButton/LargeButton';

import { Wrapper, TopSection, HeadingContainer, CropImageContainer, CropImage, Name, FieldNumber, Main, BottomSection } from './FieldMenuStyles';
import logo from '../../images/logo.png';
import { portal } from '../../config/StylesConfig';
import { FieldMenuPropsInterface } from '../interfaces';

import { StateInterface } from '../../redux/reduxStore';
import { useSelector } from 'react-redux';
import { FieldInterface } from '../../redux/reducers/fieldReducer';

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


// COMPONENT


const FieldMenu: React.FC<FieldMenuPropsInterface> = ({ fieldId, closeFieldMenu }): JSX.Element => {
  

  // STATE


  const fields: FieldInterface[] = useSelector((state: StateInterface): FieldInterface[] => state.fields);
  const field: FieldInterface = fields[fieldId];
  const [redirectPath, setRedirectPath]: [string, Dispatch<React.SetStateAction<string>>] = useState<string>(`/farm/field${fieldId + 1}`);


  // HANDLERS


  const handleFieldPropsWindow = (): void => {
    if (window.location.pathname === `/farm/field${fieldId + 1}`) {
      setRedirectPath(`/farm/field${fieldId + 1}/properties`);
    }
    else {
      setRedirectPath(`/farm/field${fieldId + 1}`);
    }
  }
  const handlePlantWindow = (): void => {
    if (window.location.pathname === `/farm/field${fieldId + 1}`) {
      setRedirectPath(`/farm/field${fieldId + 1}/plant`);
    }
    else {
      setRedirectPath(`/farm/field${fieldId + 1}`);
    }
  }
  const handleBuildWindow = (): void => {
    if (window.location.pathname === `/farm/field${fieldId + 1}`) {
      setRedirectPath(`/farm/field${fieldId + 1}/build`);
    }
    else {
      setRedirectPath(`/farm/field${fieldId + 1}`);
    }
  }
  const closeWindow = (): void => {
    setRedirectPath(`/farm/field${fieldId + 1}`);
  }


  // TOOL FUNCTIONS


  const selectButtons = (): JSX.Element[] => {      
    if (field.fieldProps.isFieldBought) {
      if (field.cropProps.cropType) {
        if (field.cropProps.isReadyToHarvest) {
          return [
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" textContent="Harvest" primary />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.cropProps.isWatered ? "Watered" : "Water" } watered={ field.cropProps.isWatered ? true : false } primary={ !field.cropProps.isWatered ? true : false } />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ field.cropProps.isFertilized ? true : false } primary={ !field.cropProps.isFertilized ? true : false } />
          ];
        }

        else {
          return [
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" buttonFor="Time" textContent="14:20" />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.cropProps.isWatered ? "Watered" : "Water" } watered={ field.cropProps.isWatered ? true : false } primary={ !field.cropProps.isWatered ? true : false } />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ field.cropProps.isFertilized ? true : false } primary={ !field.cropProps.isFertilized ? true : false } />
          ];
        }
      }

      if (field.cropProps.buildingType) {
        return [
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Upgrade" primary />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Destroy" />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" buttonFor="Barn" textContent="100" />
        ];
      }

      else {
        return [
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Plant" primary />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Build" primary />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" textContent="Sell this field" />
        ];
      }
    }

    else {
      return [ <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" textContent="Buy this field" primary /> ];
    }
  }
  const setFieldName = (): string => {
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
    if (setFieldName() === "Empty" || Number(setFieldName()[0]))
      return logo;
    else
      return logo;
  }
  

  // JSX


  return ReactDOM.createPortal (
    <Router>
      <Switch>

        <Route path={`/farm/field${fieldId + 1}/properties`}>
          <FieldProperties fieldId={ fieldId } closeWindow={ closeWindow } />
        </Route>

        <Route path={`/farm/field${fieldId + 1}/plant`}>
          <FieldPlantWindow fieldId={ fieldId } handlePlantWindow={ closeWindow } />
        </Route>

        <Route path={`/farm/field${fieldId + 1}/build`}>
          <FieldBuildWindow fieldId={ fieldId } handleBuildWindow={ closeWindow } />
        </Route>
        
      </Switch>

      { redirectPath && <Redirect to={redirectPath} /> }
    
      <Wrapper hide={ redirectPath !== `/farm/field${fieldId + 1}` ? true : false}>

        <TopSection>
          <HeadingContainer>
            <CropImageContainer>
              <CropImage src={ getIcon() } />
            </CropImageContainer>
            <Name>{ setFieldName() }</Name>
            <FieldNumber>{ `Field #${ field.fieldId + 1 }` }</FieldNumber>
          </HeadingContainer>
          <Main>
            { selectButtons() }
          </Main>
        </TopSection>

        <BottomSection>
          <LargeButton onClick={ handleFieldPropsWindow } secondary>Field properties</LargeButton>
          <LargeButton onClick={ closeFieldMenu } primary>Close</LargeButton>
        </BottomSection>

      </Wrapper>
    </Router>,
    portal
  )
}


// EXPORT


export default FieldMenu;