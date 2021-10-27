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
import DestroyButton from '../FieldMenuButtons/DestroyButton';
import DestroyWindow from '../FieldMenuWindows/DestroyWindow';
import BuySellFieldWindow from '../FieldMenuWindows/BuySellFieldWindow';
import { UserInterface } from '../../redux/reducers/userReducer';
import buildings from '../../config/buildings';
import crops from '../../config/crops';



// COMPONENT


const FieldMenu: React.FC<FieldMenuPropsInterface> = ({ fieldId, closeFieldMenu }): JSX.Element => {
  const filterForSeeds = (item: StorageItem) => {
    if (item.type === "Seed" && item.amount)
      return item;
  }
  const filterForBlueprints = (item: StorageItem) => {
    if (item.type === "Blueprint" && item.amount)
      return item;
  }

  // STATE

  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const userData: UserInterface = state.userData;
  const field: FieldInterface = state.fields[fieldId];
  const storage: StorageItem[] = state.storage;
  const seeds: StorageItem[] = storage.filter(filterForSeeds);
  const blueprints: StorageItem[] = storage.filter(filterForBlueprints);

  const [redirectPath, setRedirectPath]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>(`/farm/field${fieldId + 1}`);
  const [isPlantWarningActive, setIsPlantWarningActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
  const [isBuildWarningActive, setIsBuildWarningActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
  const [isStorageWarningActive, setIsStorageWarningActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);


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
    // Shows warning when there are no more seeds in storage
    seeds.length === 0 ? setIsPlantWarningActive(true) : setIsPlantWarningActive(false);
    // Shows warning when there are no more blueprint in storage
    blueprints.length === 0 ? setIsBuildWarningActive(true) : setIsBuildWarningActive(false);
    // Shows warning when storage has not enough space to store more items
    ((countStorageItems() + countItemsToClaim()) > userData.gameplay.buildingBarnSize) ? setIsStorageWarningActive(true) : setIsStorageWarningActive(false);
    console.log((countStorageItems() + countItemsToClaim()) > userData.gameplay.buildingBarnSize);
  }, [ storage ]);

  
  // HANDLERS

  const countItemsToClaim = (): number => {
    let itemsNumber: number = 0;
    if (field.buildingProps.buildingType.length > 0) {
      buildings[field.buildingProps.buildingType].partsNeeded.forEach(part => {
        if (part.amount % 2) {
          itemsNumber += Math.floor(part.amount / 2);
        }
        else
          itemsNumber += part.amount / 2;
      });
      // + blueprint
      itemsNumber++;
    }
    else if (field.fieldProps.fieldName !== "Empty" && field.fieldProps.isFieldBought) {
      itemsNumber += crops[field.fieldProps.fieldName].defaultYield + crops[field.fieldProps.fieldName].cropLevel;
      if (field.cropProps.isWatered) itemsNumber++;
      if (field.cropProps.isFertilized) itemsNumber++;
    }
    return itemsNumber;
  }
  const countStorageItems = (): number => {
    let sum: number = 0;
    storage.forEach(item => {
      sum += item.amount;
    });
    return sum;
  }


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
          { isPlantWarningActive
            ? <WarningWindow 
                warningText="No more seeds in storage!" 
                warningTip="You can buy more seeds in the Garden Shop." 
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
          { isBuildWarningActive
            ? <WarningWindow 
                warningText="No blueprints found in storage!" 
                warningTip="You can buy blueprints in the Construction Shop." 
                closeWindow={ () => handleWindow("build") } 
                shortcutButton={{
                  shortcutPath: "/shop",
                  shortcutTitle: "Visit Shop"
                }}
              />
            : <BuildWindow fieldId={ fieldId } closeWindow={() => handleWindow("build")} />
            }
        </Route>

        <Route path={`/farm/field${fieldId + 1}/destroy`}>
          { isStorageWarningActive
            ? <WarningWindow 
                warningText="Storage has not enough space to store more parts!" 
                warningTip="You can sell some crops or upgrade your Barn." 
                closeWindow={ () => handleWindow("destroy") }    
              />
            : <DestroyWindow fieldId={ fieldId } closeWindow={() => handleWindow("destroy")} />
          }
        </Route>

        <Route path={`/farm/field${fieldId + 1}/buy`}>
          <BuySellFieldWindow isBuyWindow={ true } fieldId={ fieldId } closeWindow={() => handleWindow("buy")} /> 
        </Route>

        <Route path={`/farm/field${fieldId + 1}/sell`}>
          <BuySellFieldWindow isBuyWindow={ false } fieldId={ fieldId } closeWindow={() => handleWindow("sell")} /> 
        </Route> 
        
        <Route path={`/farm/field${fieldId + 1}/harvest`}>
          { isStorageWarningActive
            ? <WarningWindow 
                warningText="Storage has not enough space to store more crops!" 
                warningTip="You can sell some crops or upgrade your Barn." 
                closeWindow={ () => handleWindow("harvest") }
              />
            : <HarvestWindow fieldId={ fieldId } closeWindow={() => handleWindow("harvest")} />
          }
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
              <DestroyButton handleWindow={() => handleWindow("destroy")} />
              <HarvestButton handleWindow={() => handleWindow("harvest")} />
              <BuySellFieldButton isBuyButton={ true } handleWindow={() => handleWindow("buy")} /> 
              <BuySellFieldButton isBuyButton={ false } handleWindow={() => handleWindow("sell")} /> 
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