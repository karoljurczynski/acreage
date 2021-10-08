// IMPORT


import { useState } from 'react';

import { WindowBigHeading, WindowBigImage, WindowBottomSection, WindowButton, WindowColumnContainer, WindowRowContainer, WindowSectionHorizontalSeparator, WindowSectionVerticalSeparator, WindowSmallHeading, WindowText, WindowTile, WindowTileHeading, WindowTileIcon, WindowTileText, WindowTopSection, WindowWrapper } from './WindowStyles';
import { BuildWindowPropsInterface } from '../interfaces';
import { BuildingPart } from '../../config/interfaces';
import buildings from '../../config/buildings';
import parts from '../../config/parts';

import build from '../../images/icons/build.png';
import time from '../../images/stats/time.png';
import ground from '../../images/stats/ground.png';
import hydration from '../../images/stats/hydration.png';

import { useSelector, useDispatch } from 'react-redux';
import { setBuildingIcon, setBuildingType, setFieldName } from '../../redux/actions/fieldActions';
import { removeFromUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { StorageItem } from '../../redux/reducers/storageReducer';
import { UserInterface } from '../../redux/reducers/userReducer';
import { setUserExperience } from '../../redux/actions/userActions';


// COMPONENT


const BuildWindow: React.FC<BuildWindowPropsInterface> = ({ fieldId, closeWindow }) => {
  

  // TOOL FUNCTIONS


  const filterForBlueprints = (item: StorageItem) => {
    if (item.type === "Blueprint" && item.amount)
      return item;
  }
  const filterForParts = (item: StorageItem) => {
    if (item.type === "Part" && item.amount)
      return item;
  }
  const checkIfUserHasEnoughParts = (neededParts: BuildingPart): boolean => {
    let userHasEnoughParts: boolean = false;
    const userParts = storage.filter(filterForParts);
    userParts.forEach(userPart => {
      if (userPart.name === neededParts.name) {
        if (userPart.amount >= neededParts.amount)
          userHasEnoughParts = true;
      }
    });
    return userHasEnoughParts;
  }
  const checkIfUserHasAllEnoughParts = (): boolean => {
    let userHasAllParts: boolean = true;
    for (let i = 0; i < buildings[selectedItem.name].partsNeeded.length; i++) {
      if (!checkIfUserHasEnoughParts(buildings[selectedItem.name].partsNeeded[i]))
        userHasAllParts = false;
    }
    return userHasAllParts;
  }
  const lockBuildButton = () => {
    if (selectedItem.name) {
      if ((checkIfUserHasAllEnoughParts()) &&
         (field.fieldProps.groundRate >= buildings[selectedItem.name].groundRateNeeded) &&
         (field.fieldProps.waterRate >= buildings[selectedItem.name].waterRateNeeded) &&
         (userData.gameplay.userLevel >= buildings[selectedItem.name].levelNeeded)) {
        return false;
      }
      else
        return true;
    }
    else
      return true;
  }


  // STATE

  
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const userData: UserInterface = state.userData;
  const storage: StorageItem[] = state.storage;
  const setState = useDispatch();

  const [selectedItem, setSelectedItem]: [StorageItem, React.Dispatch<React.SetStateAction<StorageItem>>] = useState<StorageItem>({name: "", amount: 0, type: "Blueprint"});
  const [availableBlueprints, setAvailableBlueprints] = useState(storage.filter(filterForBlueprints).map(blueprint => { return {...blueprint, selected: true} }));

  
  // HANDLERS
  

  const handleItemSelect: React.MouseEventHandler = (e: React.MouseEvent) => {
    let selectedBlueprint = e.target as HTMLDivElement;
    setAvailableBlueprints(availableBlueprints.map(blueprint => {
      if (blueprint.name === selectedBlueprint.title) {
        setSelectedItem(blueprint);
        return {...blueprint, selected: true};
      }
      else
        return {...blueprint, selected: false};
    }));
  }
  const handleBuildSelectedBlueprint = () => {
    const userParts = storage.filter(filterForParts);
    userParts.forEach(userPart => {
      setState(removeFromUserStorage(userPart.name, userPart.amount, "Part"));
    });
    setState(setUserExperience(userData.gameplay.userExperience += buildings[selectedItem.name].xpPerUpgrade * buildings[selectedItem.name].buildingLevel));
    setState(setFieldName(fieldId, selectedItem.name));
    setState(setBuildingIcon(fieldId, buildings[selectedItem.name].buildingIcon));
    setState(setBuildingType(fieldId, selectedItem.name));
    setState(removeFromUserStorage(selectedItem.name, 1, "Blueprint"));
    closeWindow();
  }


  // JSX


  return (
    <WindowWrapper>

      <WindowTopSection>

        <WindowRowContainer section>
          <WindowBigImage src={selectedItem.name ? buildings[selectedItem.name].buildingIcon : build} />
          <WindowSectionVerticalSeparator />
          <WindowColumnContainer>
            <WindowText>Build</WindowText>
            <WindowBigHeading long>{selectedItem.name ? selectedItem.name : "Select a blueprint"}</WindowBigHeading>
            <WindowText>{selectedItem.name ? `lvl ${buildings[selectedItem.name].buildingLevel}` :" To show requirements"}</WindowText>
          </WindowColumnContainer>
        </WindowRowContainer>

        {selectedItem.name &&
        <> 
        <WindowColumnContainer section>
          <WindowSmallHeading>Build requirements</WindowSmallHeading>
          <WindowRowContainer>
            <WindowTile title="Required user level" disabled={userData.gameplay.userLevel >= buildings[selectedItem.name].levelNeeded ? false : true }>
              <WindowTileHeading>{`${buildings[selectedItem.name].levelNeeded}`}</WindowTileHeading>
              <WindowTileText textColor="gold">Level</WindowTileText>
            </WindowTile>
            <WindowTile title="Time to build">
              <WindowTileIcon src={ time } />
              <WindowTileText textColor="black">{`${buildings[selectedItem.name].timeToBuildInSeconds}s`}</WindowTileText>
            </WindowTile>

            { buildings[selectedItem.name].groundRateNeeded > 0 &&
              <WindowTile title="Required ground rate" disabled={field.fieldProps.groundRate >= buildings[selectedItem.name].groundRateNeeded ? false : true}>
                <WindowTileIcon src={ ground } />
                <WindowTileText textColor="darkBrown">{`lvl ${buildings[selectedItem.name].groundRateNeeded}`}</WindowTileText>
              </WindowTile>
            }
            { buildings[selectedItem.name].waterRateNeeded > 0 &&
              <WindowTile title="Required water rate" disabled={field.fieldProps.waterRate >= buildings[selectedItem.name].waterRateNeeded ? false : true}>
                <WindowTileIcon src={ hydration } />
                <WindowTileText textColor="blue">{`lvl ${buildings[selectedItem.name].waterRateNeeded}`}</WindowTileText>
              </WindowTile>
            }
            { buildings[selectedItem.name].partsNeeded.map(part => {
              return (
                <WindowTile title={part.name} disabled={checkIfUserHasEnoughParts(part) ? false : true}>
                  <WindowTileIcon src={parts[part.name].partIcon} />
                  <WindowTileText textColor="black">{`${part.amount}x`}</WindowTileText>
                </WindowTile>
              )})
            }

          </WindowRowContainer>
        </WindowColumnContainer>

        <WindowColumnContainer section>
          <WindowSmallHeading>Awards</WindowSmallHeading>
          <WindowRowContainer>
            <WindowTile title="New building">
              <WindowTileIcon src={buildings[selectedItem.name].buildingIcon}/>
              <WindowTileText>1x</WindowTileText>
            </WindowTile>
            <WindowTile title="User XP to obtain">
              <WindowTileHeading>{buildings[selectedItem.name].xpPerUpgrade * buildings[selectedItem.name].buildingLevel}</WindowTileHeading>
              <WindowTileText textColor="gold">XP</WindowTileText>
            </WindowTile>
          </WindowRowContainer>
        </WindowColumnContainer>
        <WindowSectionHorizontalSeparator />
        </>
        }
        
        <WindowColumnContainer section>
          <WindowSmallHeading>Available blueprints</WindowSmallHeading>
          <WindowRowContainer>
          { availableBlueprints.map((blueprint, index) => {
            return (
              <WindowTile id={`${index}`} key={index} selected={blueprint.selected} backgroundColor="blueprint" title={blueprint.name} onClick={handleItemSelect}>
                <WindowTileIcon src={buildings[blueprint.name].buildingIcon}/>
                <WindowTileText textColor="white">{`${blueprint.amount}x`}</WindowTileText>
              </WindowTile>
            )}) 
          }
          </WindowRowContainer>
        </WindowColumnContainer>

      </WindowTopSection>

      <WindowBottomSection>
        <WindowButton onClick={ closeWindow } secondary>Cancel</WindowButton>
        <WindowButton onClick={ handleBuildSelectedBlueprint } primary disabled={ lockBuildButton() }>Build</WindowButton>
      </WindowBottomSection>

    </WindowWrapper>
  )
}


// EXPORT


export default BuildWindow;