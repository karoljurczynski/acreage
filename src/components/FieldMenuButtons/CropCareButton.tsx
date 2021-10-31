// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';

import { CropCareButtonProps } from '../interfaces';
import water from '../../images/parts/water.png';
import fertilizer from '../../images/parts/fertilizer.png';

import { useDispatch, useSelector } from 'react-redux';
import { setIsCropFertilized, setIsCropReadyToHarvest, setIsCropWatered } from '../../redux/actions/fieldActions';
import { removeFromUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { StorageItem } from '../../redux/reducers/storageReducer';


// COMPONENT


const CropCareButton: React.FC<CropCareButtonProps> = ({ fieldId, careType }) => {


  // STATE


  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const storage: StorageItem[] = state.storage;
  const setState = useDispatch();


  // TOOL FUNCTIONS


  const getIcon = (): string => {
    switch (careType) {
      case "water": return water;
      case "fertilizer": return fertilizer;
    }
  }
  const getText = (): string => {
    switch (careType) {
      case "water": {
        if (field.cropProps.isWatered)
          return "Watered";
        else
          return "Water";
      }
      case "fertilizer": {
        if (field.cropProps.isFertilized)
          return "Fertilized";
        else
          return "Fertilize";
      }
    }
  }
  const filterForParts = (item: StorageItem): StorageItem | undefined => {
    if (item.type === "Part" && item.amount)
      return item;
  }
  const checkStorageForCareItems = (): boolean => {
    const storagedParts: StorageItem[] = storage.filter(filterForParts);
    let isCareItemInStorage: boolean = false;
    if (storagedParts.length > 0) {
      storagedParts.forEach(part => {
        if (careType === "water" && part.name === "Water") {
          isCareItemInStorage = true;
        }
        if (careType === "fertilizer" && part.name === "Fertilizer") {
          isCareItemInStorage = true;
        }
      });
    }
    return isCareItemInStorage;
  }
  const lockButton = (): boolean => {
    if (checkStorageForCareItems()) {
      if ((careType === "water" && field.cropProps.isWatered))
        return true;
      if ((careType === "fertilizer" && field.cropProps.isFertilized))
        return true;
      else
        return false;
    }
    else {
      return true;
    }
  }


  // HANDLERS


  const handleCropCareButton = (): void => {
    switch (careType) {
      case "water": return waterCrop();
      case "fertilizer": return fertilizeCrop();
    }
  }
  const waterCrop = (): void => {
    setState(setIsCropWatered(fieldId, true));
    setState(setIsCropReadyToHarvest(fieldId, true));
    setState(removeFromUserStorage("Water", 1, "Part"));
  }
  const fertilizeCrop = (): void => {
    setState(setIsCropFertilized(fieldId, true));
    setState(removeFromUserStorage("Fertilizer", 1, "Part"));
  }


  // JSX


  return (
    <Button
      isLarge={ false }
      disabled={ field.cropProps.isReadyToHarvest ? true : lockButton() }
      onClick={ handleCropCareButton }>
      <ButtonIcon src={ getIcon() }></ButtonIcon>
      <ButtonText primary>{ getText() }</ButtonText>
    </Button>
  )
}


// EXPORT


export default CropCareButton;