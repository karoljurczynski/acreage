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
import { FieldsPattern } from '../../config/fields';
import logo from '../../images/logo.png';
import LargeButton from '../LargeButton/LargeButton';
import { root, portal } from '../../config/StylesConfig';

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

  const selectButtons = (): JSX.Element[] => {
    if (fieldData.isFieldBought) {
      if (fieldData.cropProps.cropType && fieldData.cropProps.cropType !== "Building") {
        if (fieldData.cropProps.isReadyToHarvest) {
          return [
            <FieldMenuButton size="full" textContent="Harvest" primary />,
            <FieldMenuButton size="half" textContent={ fieldData.cropProps.isWatered ? "Watered" : "Water" } watered={ fieldData.cropProps.isWatered ? true : false } primary={ !fieldData.cropProps.isWatered ? true : false } />,
            <FieldMenuButton size="half" textContent={ fieldData.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ fieldData.cropProps.isFertilized ? true : false } primary={ !fieldData.cropProps.isFertilized ? true : false } />
          ];
        }

        else {
          return [
            <FieldMenuButton size="full" buttonFor="Time" textContent="14:20" />,
            <FieldMenuButton size="half" textContent={ fieldData.cropProps.isWatered ? "Watered" : "Water" } watered={ fieldData.cropProps.isWatered ? true : false } primary={ !fieldData.cropProps.isWatered ? true : false } />,
            <FieldMenuButton size="half" textContent={ fieldData.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ fieldData.cropProps.isFertilized ? true : false } primary={ !fieldData.cropProps.isFertilized ? true : false } />
          ];
        }
      }

      if (fieldData.cropProps.cropType && fieldData.cropProps.cropType === "Building") {
        return [
          <FieldMenuButton size="half" textContent="Upgrade" primary />,
          <FieldMenuButton size="half" textContent="Destroy" />,
          <FieldMenuButton size="full" buttonFor="Barn" textContent="100" />
        ];
      }

      else {
        return [
          <FieldMenuButton size="half" textContent="Plant" primary />,
          <FieldMenuButton size="half" textContent="Build" primary />,
          <FieldMenuButton size="full" textContent="Sell this field" />
        ];
      }
    }

    else {
      return [ <FieldMenuButton size="full" textContent="Buy this field" primary /> ];
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
    </>,
    portal
  )
}

export default FieldMenu;