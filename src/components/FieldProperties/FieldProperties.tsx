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
import { _Field } from '../../redux/reducers/fieldReducer';

interface _FieldProperties {
  fieldId: number;
  fields: _Field[];
  handleFieldPropsWindow: () => void;
}

const FieldProperties: React.FC<_FieldProperties> = ({ fieldId, fields, handleFieldPropsWindow }) => {
  return (
    <>
    <Wrapper fieldProperties={ true }>

    <TopSection>
      <HeadingContainer>
        <CropImageContainer>
          <CropImage src={ logo } />
        </CropImageContainer>
        <Name>{ `Field #${ fields[fieldId].field.fieldId + 1 }` }</Name>
        <FieldNumber>Properties</FieldNumber>
      </HeadingContainer>
      <Main>
      <FieldMenuButton updateFieldProps={ () => {} } fieldId={ fieldId } size="full" buttonFor="GroundRate" textContent={ `${fields[fieldId].field.fieldProps.groundRate} \\ 5`} />
      <FieldMenuButton updateFieldProps={ () => {} } fieldId={ fieldId } size="full" buttonFor="WaterRate" textContent={ `${fields[fieldId].field.fieldProps.waterRate} \\ 5`} />
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