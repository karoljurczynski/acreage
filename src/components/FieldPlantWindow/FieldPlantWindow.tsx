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
  SelectListItem,
  SelectListItemWrapper,
  SelectListItemText,
  SelectListItemImage

} from '../FieldMenu/FieldMenuStyles';

import storagedSeeds from '../../images/stats/storaged_seeds.png';
import storagedCrops from '../../images/stats/storaged_crops.png';
import ground from '../../images/stats/ground.png';
import hydration from '../../images/stats/hydration.png';
import time from '../../images/stats/time.png';
import filledStar from '../../images/stats/filled_star.png';

import FieldMenuButton from '../FieldMenuButton/FieldMenuButton';
import React, { useState, useEffect } from 'react';
import LargeButton from '../LargeButton/LargeButton';
import { crops, cropsArray } from '../../config/crops';
import { FieldInterface}  from '../../redux/reducers/fieldReducer';
import { Seed } from '../../config/seeds';
import { seeds } from '../../config/seeds';
import { StorageItem } from '../../redux/reducers/storageReducer';
import plant from '../../images/icons/plant.png';
import { store } from '../../redux/reduxStore';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { setBuildingType, setCropType } from '../../redux/actions/fieldActions';


interface _FieldPlantWindow {
  fieldId: number;
  handlePlantWindow: () => void;
}

const FieldPlantWindow: React.FC<_FieldPlantWindow> = ({ fieldId, handlePlantWindow }) => {
  const state = useSelector(state => state) as StateInterface;
  const field: FieldInterface = state.fields[fieldId];
  const storage: StorageItem[] = state.storage;
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState<HTMLLIElement>();
  const [seedsInStorage, setSeedsInStorage] = useState<StorageItem[]>([]);
  
  useEffect(() => {
    if (selectedItem) selectedItem.style.backgroundColor = "red";
    return () => { if (selectedItem) selectedItem.style.backgroundColor = "white" }

  }, [ selectedItem ]);

  useEffect(() => {
    const filterForSeeds = (item: StorageItem) => {
      if (item.type === "Seed" && item.amount)
        return item;
    }
    setSeedsInStorage(storage.filter(filterForSeeds));
  }, []);

  
  const handleItemSelect: React.MouseEventHandler = (e: React.MouseEvent) => {
    setSelectedItem(e.target as HTMLLIElement);
  }

  const handlePlantSelectedSeed = () => {
    cropsArray.forEach(crop => {
      if (selectedItem) {
        if (crop.cropName === selectedItem.children[0].textContent) {
          dispatch(setBuildingType(fieldId, ""));
          dispatch(setCropType(fieldId, crop.cropName));
        }
      }
    });
    handlePlantWindow();
  }
  return (
    <>
    <Wrapper fieldProperties={ true } width={ 480 }>

    <TopSection>
      <HeadingContainer>
        <CropImageContainer>
          <CropImage src={ plant } />
        </CropImageContainer>
        <Name>Select a seed</Name>
        <FieldNumber>{ `Field #${ field.fieldId + 1 } ` }</FieldNumber>
      </HeadingContainer>
      <Main fullSize>
        <SelectListContainer>
          <SelectListItem heading>
            <SelectListItemWrapper>
              <SelectListItemText>Crop name</SelectListItemText>
            </SelectListItemWrapper>
            <SelectListItemWrapper>
              <SelectListItemText><SelectListItemImage src={ storagedSeeds } title="Seeds in storage" /></SelectListItemText>
              <SelectListItemText><SelectListItemImage src={ storagedCrops } title="Crops in storage" /></SelectListItemText>
            </SelectListItemWrapper>
            <SelectListItemWrapper>
              <SelectListItemText><SelectListItemImage src={ ground } title="Required ground rate" /></SelectListItemText>
              <SelectListItemText><SelectListItemImage src={ hydration } title="Required water rate" /></SelectListItemText>
            </SelectListItemWrapper>
            <SelectListItemWrapper>
              <SelectListItemText><SelectListItemImage src={ time } title="Growing time" /></SelectListItemText>
            </SelectListItemWrapper>
          </SelectListItem>
        </SelectListContainer>
        <SelectListContainer>
          { seedsInStorage.map((seed, index) => {
            return (
              <SelectListItem onClick={ handleItemSelect } key={ index }>
                <SelectListItemWrapper>
                  <SelectListItemText>{ seed.name }</SelectListItemText>
                </SelectListItemWrapper>
                <SelectListItemWrapper>
                  <SelectListItemText>{ seed.amount }</SelectListItemText>
                  <SelectListItemText>{ seed.amount }</SelectListItemText>
                </SelectListItemWrapper>
                <SelectListItemWrapper>
                  <SelectListItemText>{ crops[seed.name].groundRateNeeded }<SelectListItemImage src={ filledStar }/></SelectListItemText>
                  <SelectListItemText>{ crops[seed.name].waterRateNeeded }<SelectListItemImage src={ filledStar }/></SelectListItemText>
                </SelectListItemWrapper>
                  <SelectListItemWrapper>
                  <SelectListItemText>{ crops[seed.name].timeToGrowInSeconds }</SelectListItemText>
                </SelectListItemWrapper>   
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