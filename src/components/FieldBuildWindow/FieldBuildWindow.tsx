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

interface _FieldBuildWindow {
  fieldId: number;
  fields: _Field[];
  handleBuildWindow: () => void;
}

const FieldBuildWindow: React.FC<_FieldBuildWindow> = ({ fieldId, fields, handleBuildWindow }) => {
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
        <FieldMenuButton handleBuildWindow={ () => {} } handlePlantWindow={ () => {} } updateFieldProps={ () => {} } updateUserProps={ () => {} } fieldId={ fieldId } size="full" buttonFor="GroundRate" textContent={ `${fields[fieldId].field.fieldProps.groundRate} \\ 5`} />
        <FieldMenuButton handleBuildWindow={ () => {} } handlePlantWindow={ () => {} } updateFieldProps={ () => {} } updateUserProps={ () => {} } fieldId={ fieldId } size="full" buttonFor="WaterRate" textContent={ `${fields[fieldId].field.fieldProps.waterRate} \\ 5`} />
        <FieldMenuButton handleBuildWindow={ () => {} } handlePlantWindow={ () => {} } updateFieldProps={ () => {} } updateUserProps={ () => {} } fieldId={ fieldId } size="full" buttonFor="FieldPrice" textContent={ `${fields[fieldId].field.fieldProps.fieldPrice} $` } />
      </Main>
    </TopSection> 

    <BottomSection>
      <LargeButton onClick={ handleBuildWindow } primary>Close</LargeButton>
    </BottomSection>

    </Wrapper>
    </>
  )
}

export default FieldBuildWindow;