// IMPORT


import { SetStateAction, useEffect, useState } from 'react';
import LargeButton from '../LargeButton/LargeButton';

import { Wrapper, TopSection, HeadingContainer, CropImageContainer, CropImage, Name, FieldNumber, Main, BottomSection, SelectListContainer, SelectListItem, SelectListItemWrapper, SelectListItemText, SelectListItemImage } from '../FieldMenu/FieldMenuStyles';
import { PlantWindowPropsInterface } from '../interfaces';
import crops from '../../config/crops';

import plant from '../../images/icons/plant.png';
import storagedSeeds from '../../images/stats/storaged_seeds.png';
import storagedCrops from '../../images/stats/storaged_crops.png';
import ground from '../../images/stats/ground.png';
import hydration from '../../images/stats/hydration.png';
import time from '../../images/stats/time.png';
import filledStar from '../../images/stats/filled_star.png';

import { useSelector, useDispatch } from 'react-redux';
import { setCropIcon, setCropType, setFieldName } from '../../redux/actions/fieldActions';
import { removeFromUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { StorageItem } from '../../redux/reducers/storageReducer';
import WarningWindow from './WarningWindow';


// COMPONENT


const PlantWindow: React.FC<PlantWindowPropsInterface> = ({ fieldId, closeWindow }) => {
  

  // TOOL FUNCTIONS


  const filterForSeeds = (item: StorageItem) => {
    if (item.type === "Seed" && item.amount)
      return item;
  }
  
  
  // STATE

  
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const storage: StorageItem[] = state.storage.filter(filterForSeeds);
  const setState = useDispatch();

  const [selectedItem, setSelectedItem]: [HTMLLIElement, React.Dispatch<SetStateAction<HTMLLIElement>>] = useState<HTMLLIElement>(document.createElement("li"));
  const [isWarningActive, setIsWarningActive]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);


  // EFFECTS

  // Changing color of selected item
  useEffect(() => {
    if (selectedItem) selectedItem.style.backgroundColor = "red";
    return () => { if (selectedItem) selectedItem.style.backgroundColor = "white" }
  }, [ selectedItem ]);

  useEffect(() => {
    if (storage.length === 0) setIsWarningActive(true);
  }, [ storage ])


  // HANDLERS


  const handleItemSelect: React.MouseEventHandler = (e: React.MouseEvent) => {
    setSelectedItem(e.target as HTMLLIElement);
  }
  const handlePlantSelectedSeed = () => {
    if (selectedItem.textContent) {
      let cropName = selectedItem?.children[0].textContent as string;
      setState(setCropType(fieldId, cropName));
      setState(setFieldName(fieldId, cropName));
      setState(setCropIcon(fieldId, crops[cropName].cropIcon));
      setState(removeFromUserStorage(cropName, 1, "Seed"));
    }
    closeWindow();
  }


  // JSX


  return (
    <>
    { isWarningActive 
      ? <WarningWindow 
          fieldId={fieldId} 
          warningText="No seeds in storage!" 
          warningTip="You can buy more seeds in the Shop." 
          closeWindow={ closeWindow } 
          shortcutButton={{
            shortcutDestination: "home",
            shortcutTitle: "Visit Shop"
          }}
        />
      : <Wrapper fieldProperties={ true } width={ 480 } hide={isWarningActive}>

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
              { storage.map((seed, index) => {
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
          <LargeButton onClick={ closeWindow } secondary>Close</LargeButton>
          <LargeButton onClick={ handlePlantSelectedSeed } primary disabled={ !selectedItem.textContent ? true : false }>Plant</LargeButton>
        </BottomSection>

      </Wrapper>
    }
    </>
  )
}


// EXPORT


export default PlantWindow;