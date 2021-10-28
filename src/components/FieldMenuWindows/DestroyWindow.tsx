// IMPORT


import { useState } from 'react';

import { WindowBigHeading, WindowBigImage, WindowBottomSection, WindowButton, WindowColumnContainer, WindowRowContainer, WindowSectionHorizontalSeparator, WindowSectionVerticalSeparator, WindowSmallHeading, WindowText, WindowTile, WindowTileHeading, WindowTileIcon, WindowTileText, WindowTopSection, WindowWrapper } from './WindowStyles';
import { DestroyWindowPropsInterface } from '../interfaces';
import { BuildingPart } from '../../config/interfaces';
import buildings from '../../config/buildings';
import parts from '../../config/parts';

import destroy from '../../images/icons/destroy.png';
import logo from '../../images/logo.png';

import { useSelector, useDispatch } from 'react-redux';
import { setBuildingIcon, setBuildingType, setFieldName } from '../../redux/actions/fieldActions';
import { addToUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { UserInterface } from '../../redux/reducers/userReducer';
import ConfirmWindow from './ConfirmWindow';


// COMPONENT


const DestroyWindow: React.FC<DestroyWindowPropsInterface> = ({ fieldId, closeWindow }) => {
  

  // STATE

  
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const userData: UserInterface = state.userData;
  const [isConfirmWindowOpened, setIsConfirmWindowOpened] = useState(false);
  const setState = useDispatch();


  // HANDLERS


  const handleDestroyBuilding = (): void => {
    const usedParts: BuildingPart[] = buildings[field.buildingProps.buildingType].partsNeeded;
    usedParts.forEach(usedPart => {
      setState(addToUserStorage(usedPart.name, countHalfOfPartsUsed(usedPart.amount), "Part"));
    });
    setState(addToUserStorage(field.buildingProps.buildingType, 1, "Blueprint"));
    setState(setBuildingIcon(fieldId, logo));
    setState(setBuildingType(fieldId, ""));
    setState(setFieldName(fieldId, "Empty"));
    closeWindow();
  }
  const handleDestroyButton = () => {
    setIsConfirmWindowOpened(true);
  }


  // TOOL FUNCTIONS


  const countHalfOfPartsUsed = (partAmount: number): number => {
    if (partAmount % 2) {
      return Math.floor(partAmount / 2);
    }
    else
      return partAmount / 2;
  }
  const lockDestroyButton = () => {
    return false;
    // if (selectedItem.name) {
    //   if ((checkIfUserHasAllEnoughParts()) &&
    //      (field.fieldProps.groundRate >= buildings[selectedItem.name].groundRateNeeded) &&
    //      (field.fieldProps.waterRate >= buildings[selectedItem.name].waterRateNeeded) &&
    //      (userData.gameplay.userLevel >= buildings[selectedItem.name].levelNeeded)) {
    //     return false;
    //   }
    //   else
    //     return true;
    // }
    // else
    //   return true;
  }


  // JSX


  return (
    <>
    { !isConfirmWindowOpened
      ? <WindowWrapper>
          <WindowTopSection>

            <WindowRowContainer section>
              <WindowBigImage src={ destroy } />
              <WindowSectionVerticalSeparator />
              <WindowColumnContainer>
                <WindowText>Destroy</WindowText>
                <WindowBigHeading long>{ field.buildingProps.buildingType }</WindowBigHeading>
                <WindowText>{`lvl ${userData.gameplay.buildingsLevels[field.buildingProps.buildingType].buildingLevel}`}</WindowText>
              </WindowColumnContainer>
            </WindowRowContainer>

            <WindowColumnContainer section>
              <WindowSmallHeading>Items to claim</WindowSmallHeading>
              <WindowRowContainer>

                <WindowTile backgroundColor="blueprint" title={field.buildingProps.buildingType}>
                  <WindowTileIcon src={buildings[field.buildingProps.buildingType].buildingIcon}/>
                  <WindowTileText textColor="white">1x</WindowTileText>
                </WindowTile>
              
                { buildings[field.buildingProps.buildingType] && buildings[field.buildingProps.buildingType].partsNeeded.map(part => {
                  return (
                    <WindowTile title={part.name}>
                      <WindowTileIcon src={parts[part.name].partIcon} />
                      <WindowTileText textColor="black">{`${countHalfOfPartsUsed(part.amount)}x`}</WindowTileText>
                    </WindowTile>
                  )})
                }

              </WindowRowContainer>
            </WindowColumnContainer>

          </WindowTopSection>

          <WindowBottomSection>
            <WindowButton onClick={ closeWindow } secondary>Cancel</WindowButton>
            <WindowButton onClick={ handleDestroyButton } primary disabled={ lockDestroyButton() }>Destroy</WindowButton>
          </WindowBottomSection>

        </WindowWrapper>

      : <ConfirmWindow 
          confirmHeading="Destroy" 
          confirmText={`Are you sure you want to destroy ${(field.buildingProps.buildingType).toLowerCase()}?`}
          confirmFunction={ handleDestroyBuilding } 
          closeWindow={ closeWindow }
        />
    }
    </>
  )
}


// EXPORT


export default DestroyWindow;