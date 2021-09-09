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
import React, { useState, useEffect } from 'react';
import LargeButton from '../LargeButton/LargeButton';
import { crops } from '../../config/crops';
import { _Field } from '../../redux/reducers/fieldReducer';
import { StorageItem } from '../../redux/reducers/userReducer';
import plant from '../../images/icons/plant.png';
import { store } from '../../redux/reduxStore';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reduxStore';
import { setBuildingType, setCropType } from '../../redux/actions/fieldActions';


interface _FieldPlantWindow {
  fieldId: number;
  updateFieldProps: () => void;
  handlePlantWindow: () => void;
}

const FieldPlantWindow: React.FC<_FieldPlantWindow> = ({ fieldId, updateFieldProps, handlePlantWindow }) => {
  const state = useSelector(state => state) as State;
  const fields: _Field[] = state.fields;
  const storage: StorageItem[] = state.storage;
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState<HTMLLIElement>();
  
  useEffect(() => {
    if (selectedItem) selectedItem.style.backgroundColor = "red";
    return () => { if (selectedItem) selectedItem.style.backgroundColor = "white" }

  }, [ selectedItem ]);
  
  const handleItemSelect: React.MouseEventHandler = (e: React.MouseEvent) => {
    setSelectedItem(e.target as HTMLLIElement);
  }

  const handlePlantSelectedSeed = () => {
    crops.forEach(crop => {
      if (selectedItem) {
        if (crop.cropName === selectedItem.children[0].textContent) {
          dispatch(setBuildingType(fieldId, ""));
          dispatch(setCropType(fieldId, crop.cropName));
          updateFieldProps();
        }
      }
    });
    handlePlantWindow();
  }
  return (
    <>
    <Wrapper fieldProperties={ true } width={ 400 }>

    <TopSection>
      <HeadingContainer>
        <CropImageContainer>
          <CropImage src={ plant } />
        </CropImageContainer>
        <Name>Select a seed</Name>
        <FieldNumber>{ `Field #${ fields[fieldId].field.fieldId + 1 } ` }</FieldNumber>
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
          { crops.map((crop, index) => {
            return (
              <SelectListItem onClick={ handleItemSelect } key={ index }>
                <p>{ crop.cropName }</p>
                <p>{ crop.timeToGrowInSeconds }</p>
              </SelectListItem>
            )
          }) }
        </SelectListContainer>
      </Main>
    </TopSection> 

    <BottomSection>
      <LargeButton onClick={ handlePlantWindow } secondary>Close</LargeButton>
      <LargeButton onClick={ handlePlantSelectedSeed } primary disabled={ !selectedItem ? true : false }>Plant</LargeButton>
    </BottomSection>

    </Wrapper>
    </>
  )
}

export default FieldPlantWindow;