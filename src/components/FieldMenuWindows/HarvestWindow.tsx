// IMPORT


import { WindowBarContainer, WindowBarFull, WindowTileText, WindowBigHeading, WindowBigImage, WindowBottomSection, WindowColumnContainer, WindowRowContainer, WindowSectionVerticalSeparator, WindowSmallHeading, WindowText, WindowTile, WindowTileHeading, WindowTopSection, WindowWrapper, WindowButton, WindowTileIcon, WindowBarText } from './WindowStyles';
import ground from '../../images/stats/ground.png';
import water from '../../images/parts/water.png';
import fertilizer from '../../images/parts/fertilizer.png';
import logo from '../../images/logo.png';
import { HarvestWindowPropsInterface } from '../interfaces';
import crops from '../../config/crops';

import { useSelector, useDispatch } from 'react-redux';
import { setCropType, setCropIcon, setFieldName, setIsCropFertilized, setIsCropWatered, setIsCropReadyToHarvest } from '../../redux/actions/fieldActions';
import { setUserExperience } from '../../redux/actions/userActions';
import { addToUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { UserInterface } from '../../redux/reducers/userReducer';


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
    totalYield += crops[field.cropProps.cropType].cropLevel;
    field.cropProps.isWatered ? totalYield += 1 : totalYield += 0;
    field.cropProps.isFertilized ? totalYield += 1 : totalYield += 0;
    totalYield += field.fieldProps.groundRate - crops[field.cropProps.cropType].groundRateNeeded;
    return totalYield;
  }


  // HANDLERS

  
  const handleCollectButton = () => {
    setState(addToUserStorage(field.cropProps.cropType, countTotalYield(), "Crop"));
    setState(setUserExperience(userData.gameplay.userExperience += crops[field.cropProps.cropType].xpPerUnit * countTotalYield()));
    setState(setIsCropWatered(fieldId, false));
    setState(setIsCropFertilized(fieldId, false));
    setState(setIsCropReadyToHarvest(fieldId, false));
    setState(setCropType(fieldId, ""));
    setState(setCropIcon(fieldId, logo));
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
              <WindowText>Lvl 1</WindowText>
              <WindowBarContainer>
                <WindowBarFull percent={45} />
                <WindowBarText>15 xp</WindowBarText>
              </WindowBarContainer>
            </WindowColumnContainer>
          </WindowRowContainer>

          <WindowColumnContainer section>
            <WindowSmallHeading>Bonuses</WindowSmallHeading>
            <WindowRowContainer>
              <WindowTile title="Experience bonus">
                <WindowTileHeading>{`+${crops[field.cropProps.cropType].cropLevel}`}</WindowTileHeading>
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