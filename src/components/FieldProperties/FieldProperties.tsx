import { 
  Wrapper, 
  TopSection, 
  HeadingContainer, 
  CropImageContainer, 
  CropImage, 
  Name, 
  FieldNumber,
  Main,
  BottomSection 
} from '../FieldMenu/FieldMenuStyles';

import FieldMenuButton from '../FieldMenuButton/FieldMenuButton';
import logo from '../../images/logo.png';
import LargeButton from '../LargeButton/LargeButton';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';

interface _FieldProperties {
  fieldId: number;
  handleFieldPropsWindow: () => void;
}

const FieldProperties: React.FC<_FieldProperties> = ({ fieldId, handleFieldPropsWindow }) => {
  const state = useSelector(state => state) as StateInterface;
  const field: FieldInterface = state.fields[fieldId];
  
  return (
    <>
    <Wrapper fieldProperties={ true }>

    <TopSection>
      <HeadingContainer>
        <CropImageContainer>
          <CropImage src={ logo } />
        </CropImageContainer>
        <Name>{ `Field #${ field.data.fieldId + 1 }` }</Name>
        <FieldNumber>Properties</FieldNumber>
      </HeadingContainer>
      <Main>
        <FieldMenuButton handleBuildWindow={ () => {} } handlePlantWindow={ () => {} }  updateUserProps={ () => {} } fieldId={ fieldId } size="full" buttonFor="GroundRate" textContent={ `${field.data.fieldProps.groundRate} \\ 5`} />
        <FieldMenuButton handleBuildWindow={ () => {} } handlePlantWindow={ () => {} }  updateUserProps={ () => {} } fieldId={ fieldId } size="full" buttonFor="WaterRate" textContent={ `${field.data.fieldProps.waterRate} \\ 5`} />
        <FieldMenuButton handleBuildWindow={ () => {} } handlePlantWindow={ () => {} }  updateUserProps={ () => {} } fieldId={ fieldId } size="full" buttonFor="FieldPrice" textContent={ `${field.data.fieldProps.fieldPrice} $` } />
      </Main>
    </TopSection> 

    <BottomSection>
      <LargeButton onClick={ handleFieldPropsWindow } primary>Close</LargeButton>
    </BottomSection>

    </Wrapper>
    </>
  )
}

export default FieldProperties;