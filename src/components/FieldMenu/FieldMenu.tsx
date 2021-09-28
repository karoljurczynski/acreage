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

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FieldMenuButton from '../FieldMenuButton/FieldMenuButton';
import BackgroundCloser from '../BackgroundCloser/BackgroundCloser';
import logo from '../../images/logo.png';
import LargeButton from '../LargeButton/LargeButton';
import { root, portal } from '../../config/StylesConfig';
import { StateInterface } from '../../redux/reduxStore';
import { useSelector } from 'react-redux';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import FieldProperties from '../FieldProperties/FieldProperties';
import FieldPlantWindow from '../FieldPlantWindow/FieldPlantWindow';
import FieldBuildWindow from '../FieldBuildWindow/FieldBuildWindow';

interface FieldMenuPropsInterface {
  fieldId: number;
  closeFieldMenu: () => void;
}

const FieldMenu: React.FC<FieldMenuPropsInterface> = ({ fieldId, closeFieldMenu }): JSX.Element => {
  const state: StateInterface = useSelector(state => state) as StateInterface;
  const field: FieldInterface = state.fields[fieldId];
  const [isPropertiesWindowOpened, setIsPropertiesWindowOpened] = useState(false);
  const [isPlantWindowOpened, setIsPlantWindowOpened] = useState(false);
  const [isBuildWindowOpened, setIsBuildWindowOpened] = useState(false);

  const setFieldName = (): string => {
    if (field.data.fieldProps.isFieldBought) {
      if (field.data.cropProps.cropType)
        return field.data.cropProps.cropType as string;
      if (field.data.cropProps.buildingType)
        return field.data.cropProps.buildingType as string;
      else
        return "Empty";
    }
    else
      return `${field.data.fieldProps.fieldPrice} $`;
  }

  const selectButtons = (): JSX.Element[] => {
    if (field.data.fieldProps.isFieldBought) {
      if (field.data.cropProps.cropType) {
        if (field.data.cropProps.isReadyToHarvest) {
          return [
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" textContent="Harvest" primary />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.data.cropProps.isWatered ? "Watered" : "Water" } watered={ field.data.cropProps.isWatered ? true : false } primary={ !field.data.cropProps.isWatered ? true : false } />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.data.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ field.data.cropProps.isFertilized ? true : false } primary={ !field.data.cropProps.isFertilized ? true : false } />
          ];
        }

        else {
          return [
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" buttonFor="Time" textContent="14:20" />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.data.cropProps.isWatered ? "Watered" : "Water" } watered={ field.data.cropProps.isWatered ? true : false } primary={ !field.data.cropProps.isWatered ? true : false } />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent={ field.data.cropProps.isFertilized ? "Fertilized" : "Fertilize" } fertilized={ field.data.cropProps.isFertilized ? true : false } primary={ !field.data.cropProps.isFertilized ? true : false } />
          ];
        }
      }

      if (field.data.cropProps.buildingType) {
        return [
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Upgrade" primary />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Destroy" />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" buttonFor="Barn" textContent="100" />
        ];
      }

      else {
        return [
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Plant" primary />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="half" textContent="Build" primary />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" textContent="Sell this field" />
        ];
      }
    }

    else {
      return [ <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow }  size="full" textContent="Buy this field" primary /> ];
    }
  }

  const handleFieldPropsWindow = () => {
    setIsPropertiesWindowOpened(!isPropertiesWindowOpened);
  }
  const handlePlantWindow = () => {
    setIsPlantWindowOpened(!isPlantWindowOpened);
  }
  const handleBuildWindow = () => {
    setIsBuildWindowOpened(!isBuildWindowOpened);
  }

  // DISABLES BUTTONS AFTER MOUNTING FIELD MENU
  useEffect(() => {
    const rootElementButtons: NodeListOf<HTMLButtonElement> = root.querySelectorAll("button");
    rootElementButtons.forEach(( button: HTMLButtonElement ) => button.disabled = true );
    
    return () => {
      rootElementButtons.forEach(( button: HTMLButtonElement ) => button.disabled = false );
    };
    
  }, []);

  const getIcon = () => {
    if (setFieldName() === "Empty" || Number(setFieldName()[0]))
      return logo;
    else
      return logo;
  }

  return ReactDOM.createPortal (
    <>
    { isPropertiesWindowOpened &&
      <FieldProperties 
        fieldId={ fieldId } 
        handleFieldPropsWindow={ handleFieldPropsWindow }
      />
    }
    { isPlantWindowOpened &&
      <FieldPlantWindow 
        fieldId={ fieldId }
        handlePlantWindow={ handlePlantWindow }
      />
    }
    { isBuildWindowOpened &&
      <FieldBuildWindow
        fieldId={ fieldId }
        handleBuildWindow={ handleBuildWindow }
      />
    }
    <BackgroundCloser onClick={ closeFieldMenu } />
    <Wrapper hide={ (isPropertiesWindowOpened || isPlantWindowOpened || isBuildWindowOpened) ? true : false}>

      <TopSection>
        <HeadingContainer>
          <CropImageContainer>
            <CropImage src={ getIcon() } />
          </CropImageContainer>
          <Name>{ field.data.fieldProps.isFieldBought }</Name>
          <FieldNumber>{ `Field #${ field.data.fieldId + 1 }` }</FieldNumber>
        </HeadingContainer>
        <Main>
          { selectButtons() }
        </Main>
      </TopSection>

      <BottomSection>
        <LargeButton onClick={ handleFieldPropsWindow } secondary>Field properties</LargeButton>
        <LargeButton onClick={ closeFieldMenu } primary>Close</LargeButton>
      </BottomSection>

    </Wrapper>
    </>,
    portal
  )
}

export default FieldMenu;