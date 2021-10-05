// IMPORTS


import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FieldProperties from '../FieldProperties/FieldProperties';
import PlantWindow from '../FieldMenuWindows/PlantWindow';
import BuildWindow from '../FieldMenuWindows/BuildWindow';

//import FieldMenuButton from '../FieldMenuButton/FieldMenuButton';
import LargeButton from '../LargeButton/LargeButton';
import PlantButton from '../FieldMenuButtons/PlantButton';
import BuildButton from '../FieldMenuButtons/BuildButton';
import BuySellFieldButton from '../FieldMenuButtons/BuySellFieldButton';

import { Wrapper, TopSection, HeadingContainer, CropImageContainer, CropImage, Name, FieldNumber, Main, BottomSection } from './FieldMenuStyles';
import { portal } from '../../config/StylesConfig';
import { FieldMenuPropsInterface } from '../interfaces';

import { StateInterface } from '../../redux/reduxStore';
import { useSelector } from 'react-redux';
import { FieldInterface } from '../../redux/reducers/fieldReducer';

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import HarvestWindow from '../FieldMenuWindows/HarvestWindow';
import HarvestButton from '../FieldMenuButtons/HarvestButton';
import { StorageItem } from '../../redux/reducers/storageReducer';
import WarningWindow from '../FieldMenuWindows/WarningWindow';



// COMPONENT


const FieldMenu: React.FC<FieldMenuPropsInterface> = ({ fieldId, closeFieldMenu }): JSX.Element => {
  const filterForSeeds = (item: StorageItem) => {
    if (item.type === "Seed" && item.amount)
      return item;
  }

  // STATE

  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const storage: StorageItem[] = state.storage.filter(filterForSeeds);

  const [redirectPath, setRedirectPath]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>(`/farm/field${fieldId + 1}`);
  const [isWarningActive, setIsWarningActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);


  // EFFECTS

  // Enables draggable fieldMenu window and disables it after unmounting
  useEffect(() => {
    portal.draggable = true;
    portal.addEventListener("dragstart", startDragWindow);
    portal.addEventListener("dragover", dragWindow);

    return () => {
      portal.draggable = false;
      portal.removeEventListener("dragstart", startDragWindow);
      portal.removeEventListener("dragover", dragWindow);
    }
  }, []);

  useEffect(() => {
    if (storage.length === 0) setIsWarningActive(true);
  }, [storage]);

  
  // HANDLERS


  const handleWindow = (windowName: string): void => {
    if (window.location.pathname === `/farm/field${fieldId + 1}`) {
      setRedirectPath(`/farm/field${fieldId + 1}/${windowName}`);
    }
    else {
      setRedirectPath(`/farm/field${fieldId + 1}`);
    }
  }


  // DRAG AND DROP


  const startDragWindow = (e: DragEvent) => {
    const img = new Image();
    e.dataTransfer?.setDragImage(img, 0, 0);
  }
  const dragWindow = (e: MouseEvent) => {
    portal.style.top = `${String(e.clientY)}px`;
    portal.style.left =  `${String(e.clientX)}px`;
  }


  // TOOL FUNCTIONS


  // const selectButtons = (): JSX.Element[] => {      
  //   if (field.fieldProps.isFieldBought) {
  //     if (field.cropProps.cropType) {
  //       if (field.cropProps.isReadyToHarvest) {
  //         return [
  //           <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" textContent="Harvest" primary />,
  //           <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.cropProps.isWatered ? "Watered" : "Water" } watered={ field.cropProps.isWatered ? true : false } primary={ !field.cropProps.isWatered ? true : false } />,
  //           <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ field.cropProps.isFertilized ? true : false } primary={ !field.cropProps.isFertilized ? true : false } />
  //         ];
  //       }

  //       else {
  //         return [
  //           <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" buttonFor="Time" textContent="14:20" />,
  //           <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.cropProps.isWatered ? "Watered" : "Water" } watered={ field.cropProps.isWatered ? true : false } primary={ !field.cropProps.isWatered ? true : false } />,
  //           <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ field.cropProps.isFertilized ? true : false } primary={ !field.cropProps.isFertilized ? true : false } />
  //         ];
  //       }
  //     }

  //     if (field.cropProps.buildingType) {
  //       return [
  //         <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Upgrade" primary />,
  //         <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Destroy" />,
  //         <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" buttonFor="Barn" textContent="100" />
  //       ];
  //     }

  //     else {
  //       return [
  //         <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Plant" primary />,
  //         <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Build" primary />,
  //         <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" textContent="Sell this field" />
  //       ];
  //     }
  //   }

  //   else {
  //     return [ <BuySellFieldButton fieldId={fieldId} /> ];
  //   }
  // }


  // JSX


  return ReactDOM.createPortal (
    <Router>
      <Switch>

        <Route path={`/farm/field${fieldId + 1}/properties`}>
          <FieldProperties fieldId={ fieldId } closeWindow={() => handleWindow("properties")} />
        </Route>

        <Route path={`/farm/field${fieldId + 1}/plant`}>
          { isWarningActive
            ? <WarningWindow 
                warningText="No seeds in storage!" 
                warningTip="You can buy more seeds in the Shop." 
                closeWindow={ () => handleWindow("plant") } 
                shortcutButton={{
                  shortcutPath: "/shop",
                  shortcutTitle: "Visit Shop"
                }}
              />
            : <PlantWindow fieldId={ fieldId } closeWindow={() => handleWindow("plant")} />
          }
        </Route>

        <Route path={`/farm/field${fieldId + 1}/build`}>
          <BuildWindow fieldId={ fieldId } closeWindow={() => handleWindow("build")} />
        </Route>
        
        <Route path={`/farm/field${fieldId + 1}/harvest`}>
          <HarvestWindow fieldId={ fieldId } closeWindow={() => handleWindow("harvest")} />
        </Route>
        
      </Switch>

      { redirectPath && <Redirect to={redirectPath} /> }
    
      <Wrapper hide={ redirectPath !== `/farm/field${fieldId + 1}` ? true : false}>

        <TopSection>
          <HeadingContainer>
            <CropImageContainer>
              <CropImage src={ field.cropProps.cropType ? field.cropProps.cropIcon: field.buildingProps.buildingIcon } />
            </CropImageContainer>
            <Name>{ field.fieldProps.fieldName }</Name>
            <FieldNumber>{ `Field #${ field.fieldId + 1 }` }</FieldNumber>
          </HeadingContainer>
          <Main>
            { //selectButtons() 
            <>
              <PlantButton handleWindow={() => handleWindow("plant")} />
              <BuildButton handleWindow={() => handleWindow("build")} />
              <HarvestButton fieldId={fieldId} handleWindow={() => handleWindow("harvest")} />
              <BuySellFieldButton fieldId={fieldId} />
            </>
            }
          </Main>
        </TopSection>

        <BottomSection>
          <LargeButton onClick={() => handleWindow("properties")} secondary>Field properties</LargeButton>
          <LargeButton onClick={ closeFieldMenu } primary>Close</LargeButton>
        </BottomSection>

      </Wrapper>
    </Router>,
    portal
  )
}


// EXPORT


export default FieldMenu;