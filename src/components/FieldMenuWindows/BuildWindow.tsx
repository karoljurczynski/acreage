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

//import FieldMenuButton from '../FieldMenuButton/FieldMenuButton';
import React, { useState, useEffect } from 'react';
import LargeButton from '../LargeButton/LargeButton';
import { buildings } from '../../config/buildings';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import build from '../../images/icons/build.png';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { setBuildingType, setCropType } from '../../redux/actions/fieldActions';


interface _FieldBuildWindow {
  fieldId: number;
  closeWindow: () => void;
}

const BuildWindow: React.FC<_FieldBuildWindow> = ({ fieldId, closeWindow }) => {
  const state = useSelector(state => state) as StateInterface;
  const field: FieldInterface = state.fields[fieldId];
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState<HTMLLIElement>();
  
  useEffect(() => {
    if (selectedItem) selectedItem.style.backgroundColor = "red";
    return () => { if (selectedItem) selectedItem.style.backgroundColor = "white" }

  }, [ selectedItem ]);
  
  const handleItemSelect: React.MouseEventHandler = (e: React.MouseEvent) => {
    setSelectedItem(e.target as HTMLLIElement);
  }

  const handleBuildSelectedBuilding = () => {
    buildings.forEach(building => {
      if (selectedItem) {
        if (building.buildingName === selectedItem.children[0].textContent) {
          dispatch(setCropType(fieldId, ""));
          dispatch(setBuildingType(fieldId, building.buildingName));
        }
      }
    });
    closeWindow();
  }
  return (
    <>
    <Wrapper fieldProperties={ true } width={ 400 }>

    <TopSection>
      <HeadingContainer>
        <CropImageContainer>
          <CropImage src={ build } />
        </CropImageContainer>
        <Name>Select a building</Name>
        <FieldNumber>{ `Field #${ field.fieldId + 1 } ` }</FieldNumber>
      </HeadingContainer>
      <Main fullSize>
        <SelectListContainer>
          <SelectListItem heading>
            <p>Building</p>
            <p>Storaged<br/>seeds</p>
            <p>Storaged<br/>crops</p>
            <p>Building time</p>
          </SelectListItem>
        </SelectListContainer>
        <SelectListContainer>
          { buildings.map((building, index) => {
            return (
              <SelectListItem onClick={ handleItemSelect } key={ index }>
                <p>{ building.buildingName }</p>
              </SelectListItem>
            )
          }) }
        </SelectListContainer>
      </Main>
    </TopSection> 

    <BottomSection>
      <LargeButton onClick={ closeWindow } secondary>Close</LargeButton>
      <LargeButton onClick={ handleBuildSelectedBuilding } primary disabled={ !selectedItem ? true : false }>Build</LargeButton>
    </BottomSection>

    </Wrapper>
    </>
  )
}

export default BuildWindow;