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
import { State } from '../../redux/reduxStore';
import { useSelector } from 'react-redux';
import { _Field } from '../../redux/reducers/fieldReducer';
import FieldProperties from '../FieldProperties/FieldProperties';
import FieldPlantWindow from '../FieldPlantWindow/FieldPlantWindow';
import FieldBuildWindow from '../FieldBuildWindow/FieldBuildWindow';

interface FieldMenuProps {
  fieldId: number;
  fieldName: string;
  fieldIcon: string;
  isWatered: boolean;
  isFertilized: boolean;
  closeFieldMenu: () => void;
  updateFieldProps: () => void;
  updateUserProps: () => void;
}

const FieldMenu: React.FC<FieldMenuProps> = ({ fieldId, fieldName, isWatered, isFertilized, closeFieldMenu, fieldIcon, updateFieldProps, updateUserProps }) => {
  const state: State = useSelector(state => state) as State;
  const fields: _Field[] = state.fields;
  const [isPropertiesWindowOpened, setIsPropertiesWindowOpened] = useState(false);
  const [isPlantWindowOpened, setIsPlantWindowOpened] = useState(false);
  const [isBuildWindowOpened, setIsBuildWindowOpened] = useState(false);

  const selectButtons = (): JSX.Element[] => {
    if (fields[fieldId].field.fieldProps.isFieldBought) {
      if (fields[fieldId].field.cropProps.cropType) {
        if (fields[fieldId].field.cropProps.isReadyToHarvest) {
          return [
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="full" textContent="Harvest" primary />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="half" textContent={ isWatered ? "Watered" : "Water" } watered={ isWatered ? true : false } primary={ !isWatered ? true : false } />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="half" textContent={ isFertilized ? "Fertilized" : "Fertilize" } fertilized={ isFertilized ? true : false } primary={ !isFertilized ? true : false } />
          ];
        }

        else {
          return [
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="full" buttonFor="Time" textContent="14:20" />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="half" textContent={ isWatered ? "Watered" : "Water" } watered={ isWatered ? true : false } primary={ !isWatered ? true : false } />,
            <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="half" textContent={ isFertilized ? "Fertilized" : "Fertilize" } fertilized={ isFertilized ? true : false } primary={ !isFertilized ? true : false } />
          ];
        }
      }

      if (fields[fieldId].field.cropProps.buildingType) {
        return [
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="half" textContent="Upgrade" primary />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="half" textContent="Destroy" />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="full" buttonFor="Barn" textContent="100" />
        ];
      }

      else {
        return [
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="half" textContent="Plant" primary />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="half" textContent="Build" primary />,
          <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="full" textContent="Sell this field" />
        ];
      }
    }

    else {
      return [ <FieldMenuButton fieldId={ fieldId } handlePlantWindow={ handlePlantWindow } handleBuildWindow ={ handleBuildWindow } updateUserProps={ updateUserProps } updateFieldProps={ updateFieldProps } size="full" textContent="Buy this field" primary /> ];
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
    if (fieldName === "Empty" || Number(fieldName[0]))
      return logo;
    else
      return fieldIcon;
  }

  return ReactDOM.createPortal (
    <>
    { isPropertiesWindowOpened &&
      <FieldProperties 
        fields={ fields }
        fieldId={ fieldId } 
        handleFieldPropsWindow={ handleFieldPropsWindow }
      />
    }
    { isPlantWindowOpened &&
      <FieldPlantWindow 
        fieldId={ fieldId }
        updateFieldProps={ updateFieldProps }  
        handlePlantWindow={ handlePlantWindow }
      />
    }
    { isBuildWindowOpened &&
      <FieldBuildWindow
        fieldId={ fieldId }
        updateFieldProps={ updateFieldProps }
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
          <Name>{ fieldName }</Name>
          <FieldNumber>{ `Field #${ fields[fieldId].field.fieldId + 1 }` }</FieldNumber>
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