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

import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import FieldMenuButton from '../FieldMenuButton/FieldMenuButton';
import BackgroundCloser from '../BackgroundCloser/BackgroundCloser';
import logo from '../../images/logo.png';
import LargeButton from '../LargeButton/LargeButton';
import { root, portal } from '../../config/StylesConfig';
import { _Field } from '../../redux/reducers/fieldReducer';

interface FieldMenuProps {
  closeFieldMenu: () => void;
  fieldData: _Field;
}

const FieldMenu: React.FC<FieldMenuProps> = ({ closeFieldMenu, fieldData }) => {
  const getFieldMenuName = (): string => {
    if (fieldData.field.isFieldBought) {
      if (fieldData.field.cropProps.cropType)
        return fieldData.field.cropProps.cropType;
      if (fieldData.field.cropProps.buildingType)
        return fieldData.field.cropProps.buildingType;
      else
        return "Empty";
    }
    else
      return "Not owned"
  }

  const selectButtons = (): JSX.Element[] => {
    if (fieldData.field.isFieldBought) {
      if (fieldData.field.cropProps.cropType) {
        if (fieldData.field.cropProps.isReadyToHarvest) {
          return [
            <FieldMenuButton fieldId={ fieldData.field.fieldId } size="full" textContent="Harvest" primary />,
            <FieldMenuButton fieldId={ fieldData.field.fieldId } size="half" textContent={ fieldData.field.cropProps.isWatered ? "Watered" : "Water" } watered={ fieldData.field.cropProps.isWatered ? true : false } primary={ !fieldData.field.cropProps.isWatered ? true : false } />,
            <FieldMenuButton fieldId={ fieldData.field.fieldId } size="half" textContent={ fieldData.field.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ fieldData.field.cropProps.isFertilized ? true : false } primary={ !fieldData.field.cropProps.isFertilized ? true : false } />
          ];
        }

        else {
          return [
            <FieldMenuButton fieldId={ fieldData.field.fieldId } size="full" buttonFor="Time" textContent="14:20" />,
            <FieldMenuButton fieldId={ fieldData.field.fieldId } size="half" textContent={ fieldData.field.cropProps.isWatered ? "Watered" : "Water" } watered={ fieldData.field.cropProps.isWatered ? true : false } primary={ !fieldData.field.cropProps.isWatered ? true : false } />,
            <FieldMenuButton fieldId={ fieldData.field.fieldId } size="half" textContent={ fieldData.field.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ fieldData.field.cropProps.isFertilized ? true : false } primary={ !fieldData.field.cropProps.isFertilized ? true : false } />
          ];
        }
      }

      if (fieldData.field.cropProps.buildingType) {
        return [
          <FieldMenuButton fieldId={ fieldData.field.fieldId } size="half" textContent="Upgrade" primary />,
          <FieldMenuButton fieldId={ fieldData.field.fieldId } size="half" textContent="Destroy" />,
          <FieldMenuButton fieldId={ fieldData.field.fieldId } size="full" buttonFor="Barn" textContent="100" />
        ];
      }

      else {
        return [
          <FieldMenuButton fieldId={ fieldData.field.fieldId } size="half" textContent="Plant" primary />,
          <FieldMenuButton fieldId={ fieldData.field.fieldId } size="half" textContent="Build" primary />,
          <FieldMenuButton fieldId={ fieldData.field.fieldId } size="full" textContent="Sell this field" />
        ];
      }
    }

    else {
      return [ <FieldMenuButton fieldId={ fieldData.field.fieldId } size="full" textContent="Buy this field" primary /> ];
    }
  }

  // DISABLES BUTTONS AFTER MOUNTING FIELD MENU
  useEffect(() => {
    const rootElementButtons: NodeListOf<HTMLButtonElement> = root.querySelectorAll("button");
    rootElementButtons.forEach(( button: HTMLButtonElement ) => button.disabled = true );

    return () => {
      rootElementButtons.forEach(( button: HTMLButtonElement ) => button.disabled = false );
    };
    
  }, []);

  return ReactDOM.createPortal (
    <>
    <BackgroundCloser onClick={ closeFieldMenu } />
    <Wrapper>

      <TopSection>
        <HeadingContainer>
          <CropImageContainer>
            <CropImage src={ logo } />
          </CropImageContainer>
          <Name>{ getFieldMenuName() }</Name>
          <FieldNumber>{ `Field #${ fieldData.field.fieldId + 1 }` }</FieldNumber>
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
    </>,
    portal
  )
}

export default FieldMenu;