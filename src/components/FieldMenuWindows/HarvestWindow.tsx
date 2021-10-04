// IMPORT


import FieldMenuInfoBox from '../FieldMenuInfoBox/FieldMenuInfoBox';
import LargeButton from '../LargeButton/LargeButton';

import { Wrapper, TopSection, HeadingContainer, CropImageContainer, 
         CropImage, Name, FieldNumber, Main, BottomSection
} from '../FieldMenu/FieldMenuStyles';
import { HarvestWindowPropsInterface } from '../interfaces';
import harvest from '../../images/icons/harvest.png';
import logo from '../../images/logo.png';
import crops from '../../config/crops';

import { useSelector, useDispatch } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { setBuildingType, setCropType, setFieldIcon } from '../../redux/actions/fieldActions';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { StorageItem } from '../../redux/reducers/storageReducer';
import { addToUserStorage } from '../../redux/actions/storageActions';


// COMPONENT


const HarvestWindow: React.FC<HarvestWindowPropsInterface> = ({ fieldId, closeWindow }) => {
  
  
  // STATE

  
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const setState = useDispatch();


  // HANDLERS


  const handleCollectButton = () => {
    closeWindow();
    setState(setCropType(fieldId, ""));
    setState(setBuildingType(fieldId, ""));
    setState(setFieldIcon(fieldId, logo));
    setState(addToUserStorage(field.cropProps.cropType, crops[field.cropProps.cropType].defaultYield, "Crop"));
    
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

export default HarvestWindow;