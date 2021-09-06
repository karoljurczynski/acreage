import { 
  Wrapper, 
  TopSection, 
  HeadingContainer, 
  CropImageContainer, 
  CropImage, 
  Name, 
  FieldNumber,
  Main,
  BottomSection,
  SelectListContainer,
  SelectListItem
} from '../FieldMenu/FieldMenuStyles';

import FieldMenuButton from '../FieldMenuButton/FieldMenuButton';
import logo from '../../images/logo.png';
import LargeButton from '../LargeButton/LargeButton';
import { crops } from '../../config/crops';
import { _Field } from '../../redux/reducers/fieldReducer';

interface _FieldPlantWindow {
  fieldId: number;
  fields: _Field[];
  handlePlantWindow: () => void;
}

const FieldPlantWindow: React.FC<_FieldPlantWindow> = ({ fieldId, fields, handlePlantWindow }) => {
  const handleItemSelect = () => {
    console.log("fdf");

  }
  return (
    <>
    <Wrapper fieldProperties={ true } width={ 400 }>

    <TopSection>
      <HeadingContainer>
        <CropImageContainer>
          <CropImage src={ logo } />
        </CropImageContainer>
        <Name>Select a crop</Name>
        <FieldNumber>{ `Field #${ fields[fieldId].field.fieldId + 1 }` }</FieldNumber>
      </HeadingContainer>
      <Main fullSize>
        <SelectListContainer>
          <SelectListItem heading>
            <p>Crop</p>
            <p>Storaged<br/>seeds</p>
            <p>Storaged<br/>crops</p>
            <p>Growing time</p>
          </SelectListItem>
        </SelectListContainer>
        <SelectListContainer>
          { crops.map(crop => {
            return (
              <SelectListItem>
                <p>{ crop.cropName }</p>
                <p>{ crop.timeToGrowInSeconds }</p>
              </SelectListItem>
            )
          }) }
        </SelectListContainer>
      </Main>
    </TopSection> 

    <BottomSection>
      <LargeButton onClick={ handlePlantWindow } primary>Close</LargeButton>
    </BottomSection>

    </Wrapper>
    </>
  )
}

export default FieldPlantWindow;