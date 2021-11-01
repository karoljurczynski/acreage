// IMPORT


import { useState } from 'react';

import { WindowBarContainer, WindowBarFull, WindowBarText, WindowBigHeading, WindowBigImage, WindowBottomSection, WindowButton, WindowColumnContainer, WindowRowContainer, WindowSectionHorizontalSeparator, WindowSectionVerticalSeparator, WindowSmallHeading, WindowText, WindowTile, WindowTileHeading, WindowTileIcon, WindowTileText, WindowTopSection, WindowWrapper } from './WindowStyles';
import { PlantWindowPropsInterface } from '../interfaces';
import crops from '../../config/crops';
import { cropLevels, Level } from '../../config/levels';

import plant from '../../images/icons/plant.png';
import ground from '../../images/stats/ground.png';
import hydration from '../../images/stats/hydration.png';
import time from '../../images/stats/time.png';

import { useSelector, useDispatch } from 'react-redux';
import { setCropType, setFieldName, setPlantedTime } from '../../redux/actions/fieldActions';
import { removeFromUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { StorageItem } from '../../redux/reducers/storageReducer';
import { UserInterface } from '../../redux/reducers/userReducer';


// COMPONENT


const PlantWindow: React.FC<PlantWindowPropsInterface> = ({ fieldId, closeWindow }) => {
  

  // TOOL FUNCTIONS


  const filterForSeeds = (item: StorageItem) => {
    if (item.type === "Seed" && item.amount)
      return item;
  }
  const countCropLevelProgress = (): number => {
    const filterLevels = (item: Level) => {
      if (item.level === userData.gameplay.cropsLevels[selectedItem.name].cropLevel + 1)
        return item;
    }
    const xpToNextCropLevel: number = cropLevels.filter(filterLevels)[0].xp;
    return (userData.gameplay.cropsLevels[selectedItem.name].currentCropXp / xpToNextCropLevel * 100);
  }
  const lockPlantButton = () => {
    if (selectedItem.name) {
      if ((field.fieldProps.groundRate >= crops[selectedItem.name].groundRateNeeded) &&
          (field.fieldProps.waterRate >= crops[selectedItem.name].waterRateNeeded) &&
          (userData.gameplay.userLevel >= crops[selectedItem.name].levelNeeded)) {
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

  const [selectedItem, setSelectedItem]: [StorageItem, React.Dispatch<React.SetStateAction<StorageItem>>] = useState<StorageItem>({name: "", amount: 0, type: "Seed"});
  const [availableSeeds, setAvailableSeeds] = useState(storage.filter(filterForSeeds).map(seed => { return {...seed, selected: true} }));

  
  // HANDLERS
  

  const handleItemSelect: React.MouseEventHandler = (e: React.MouseEvent) => {
    let selectedSeed = e.target as HTMLDivElement;
    setAvailableSeeds(availableSeeds.map(seed => {
      if (seed.name === selectedSeed.title) {
        setSelectedItem(seed);
        return {...seed, selected: true};
      }
      else
        return {...seed, selected: false};
    }));
  }
  const handlePlantSelectedSeed = () => {
    setState(setCropType(fieldId, selectedItem.name));
    setState(setPlantedTime(fieldId, (Date.now() / 1000)));
    setState(setFieldName(fieldId, selectedItem.name));
    setState(removeFromUserStorage(selectedItem.name, 1, "Seed"));
    closeWindow();
  }


  // JSX


  return (
    <WindowWrapper>

      <WindowTopSection>

        <WindowRowContainer section>
          <WindowBigImage src={selectedItem.name ? crops[selectedItem.name].cropIcon : plant} />
          <WindowSectionVerticalSeparator />
          <WindowColumnContainer>
            <WindowText>Plant</WindowText>
            <WindowBigHeading>{selectedItem.name ? selectedItem.name : "Select a seed"}</WindowBigHeading>
            <WindowText>{selectedItem.name ? `lvl ${userData.gameplay.cropsLevels[selectedItem.name].cropLevel}` :" To show requirements"}</WindowText>
            {selectedItem.name &&
              <WindowBarContainer>
                <WindowBarFull percent={ countCropLevelProgress() } />
                <WindowBarText>{`${userData.gameplay.cropsLevels[selectedItem.name].currentCropXp} xp`}</WindowBarText>
              </WindowBarContainer>
            }
          </WindowColumnContainer>
        </WindowRowContainer>

        {selectedItem.name &&
        <> 
        <WindowColumnContainer section>
          <WindowSmallHeading>Plant requirements</WindowSmallHeading>
          <WindowRowContainer>
            <WindowTile title="Required user level" disabled={userData.gameplay.userLevel >= crops[selectedItem.name].levelNeeded ? false : true }>
              <WindowTileHeading>{`${crops[selectedItem.name].levelNeeded}`}</WindowTileHeading>
              <WindowTileText textColor="gold">Level</WindowTileText>
            </WindowTile>
            <WindowTile title="Time to grow">
              <WindowTileIcon src={ time } />
              <WindowTileText textColor="black">{`${crops[selectedItem.name].timeToGrowInSeconds}s`}</WindowTileText>
            </WindowTile>
            <WindowTile title="Required ground rate" disabled={field.fieldProps.groundRate >= crops[selectedItem.name].groundRateNeeded ? false : true }>
              <WindowTileIcon src={ ground } />
              <WindowTileText textColor="darkBrown">{`lvl ${crops[selectedItem.name].groundRateNeeded}`}</WindowTileText>
            </WindowTile>
            <WindowTile title="Required water rate" disabled={field.fieldProps.waterRate >= crops[selectedItem.name].waterRateNeeded ? false : true }>
              <WindowTileIcon src={ hydration } />
              <WindowTileText textColor="blue">{`lvl ${crops[selectedItem.name].waterRateNeeded}`}</WindowTileText>
            </WindowTile>
          </WindowRowContainer>
        </WindowColumnContainer>

        <WindowColumnContainer section>
          <WindowSmallHeading>Awards</WindowSmallHeading>
          <WindowRowContainer>
            <WindowTile title="Yield without bonuses">
              <WindowTileIcon src={crops[selectedItem.name].cropIcon}/>
              <WindowTileText>{`${crops[selectedItem.name].defaultYield}x`}</WindowTileText>
            </WindowTile>
            <WindowTile title="User XP to obtain">
              <WindowTileHeading>{crops[selectedItem.name].defaultYield * crops[selectedItem.name].xpPerUnit}</WindowTileHeading>
              <WindowTileText textColor="gold">XP</WindowTileText>
            </WindowTile>
            <WindowTile title="Crop XP to obtain">
              <WindowTileHeading>{crops[selectedItem.name].cropXpPerHarvest}</WindowTileHeading>
              <WindowTileText textColor="gold">Crop XP</WindowTileText>
            </WindowTile>
          </WindowRowContainer>
        </WindowColumnContainer>
        <WindowSectionHorizontalSeparator />
        </>
        }
        
        <WindowColumnContainer section>
          <WindowSmallHeading>Available seeds</WindowSmallHeading>
          <WindowRowContainer>
          { availableSeeds.map((seed, index) => {
            return (
              <WindowTile id={`${index}`} key={index} selected={seed.selected} backgroundColor="green" title={seed.name} onClick={handleItemSelect}>
                <WindowTileIcon src={crops[seed.name].cropIcon}/>
                <WindowTileText textColor="white">{`${seed.amount}x`}</WindowTileText>
              </WindowTile>
            )}) 
          }
          </WindowRowContainer>
        </WindowColumnContainer>

      </WindowTopSection>

      <WindowBottomSection>
        <WindowButton onClick={ closeWindow } secondary>Cancel</WindowButton>
        <WindowButton onClick={ handlePlantSelectedSeed } primary disabled={ lockPlantButton() }>Plant</WindowButton>
      </WindowBottomSection>

    </WindowWrapper>
  )
}


// EXPORT


export default PlantWindow;