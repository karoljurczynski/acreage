// IMPORT


import FieldMenuInfoBox from '../FieldMenuInfoBox/FieldMenuInfoBox';
import LargeButton from '../LargeButton/LargeButton';

import { Wrapper, TopSection, HeadingContainer, CropImageContainer, CropImage, Name, FieldNumber, Main, BottomSection } from '../FieldMenu/FieldMenuStyles';
import { HarvestWindowPropsInterface } from '../interfaces';
import crops from '../../config/crops';

import harvest from '../../images/icons/harvest.png';
import ground from '../../images/stats/ground.png';
import water from '../../images/parts/water.png';
import fertilizer from '../../images/parts/fertilizer.png';
import logo from '../../images/logo.png';

import { useSelector, useDispatch } from 'react-redux';
import { setCropType, setCropIcon, setFieldName } from '../../redux/actions/fieldActions';
import { addToUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { WindowBarContainer, WindowBarFull, WindowTileText, WindowBigHeading, WindowBigImage, WindowBottomSection, WindowColumnContainer, WindowRowContainer, WindowSectionVerticalSeparator, WindowSmallHeading, WindowText, WindowTile, WindowTileHeading, WindowTopSection, WindowWrapper, WindowButton, WindowTileIcon, WindowBarText } from './WindowStyles';


// COMPONENT


const HarvestWindow: React.FC<HarvestWindowPropsInterface> = ({ fieldId, closeWindow }) => {
  
  
  // STATE

  
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const setState = useDispatch();


  // HANDLERS


  const handleCollectButton = () => {
    setState(addToUserStorage(field.cropProps.cropType, crops[field.cropProps.cropType].defaultYield, "Crop"));
    setState(setCropType(fieldId, ""));
    setState(setCropIcon(fieldId, logo));
    setState(setFieldName(fieldId, "Empty"));
    closeWindow();
  }

  
  // JSX


  return (
    <WindowWrapper>

      <WindowTopSection>

        <WindowRowContainer section>
          <WindowBigImage src={field.cropProps.cropIcon} />
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
          <WindowSmallHeading>Bonus yield</WindowSmallHeading>
          <WindowRowContainer>
            <WindowTile>
              <WindowTileHeading>+1</WindowTileHeading>
              <WindowTileText textColor="gold">Crop lvl</WindowTileText>
            </WindowTile>
            <WindowTile>
              <WindowTileIcon src={ ground } />
              <WindowTileText large textColor="ground">+1</WindowTileText>
            </WindowTile>
            <WindowTile>
            <WindowTileIcon src={ water } />
              <WindowTileText large textColor="blue">+1</WindowTileText>
            </WindowTile>
            <WindowTile>
            <WindowTileIcon src={ fertilizer } />
              <WindowTileText large textColor="darkBrown">+1</WindowTileText>
            </WindowTile>
          </WindowRowContainer>
        </WindowColumnContainer>

        <WindowColumnContainer section>
          <WindowSmallHeading>Summary</WindowSmallHeading>
          <WindowRowContainer>
            <WindowTile>
              <WindowTileIcon src={field.cropProps.cropIcon}/>
              <WindowTileText large>3x</WindowTileText>
            </WindowTile>
            <WindowTile>
              <WindowTileHeading>5</WindowTileHeading>
              <WindowTileText textColor="gold">XP</WindowTileText>
            </WindowTile>
            <WindowTile>
              <WindowTileHeading>1</WindowTileHeading>
              <WindowTileText textColor="gold">Crop XP</WindowTileText>
            </WindowTile>
          </WindowRowContainer>
        </WindowColumnContainer>

      </WindowTopSection>

      <WindowBottomSection>
        <WindowButton onClick={handleCollectButton} primary>Collect</WindowButton>
      </WindowBottomSection>

    </WindowWrapper>
  )
}


// EXPORT


export default HarvestWindow;