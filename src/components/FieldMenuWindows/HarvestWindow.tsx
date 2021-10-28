// IMPORT


import { WindowBarContainer, WindowBarFull, WindowTileText, WindowBigHeading, WindowBigImage, WindowBottomSection, WindowColumnContainer, WindowRowContainer, WindowSectionVerticalSeparator, WindowSmallHeading, WindowText, WindowTile, WindowTileHeading, WindowTopSection, WindowWrapper, WindowButton, WindowTileIcon, WindowBarText } from './WindowStyles';
import ground from '../../images/stats/ground.png';
import water from '../../images/parts/water.png';
import fertilizer from '../../images/parts/fertilizer.png';
import { HarvestWindowPropsInterface } from '../interfaces';
import crops from '../../config/crops';

import { useSelector, useDispatch } from 'react-redux';
import { setCropType, setFieldName, setIsCropFertilized, setIsCropWatered, setIsCropReadyToHarvest } from '../../redux/actions/fieldActions';
import { setCurrentCropXp, setUserExperience } from '../../redux/actions/userActions';
import { addToUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { UserInterface } from '../../redux/reducers/userReducer';
import { cropLevels, Level } from '../../config/levels';


// COMPONENT


const HarvestWindow: React.FC<HarvestWindowPropsInterface> = ({ fieldId, closeWindow }) => {
  
  
  // STATE

  
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const userData: UserInterface = state.userData;
  const setState = useDispatch();


  // TOOL FUNCTIONS


  const countTotalYield = () => {
    let totalYield: number = 0;
    totalYield += crops[field.cropProps.cropType].defaultYield;
    totalYield += userData.gameplay.cropsLevels[field.cropProps.cropType].cropLevel;
    field.cropProps.isWatered ? totalYield += 1 : totalYield += 0;
    field.cropProps.isFertilized ? totalYield += 1 : totalYield += 0;
    totalYield += field.fieldProps.groundRate - crops[field.cropProps.cropType].groundRateNeeded;
    return totalYield;
  }
  const countCropLevelProgress = (): number => {
    const filterLevels = (item: Level) => {
      if (item.level === userData.gameplay.cropsLevels[field.cropProps.cropType].cropLevel + 1)
        return item;
    }
    const xpToNextCropLevel: number = cropLevels.filter(filterLevels)[0].xp;
    return (userData.gameplay.cropsLevels[field.cropProps.cropType].currentCropXp / xpToNextCropLevel * 100);
  }



  // HANDLERS

  
  const handleCollectButton = () => {
    setState(addToUserStorage(field.cropProps.cropType, countTotalYield(), "Crop"));
    setState(setUserExperience(userData.gameplay.userExperience += crops[field.cropProps.cropType].xpPerUnit * countTotalYield()));
    setState(setCurrentCropXp(field.cropProps.cropType, userData.gameplay.cropsLevels[field.cropProps.cropType].currentCropXp += crops[field.cropProps.cropType].cropXpPerHarvest));
    setState(setIsCropWatered(fieldId, false));
    setState(setIsCropFertilized(fieldId, false));
    setState(setIsCropReadyToHarvest(fieldId, false));
    setState(setCropType(fieldId, ""));
    setState(setFieldName(fieldId, "Empty"));
    closeWindow();
  }

  
  // JSX


  return (
    <WindowWrapper>
    { field.cropProps.cropType &&
      <>
        <WindowTopSection>

          <WindowRowContainer section>
            <WindowBigImage src={crops[field.cropProps.cropType].cropIcon} />
            <WindowSectionVerticalSeparator />
            <WindowColumnContainer>
              <WindowText>Harvest</WindowText>
              <WindowBigHeading>{field.cropProps.cropType}</WindowBigHeading>
              <WindowText>{`Lvl ${userData.gameplay.cropsLevels[field.cropProps.cropType].cropLevel}`}</WindowText>
              <WindowBarContainer>
                <WindowBarFull percent={ countCropLevelProgress() } />
                <WindowBarText>{`${userData.gameplay.cropsLevels[field.cropProps.cropType].currentCropXp} xp`}</WindowBarText>
              </WindowBarContainer>
            </WindowColumnContainer>
          </WindowRowContainer>

          <WindowColumnContainer section>
            <WindowSmallHeading>Bonuses</WindowSmallHeading>
            <WindowRowContainer>
              <WindowTile title="Experience bonus">
                <WindowTileHeading>{`+${userData.gameplay.cropsLevels[field.cropProps.cropType].cropLevel}`}</WindowTileHeading>
                <WindowTileText textColor="gold">Crop lvl</WindowTileText>
              </WindowTile>
              <WindowTile title="Ground bonus" disabled={field.fieldProps.groundRate - crops[field.cropProps.cropType].groundRateNeeded === 0 ? true : false}>
                <WindowTileIcon src={ ground } />
                <WindowTileText textColor="ground">{`${(field.fieldProps.groundRate - crops[field.cropProps.cropType].groundRateNeeded) === 0 ? "" : "+"}${field.fieldProps.groundRate - crops[field.cropProps.cropType].groundRateNeeded}`}</WindowTileText>
              </WindowTile>
              <WindowTile title="Watered bonus" disabled={field.cropProps.isWatered ? false : true}>
              <WindowTileIcon src={ water } />
                <WindowTileText textColor="blue">{field.cropProps.isWatered ? "+1" : "0"}</WindowTileText>
              </WindowTile>
              <WindowTile title="Fertilizer bonus" disabled={field.cropProps.isFertilized ? false : true}>
              <WindowTileIcon src={ fertilizer } />
                <WindowTileText textColor="darkBrown">{field.cropProps.isFertilized ? "+1" : "0"}</WindowTileText>
              </WindowTile>
            </WindowRowContainer>
          </WindowColumnContainer>

          <WindowColumnContainer section>
            <WindowSmallHeading>Total yield</WindowSmallHeading>
            <WindowRowContainer>
              <WindowTile title="Total yield obtained">
                <WindowTileIcon src={crops[field.cropProps.cropType].cropIcon}/>
                <WindowTileText>{`${countTotalYield()}x`}</WindowTileText>
              </WindowTile>
              <WindowTile title="Total user XP obtained">
                <WindowTileHeading>{crops[field.cropProps.cropType].xpPerUnit * countTotalYield()}</WindowTileHeading>
                <WindowTileText textColor="gold">XP</WindowTileText>
              </WindowTile>
              <WindowTile title="Total crop XP obtained">
                <WindowTileHeading>{crops[field.cropProps.cropType].cropXpPerHarvest}</WindowTileHeading>
                <WindowTileText textColor="gold">Crop XP</WindowTileText>
              </WindowTile>
            </WindowRowContainer>
          </WindowColumnContainer>

          </WindowTopSection>

          <WindowBottomSection>
          <WindowButton onClick={handleCollectButton} primary>Collect</WindowButton>
          </WindowBottomSection>
      </>
    }
    </WindowWrapper>
  )
}


// EXPORT


export default HarvestWindow;