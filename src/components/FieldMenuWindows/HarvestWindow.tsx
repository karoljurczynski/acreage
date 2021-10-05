// IMPORT


import FieldMenuInfoBox from '../FieldMenuInfoBox/FieldMenuInfoBox';
import LargeButton from '../LargeButton/LargeButton';

import { Wrapper, TopSection, HeadingContainer, CropImageContainer, CropImage, Name, FieldNumber, Main, BottomSection } from '../FieldMenu/FieldMenuStyles';
import { HarvestWindowPropsInterface } from '../interfaces';
import crops from '../../config/crops';

import harvest from '../../images/icons/harvest.png';
import logo from '../../images/logo.png';

import { useSelector, useDispatch } from 'react-redux';
import { setBuildingType, setCropType, setCropIcon } from '../../redux/actions/fieldActions';
import { addToUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';



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
    closeWindow();
  }

  
  // JSX


  return (
    <Wrapper fieldProperties={ true }>

    <TopSection>
      <HeadingContainer>
        <CropImageContainer>
          <CropImage src={ harvest } />
        </CropImageContainer>
        <Name>Harvest</Name>
        <FieldNumber>{`Field #${field.fieldId + 1}`}</FieldNumber>
      </HeadingContainer>
      <Main>
        <FieldMenuInfoBox title="Default yield" content={crops[field.cropProps.cropType].defaultYield} />
        <FieldMenuInfoBox title="Ground bonus" content={field.fieldProps.waterRate} />
        <FieldMenuInfoBox title="Care bonus" content={field.fieldProps.waterRate} />
        <FieldMenuInfoBox title="Total experience" content={field.fieldProps.waterRate} />
        <FieldMenuInfoBox title="Total yield" content={field.fieldProps.waterRate} />
      </Main>
    </TopSection> 

    <BottomSection>
      <LargeButton onClick={ handleCollectButton } primary>Collect</LargeButton>
    </BottomSection>

  </Wrapper>
  )
}


// EXPORT


export default HarvestWindow;