// IMPORTS


import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FieldProperties from '../FieldProperties/FieldProperties';
import FieldMenuInfoBox from '../FieldMenuInfoBox/FieldMenuInfoBox';
import LargeButton from '../LargeButton/LargeButton';

import PlantWindow from '../FieldMenuWindows/PlantWindow';
import HarvestWindow from '../FieldMenuWindows/HarvestWindow';
import BuildWindow from '../FieldMenuWindows/BuildWindow';
import UpgradeWindow from '../FieldMenuWindows/UpgradeWindow';
import DestroyWindow from '../FieldMenuWindows/DestroyWindow';
import BuySellFieldWindow from '../FieldMenuWindows/BuySellFieldWindow';
import WarningWindow from '../FieldMenuWindows/WarningWindow';

import PlantButton from '../FieldMenuButtons/PlantButton';
import HarvestButton from '../FieldMenuButtons/HarvestButton';
import BuildButton from '../FieldMenuButtons/BuildButton';
import UpgradeButton from '../FieldMenuButtons/UpgradeButton';
import DestroyButton from '../FieldMenuButtons/DestroyButton';
import BuySellFieldButton from '../FieldMenuButtons/BuySellFieldButton';
import CropCareButton from '../FieldMenuButtons/CropCareButton';

import { Wrapper, TopSection, HeadingContainer, CropImageContainer, CropImage, Name, FieldNumber, Main, BottomSection } from './FieldMenuStyles';
import { portal } from '../../config/StylesConfig';
import { FieldMenuPropsInterface } from '../interfaces';
import logo from '../../images/logo.png';
import buildings from '../../config/buildings';
import crops from '../../config/crops';

import { useSelector } from 'react-redux';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { StateInterface } from '../../redux/reduxStore';
import { UserInterface } from '../../redux/reducers/userReducer';
import { StorageItem } from '../../redux/reducers/storageReducer';

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import AnimalCareButton from '../FieldMenuButtons/AnimalCareButton';
import CollectButton from '../FieldMenuButtons/CollectButton';



// COMPONENT


const FieldMenu: React.FC<FieldMenuPropsInterface> = ({ fieldId, closeFieldMenu }): JSX.Element => {
  

  // TOOL FUNCTIONS


  const filterForSeeds = (item: StorageItem) => {
    if (item.type === "Seed" && item.amount)
      return item;
  }
  const filterForBlueprints = (item: StorageItem) => {
    if (item.type === "Blueprint" && item.amount)
      return item;
  }
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
      if (field.fieldProps.groundRate > crops[field.fieldProps.fieldName].groundRateNeeded) itemsNumber += field.fieldProps.groundRate - crops[field.fieldProps.fieldName].groundRateNeeded;
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

  // Enables storaged items warnings
  useEffect(() => {
    // Shows warning when there are no more seeds in storage
    seeds.length === 0 ? setIsPlantWarningActive(true) : setIsPlantWarningActive(false);
    // Shows warning when there are no more blueprint in storage
    blueprints.length === 0 ? setIsBuildWarningActive(true) : setIsBuildWarningActive(false);
    // Shows warning when storage has not enough space to store more items
    ((countStorageItems() + countItemsToClaim()) > userData.gameplay.buildingsLevels["Barn"].buildingSize) ? setIsStorageWarningActive(true) : setIsStorageWarningActive(false);
    console.log((countStorageItems() + countItemsToClaim()) > userData.gameplay.buildingsLevels["Barn"].buildingSize);
  }, [ storage ]);

  
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

  const selectButtons = (): JSX.Element[] => {
    if (field.fieldProps.isFieldBought) {
      if (field.cropProps.cropType) {
        if (field.cropProps.isReadyToHarvest) {
          return [
            <HarvestButton handleWindow={() => handleWindow("harvest")} />,
            <CropCareButton fieldId={ fieldId } careType="water" />,
            <CropCareButton fieldId={ fieldId } careType="fertilizer" />
          ];
        }

        else {
          return [
            <FieldMenuInfoBox title="Time to harvest" content={`04:20 min`} />,
            <CropCareButton fieldId={ fieldId } careType="water" />,
            <CropCareButton fieldId={ fieldId } careType="fertilizer" />
          ];
        }
      }

      if (field.buildingProps.buildingType) {
        let returnedButtons: JSX.Element[] = [];
        if (userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSpeed > 0) returnedButtons.push(<FieldMenuInfoBox title="Production speed" content={`${userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSpeed / 60} min`} />);
        if (userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSize > 0) returnedButtons.push(<FieldMenuInfoBox title="Building capacity" content={`${userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSize} units`} />);
        if (field.animalProps.animalType) {
          if (field.animalProps.isReadyToCollect) {
            returnedButtons.push(<CollectButton handleWindow={() => handleWindow("collect")} />);
            returnedButtons.push(<AnimalCareButton careType="clean" fieldId={ fieldId } />);
            returnedButtons.push(<AnimalCareButton careType="feed" fieldId={ fieldId } />);
          }
          else {
            returnedButtons.push(<FieldMenuInfoBox title="Time to collect" content={`21:37 min`} />);
            returnedButtons.push(<AnimalCareButton careType="clean" fieldId={ fieldId } />);
            returnedButtons.push(<AnimalCareButton careType="feed" fieldId={ fieldId } />);
          }
        }
        returnedButtons.push(<UpgradeButton handleWindow={() => handleWindow("upgrade")} />);
        returnedButtons.push(<DestroyButton handleWindow={() => handleWindow("destroy")} />);
        return returnedButtons;
      }

      else {
        return [
          <PlantButton handleWindow={() => handleWindow("plant")} />,
          <BuildButton handleWindow={() => handleWindow("build")} />,
          <BuySellFieldButton isBuyButton={ false } handleWindow={() => handleWindow("sell")} />
        ];
      }
    }

    else {
      return [ 
        <BuySellFieldButton isBuyButton={ true } handleWindow={() => handleWindow("buy")} /> 
      ];
    }
  }


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

        <Route path={`/farm/field${fieldId + 1}/upgrade`}>
          <UpgradeWindow fieldId={ fieldId } closeWindow={() => handleWindow("upgrade")} />
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
        
      </Switch>

      { redirectPath && <Redirect to={redirectPath} /> }
    
      <Wrapper hide={ redirectPath !== `/farm/field${fieldId + 1}` ? true : false}>

        <TopSection>
          <HeadingContainer>
            <CropImageContainer>
              { (field.cropProps.cropType || field.buildingProps.buildingType)
                ? <CropImage src={ field.cropProps.cropType ? crops[field.cropProps.cropType].cropIcon : buildings[field.buildingProps.buildingType].buildingIcon } />
                : <CropImage src={ logo } />
              }
            </CropImageContainer>
            <Name>{ field.fieldProps.fieldName }</Name>
            <FieldNumber>{ `Field #${ field.fieldId + 1 }` }</FieldNumber>
          </HeadingContainer>
          <Main>
            { selectButtons() }
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