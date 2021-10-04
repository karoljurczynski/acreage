import { Button, ButtonHeading, ButtonTextContent, ButtonIcon } from './FieldMenuButtonStyles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { UserInterface } from '../../redux/reducers/userReducer';
import { setIsFieldBought, setCropType, setIsCropWatered, setIsCropFertilized, setBuildingType, setIsCropReadyToHarvest } from '../../redux/actions/fieldActions';
import { setUserMoney } from '../../redux/actions/userActions';

import plant from '../../images/icons/plant.png';
import water from '../../images/parts/water.png';
import fertilizer from '../../images/parts/fertilizer.png';
import harvest from '../../images/icons/harvest.png';
import build from '../../images/icons/build.png';
import upgrade from '../../images/icons/upgrade.png';
import destroy from '../../images/icons/destroy.png';
import buyField from '../../images/icons/buy.png';
import sellField from '../../images/icons/sell.png';


interface FieldMenuButtonProps {
  fieldId: number;
  handlePlantWindow: () => void;
  handleBuildWindow: () => void;
  size: "half" | "full";
  buttonFor?: string;
  textContent: string;
  primary?: boolean;
  failed?: boolean;
  watered?: boolean;
  fertilized?: boolean;
}

const FieldMenuButton: React.FC<FieldMenuButtonProps> = ({fieldId, handleBuildWindow, handlePlantWindow, size, buttonFor, textContent, primary, failed, watered, fertilized }) => {
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const dispatch = useDispatch();
  const field: FieldInterface = state.fields[fieldId];
  const userData: UserInterface = state.userData;
  

  const getButtonHeading = (): string => {
    if (buttonFor === "Time")
      return "To harvest";
    if (buttonFor === "Barn")
      return "Maximum capacity";
    if (buttonFor === "GroundRate")
      return "Ground rate";
    if (buttonFor === "WaterRate")
      return "Water rate";
    if (buttonFor === "FieldPrice")
      return "Price";
    else
      return "";
  }

  const handlePlantButton = () => {
    handlePlantWindow();
  }
  const handleWaterButton = () => {
    dispatch(setIsCropWatered(fieldId));

    if (field.cropProps.isWatered && field.cropProps.isFertilized) {
      dispatch(setIsCropReadyToHarvest(fieldId));
    }

  }
  const handleFertilizeButton = () => {
    dispatch(setIsCropFertilized(fieldId));
    if (field.cropProps.isWatered && field.cropProps.isFertilized) {
      dispatch(setIsCropReadyToHarvest(fieldId));
    }
  }
  const handleHarvestButton = () => {
    dispatch(setCropType(fieldId, ""));
    dispatch(setIsCropReadyToHarvest(fieldId));
    dispatch(setIsCropWatered(fieldId));
    dispatch(setIsCropFertilized(fieldId));
  }
  const handleBuildButton = () => {
    handleBuildWindow();
  }
  const handleUpgradeButton = () => {
  }
  const handleDestroyButton = () => {
    dispatch(setBuildingType(fieldId, ""));
  }
  const handleBuyOrSellFieldButton = () => {
    if (!field.fieldProps.isFieldBought) {
      if (userData.gameplay.userMoney >= field.fieldProps.fieldPrice) {
        setUserMoney(userData.gameplay.userMoney -= field.fieldProps.fieldPrice);
        dispatch(setIsFieldBought(fieldId));
        console.log(userData.gameplay.userMoney);
        console.log(state.userData.gameplay.userMoney);
      }
      else {
        window.alert("Not enough money to buy this field!");
      }
    }
    else {
      window.alert("Selling field retrieves only 50% of field value!");
      setUserMoney(userData.gameplay.userMoney += (Math.floor(field.fieldProps.fieldPrice / 2)));
      dispatch(setIsFieldBought(fieldId));
    }
  }

  const getIcon = () => {
    switch(textContent) {
      case "Plant":           { return plant }
      case "Water":           { return water }
      case "Watered":         { return water }
      case "Fertilize":       { return fertilizer }
      case "Fertilized":      { return fertilizer }
      case "Harvest":         { return harvest }
      
      case "Build":           { return build }
      case "Upgrade":         { return upgrade }
      case "Destroy":         { return destroy }
      
      case "Buy this field":  { return buyField }
      case "Sell this field": { return sellField }
    }
  }


  const handleButtonOnClick = (): void => {
    switch(textContent) {
      case "Plant":           { handlePlantButton(); break }
      case "Water":           { handleWaterButton(); break }
      case "Fertilize":       { handleFertilizeButton(); break }
      case "Harvest":         { handleHarvestButton(); break }

      case "Build":           { handleBuildButton(); break }
      case "Upgrade":         { handleUpgradeButton(); break }
      case "Destroy":         { handleDestroyButton(); break }
      
      case "Buy this field":  { handleBuyOrSellFieldButton(); break }
      case "Sell this field": { handleBuyOrSellFieldButton(); break }
    }
  }
  
  return (
    <Button
      size={ size }
      buttonFor={ buttonFor }
      onClick={ handleButtonOnClick }>
      { buttonFor && <ButtonHeading>{ getButtonHeading() }</ButtonHeading> }
      { !buttonFor && <ButtonIcon src={ getIcon() }></ButtonIcon> }
      <ButtonTextContent primary={ primary } failed={ failed } watered={ watered } fertilized={ fertilized } size={ size } buttonFor={ buttonFor }>{ textContent }</ButtonTextContent>
    </Button>
  )
}

export default FieldMenuButton;