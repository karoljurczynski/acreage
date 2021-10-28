// IMPORTS


import LargeButton from '../LargeButton/LargeButton';
import FieldMenuInfoBox from '../FieldMenuInfoBox/FieldMenuInfoBox';
import { Wrapper, TopSection, HeadingContainer, CropImageContainer, CropImage, Name, FieldNumber, Main, BottomSection } from '../FieldMenu/FieldMenuStyles';

import { FieldPropertiesInterface } from '../interfaces';

import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import logo from '../../images/logo.png';
import crops from '../../config/crops';
import buildings from '../../config/buildings';


// COMPONENT


const FieldProperties: React.FC<FieldPropertiesInterface> = ({ fieldId, closeWindow }) => {
  

  // STATE
  

  const field: FieldInterface = useSelector((state: StateInterface): FieldInterface => state.fields[fieldId]);
  

  // JSX

  
  return (
    <Wrapper fieldProperties={ true }>

      <TopSection>
        <HeadingContainer>
          <CropImageContainer>
          { (field.cropProps.cropType || field.buildingProps.buildingType)
            ? <CropImage src={ field.cropProps.cropType ? crops[field.cropProps.cropType].cropIcon : buildings[field.buildingProps.buildingType].buildingIcon } />
            : <CropImage src={ logo } />
          }
          </CropImageContainer>
          <Name>{ `Field #${ field.fieldId + 1 }` }</Name>
          <FieldNumber>Properties</FieldNumber>
        </HeadingContainer>
        <Main>
          <FieldMenuInfoBox rateInfoBox title="Ground rate" content={field.fieldProps.groundRate} />
          <FieldMenuInfoBox rateInfoBox title="Water rate" content={field.fieldProps.waterRate} />
          <FieldMenuInfoBox title="Value" content={`${field.fieldProps.fieldPrice} $`} />
        </Main>
      </TopSection> 

      <BottomSection>
        <LargeButton onClick={ closeWindow } primary>Close</LargeButton>
      </BottomSection>

    </Wrapper>
  )
}

export default FieldProperties;