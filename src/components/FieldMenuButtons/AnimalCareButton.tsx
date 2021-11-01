// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';

import { AnimalCareButtonProps } from '../interfaces';
import feed from '../../images/icons/feed.png';
import clean from '../../images/icons/clean.png';

import { useDispatch, useSelector } from 'react-redux';
import { setIsAnimalCleaned, setIsAnimalFed, setIsAnimalReadyToCollect } from '../../redux/actions/fieldActions';
import { addToUserStorage, removeFromUserStorage } from '../../redux/actions/storageActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { StorageItem } from '../../redux/reducers/storageReducer';


// COMPONENT


const AnimalCareButton: React.FC<AnimalCareButtonProps> = ({ fieldId, careType }) => {


  // STATE


  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const storage: StorageItem[] = state.storage;
  const setState = useDispatch();


  // TOOL FUNCTIONS


  const getIcon = (): string => {
    switch (careType) {
      case "feed": return feed;
      case "clean": return clean;
    }
  }
  const getText = (): string => {
    switch (careType) {
      case "feed": {
        if (field.cropProps.isWatered)
          return "Fed";
        else
          return "Feed";
      }
      case "clean": {
        if (field.cropProps.isFertilized)
          return "Cleaned";
        else
          return "Clean";
      }
    }
  }
  const filterForFood = (item: StorageItem): StorageItem | undefined => {
    if (item.type === "Crop" && item.amount)
      if (item.name === "Wheat" && field.animalProps.animalType === "Chickens")
        return item;
      if (item.name === "Grass" && field.animalProps.animalType === "Cows")
        return item;
      if (item.name === "Potato" && field.animalProps.animalType === "Pigs")
        return item;
  }
  const checkStorageForFood = (): boolean => {
    const storagedFood: StorageItem[] = storage.filter(filterForFood);
    let isRightFoodInStorage: boolean = false;
    if (storagedFood.length > 0) {
      isRightFoodInStorage = true;
    }
    return isRightFoodInStorage;
  }
  const lockButton = (): boolean => {
    if (careType === "feed" && checkStorageForFood()) {
      if (field.animalProps.isFed)
        return true;
      else
        return false;
    }
    else if (careType === "clean") {
      if (field.animalProps.isCleaned)
        return true;
      else
        return false;
    }
    else {
      return true;
    }
  }


  // HANDLERS


  const handleAnimalCareButton = (): void => {
    switch (careType) {
      case "feed": return feedAnimal();
      case "clean": return cleanAnimal();
    }
  }
  const feedAnimal = (): void => {
    setState(setIsAnimalFed(fieldId, true));
    setState(setIsAnimalReadyToCollect(fieldId, true));
    if (field.animalProps.animalType === "Chickens")
      setState(removeFromUserStorage("Wheat", 1, "Crop"));
    if (field.animalProps.animalType === "Cows")
      setState(removeFromUserStorage("Grass", 1, "Crop"));
    if (field.animalProps.animalType === "Pigs")
      setState(removeFromUserStorage("Potato", 1, "Crop"));
  }
  const cleanAnimal = (): void => {
    setState(setIsAnimalCleaned(fieldId, true));
    setState(addToUserStorage("Fertilizer", 1, "Part"));
  }


  // JSX


  return (
    <Button
      isLarge={ false }
      disabled={ field.animalProps.isReadyToCollect ? true : lockButton() }
      onClick={ handleAnimalCareButton }>
      <ButtonIcon src={ getIcon() }></ButtonIcon>
      <ButtonText primary>{ getText() }</ButtonText>
    </Button>
  )
}


// EXPORT


export default AnimalCareButton;