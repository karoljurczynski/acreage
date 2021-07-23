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
} from './FieldMenuStyles';

import FieldMenuButton from '../FieldMenuButton/FieldMenuButton';
import { FieldsPattern } from '../../config/fields';
import logo from '../../images/logo.png';
import LargeButton from '../LargeButton/LargeButton';

interface FieldMenuProps {
  closeFieldMenu: () => void;
  fieldData: FieldsPattern;
}

const FieldMenu: React.FC<FieldMenuProps> = ({ closeFieldMenu, fieldData }) => {

  const getFieldMenuName = (): string => {
    if (fieldData.isFieldBought) {
      if (fieldData.cropProps.cropType && fieldData.cropProps.cropType !== "Building" )
        return fieldData.cropProps.cropType;
      if (fieldData.cropProps.cropType && fieldData.cropProps.cropType === "Building" )
        return fieldData.cropProps.buildingType as string;
      else
        return "Empty";
    }
    else
      return "Not owned"
  }

  const selectButtons = (): JSX.Element[] | undefined => {

    if (fieldData.isFieldBought) {
      if (fieldData.cropProps.cropType && fieldData.cropProps.cropType !== "Building") {
        if (fieldData.cropProps.isReadyToHarvest) {
          return [
            <FieldMenuButton size="full" textContent="Harvest" margin="0 0 12px 0" primary />,
            <FieldMenuButton size="half" textContent={ fieldData.cropProps.isWatered ? "Watered" : "Water" } watered={ fieldData.cropProps.isWatered ? true : false } primary={ !fieldData.cropProps.isWatered ? true : false } margin="0 12px 0 0"  />,
            <FieldMenuButton size="half" textContent={ fieldData.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ fieldData.cropProps.isFertilized ? true : false } primary={ !fieldData.cropProps.isFertilized ? true : false } />
          ];

        }
        else {
          return [
            <FieldMenuButton size="full" buttonFor="Time" textContent="14:20" margin="0 0 12px 0" />,
            <FieldMenuButton size="half" textContent={ fieldData.cropProps.isWatered ? "Watered" : "Water" } watered={ fieldData.cropProps.isWatered ? true : false } primary={ !fieldData.cropProps.isWatered ? true : false } margin="0 12px 0 0" />,
            <FieldMenuButton size="half" textContent={ fieldData.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ fieldData.cropProps.isFertilized ? true : false } primary={ !fieldData.cropProps.isFertilized ? true : false } />
          ];
        }
      }

      if (fieldData.cropProps.cropType && fieldData.cropProps.cropType === "Building") {
        return [
          <FieldMenuButton size="half" textContent="Upgrade" margin="0 12px 12px 0" primary />,
          <FieldMenuButton size="half" textContent="Destroy" margin="0 0 12px 0" />,
          <FieldMenuButton size="full" buttonFor="Barn" textContent="100" />
        ];
      }

      else {
        return [
          <FieldMenuButton size="half" textContent="Plant" margin="0 12px 12px 0" primary />,
          <FieldMenuButton size="half" textContent="Build" margin="0 0 12px 0" primary />,
          <FieldMenuButton size="full" textContent="Sell this field" />
        ];
      }
    }

    else {
      return [ <FieldMenuButton size="full" textContent="Buy this field" primary /> ];
    }
  }

  return (
    <Wrapper>

      <TopSection>
        <HeadingContainer>
          <CropImageContainer>
            <CropImage src={ logo } />
          </CropImageContainer>
          <Name>{ getFieldMenuName() }</Name>
          <FieldNumber>{ `Field #${ fieldData.fieldId + 1 }` }</FieldNumber>
        </HeadingContainer>
        <Main>
          { selectButtons() }
        </Main>
      </TopSection>

      <BottomSection>
        <LargeButton onClick={ closeFieldMenu } secondary>Field properties</LargeButton>
        <LargeButton onClick={ closeFieldMenu } primary>Close</LargeButton>
      </BottomSection>

    </Wrapper>
  )
}

export default FieldMenu;