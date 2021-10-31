// IMPORTS


import { WindowBigHeading, WindowBigImage, WindowBottomSection, WindowButton, WindowColumnContainer, WindowRowContainer, WindowSectionHorizontalSeparator, WindowSectionVerticalSeparator, WindowSmallHeading, WindowText, WindowTile, WindowTileHeading, WindowTileIcon, WindowTileText, WindowTopSection, WindowWrapper } from './WindowStyles';
import { UpgradeWindowPropsInterface } from '../interfaces';
import { BuildingPart } from '../../config/interfaces';
import buildings from '../../config/buildings';
import parts from '../../config/parts';

import time from '../../images/stats/time.png';
import capacity from '../../images/icons/capacity.png';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { StorageItem } from '../../redux/reducers/storageReducer';
import { UserInterface } from '../../redux/reducers/userReducer';
import { setBuildingLevel, setBuildingSize, setBuildingSpeed, setUserExperience } from '../../redux/actions/userActions';


// COMPONENT


const UpgradeWindow: React.FC<UpgradeWindowPropsInterface> = ({ fieldId, closeWindow }) => {
  

  // TOOL FUNCTIONS


  const filterForParts = (item: StorageItem) => {
    if (item.type === "Part" && item.amount && item.name !== "Water" && item.name !== "Fertilizer")
      return item;
  }
  const checkIfUserHasEnoughParts = (neededParts: BuildingPart): boolean => {
    let userHasEnoughParts: boolean = false;
    const userParts = storage.filter(filterForParts);
    userParts.forEach(userPart => {
      if (userPart.name === neededParts.name) {
        if (userPart.amount >= (neededParts.amount + buildings[field.buildingProps.buildingType].buildingLevel))
          userHasEnoughParts = true;
      }
    });
    return userHasEnoughParts;
  }
  const checkIfUserHasAllEnoughParts = (): boolean => {
    let userHasAllParts: boolean = true;
    for (let i = 0; i < buildings[field.buildingProps.buildingType].partsNeeded.length; i++) {
      if (!checkIfUserHasEnoughParts(buildings[field.buildingProps.buildingType].partsNeeded[i]))
        userHasAllParts = false;
    }
    return userHasAllParts;
  }
  const lockUpgradeButton = () => {
    if ((checkIfUserHasAllEnoughParts()) &&
        (userData.gameplay.userLevel >= userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel * 2)) {
      return false;
    }
    else
      return true;
  }


  // STATE

  
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const userData: UserInterface = state.userData;
  const storage: StorageItem[] = state.storage;
  const storagedParts: StorageItem[] = storage.filter(filterForParts);
  const setState = useDispatch();


  // HANDLERS
  

  const handleUpgradeBuilding = () => {
    buildings[field.buildingProps.buildingType].partsNeeded.forEach(part => {
      setState(removeFromUserStorage(part.name, part.amount + userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel, "Part"));
    });
    setState(setUserExperience(userData.gameplay.userExperience += (buildings[field.buildingProps.buildingType].xpPerUpgrade * userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel)));
    setState(setBuildingLevel(field.buildingProps.buildingType, userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel += 1));
    if (userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSize > 0)
      setState(setBuildingSize(field.buildingProps.buildingType, Math.floor(userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSize += userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSize / 2)));
    if (userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSpeed > 0)
      setState(setBuildingSpeed(field.buildingProps.buildingType, Math.floor(userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSpeed -= userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSpeed / 5)));
    closeWindow();
  }


  // JSX


  return (
    <WindowWrapper>

      <WindowTopSection>

        <WindowRowContainer section>
          <WindowBigImage src={ buildings[field.buildingProps.buildingType].buildingIcon } />
          <WindowSectionVerticalSeparator />
          <WindowColumnContainer>
            <WindowText>Upgrade</WindowText>
            <WindowBigHeading>{ field.buildingProps.buildingType }</WindowBigHeading>
            <WindowText>{`lvl ${userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel}`}</WindowText>
          </WindowColumnContainer>
        </WindowRowContainer>

        
        <WindowColumnContainer section>
          <WindowSmallHeading>Upgrade requirements</WindowSmallHeading>
          <WindowRowContainer>
            <WindowTile title="Required user level" disabled={userData.gameplay.userLevel >= userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel * 2 ? false : true }>
              <WindowTileHeading>{`${userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel * 2}`}</WindowTileHeading>
              <WindowTileText textColor="gold">Level</WindowTileText>
            </WindowTile>
            <WindowTile title="Time to upgrade">
              <WindowTileIcon src={ time } />
              <WindowTileText textColor="black">{`${buildings[field.buildingProps.buildingType].timeToBuildInSeconds}s`}</WindowTileText>
            </WindowTile>

            { buildings[field.buildingProps.buildingType].partsNeeded.map(part => {
              return (
                <WindowTile title={part.name} disabled={checkIfUserHasEnoughParts(part) ? false : true}>
                  <WindowTileIcon src={parts[part.name].partIcon} />
                  <WindowTileText textColor="black">{`${part.amount + userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel}x`}</WindowTileText>
                </WindowTile>
              )})
            }

          </WindowRowContainer>
        </WindowColumnContainer>

        <WindowColumnContainer section>
          <WindowSmallHeading>Awards</WindowSmallHeading>
          <WindowRowContainer>
            <WindowTile title="New building level">
              <WindowTileIcon src={buildings[field.buildingProps.buildingType].buildingIcon}/>
              <WindowTileText textColor="black">{`lvl ${userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel + 1}`}</WindowTileText>
            </WindowTile>
            <WindowTile title="User XP to obtain">
              <WindowTileHeading>{buildings[field.buildingProps.buildingType].xpPerUpgrade * userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel}</WindowTileHeading>
              <WindowTileText textColor="gold">XP</WindowTileText>
            </WindowTile>

            { userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSize > 0 &&
              <WindowTile title="New building's capacity">
                <WindowTileIcon src={ capacity } />
                <WindowTileText textColor="black">{ userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSize + Math.floor(userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSize / 2) }</WindowTileText>
              </WindowTile>
            }
            { userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSpeed > 0 &&
              <WindowTile title="New building's production speed">
                <WindowTileIcon src={ time } />
                <WindowTileText textColor="black">{`${userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSpeed - Math.floor(userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingSpeed / 5) } h`}</WindowTileText>
              </WindowTile>
            }
        
          </WindowRowContainer>
        </WindowColumnContainer>
        <WindowSectionHorizontalSeparator />
        
        <WindowColumnContainer section>
          <WindowSmallHeading>Available parts</WindowSmallHeading>
          <WindowRowContainer>
          { storagedParts.map((part, index) => {
            return (
              <WindowTile title={part.name} key={index}>
                <WindowTileIcon src={parts[part.name].partIcon} />
                <WindowTileText textColor="black">{`${part.amount}x`}</WindowTileText>
              </WindowTile>
            )}) 
          }
          </WindowRowContainer>
        </WindowColumnContainer>

      </WindowTopSection>

      <WindowBottomSection>
        <WindowButton onClick={ closeWindow } secondary>Cancel</WindowButton>
        <WindowButton onClick={ handleUpgradeBuilding } primary disabled={ lockUpgradeButton() }>Upgrade</WindowButton>
      </WindowBottomSection>

    </WindowWrapper>
  )
}


// EXPORT


export default UpgradeWindow;