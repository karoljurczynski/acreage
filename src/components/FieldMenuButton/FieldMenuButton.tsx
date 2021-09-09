import { Button, ButtonHeading, ButtonTextContent, ButtonIcon } from './FieldMenuButtonStyles';
import { store } from '../../redux/reduxStore';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reduxStore';
import { _Field } from '../../redux/reducers/fieldReducer';
import { User } from '../../redux/reducers/userReducer';
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
  updateFieldProps: (fields: _Field[]) => void;
  updateUserProps: () => void;
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

const FieldMenuButton: React.FC<FieldMenuButtonProps> = ({fieldId, handleBuildWindow, handlePlantWindow, updateFieldProps, updateUserProps, size, buttonFor, textContent, primary, failed, watered, fertilized }) => {
  const state = useSelector(state => state) as State;
  const fields: _Field[] = state.fields;
  const userData: User = state.userData;
  const dispatch = useDispatch();

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
    if (state.fields[fieldId].field.cropProps.isWatered && state.fields[fieldId].field.cropProps.isFertilized) {
      dispatch(setIsCropReadyToHarvest(fieldId));
    }
    updateFieldProps(fields);
  }
  const handleFertilizeButton = () => {
    dispatch(setIsCropFertilized(fieldId));
    if (state.fields[fieldId].field.cropProps.isWatered && state.fields[fieldId].field.cropProps.isFertilized) {
      dispatch(setIsCropReadyToHarvest(fieldId));
    }
    updateFieldProps(fields);
  }
  const handleHarvestButton = () => {
    dispatch(setCropType(fieldId, ""));
    dispatch(setIsCropReadyToHarvest(fieldId));
    dispatch(setIsCropWatered(fieldId));
    dispatch(setIsCropFertilized(fieldId));
    updateFieldProps(fields);
  }
  const handleBuildButton = () => {
    handleBuildWindow();
  }
  const handleUpgradeButton = () => {
    console.log(store.getState());
    updateFieldProps(fields);
  }
  const handleDestroyButton = () => {
    dispatch(setBuildingType(fieldId, ""));
    updateFieldProps(fields);
  }
  const handleBuyOrSellFieldButton = () => {
    if (!fields[fieldId].field.fieldProps.isFieldBought) {
      if (userData.gameplay.userMoney >= fields[fieldId].field.fieldProps.fieldPrice) {
        setUserMoney(userData.gameplay.userMoney -= fields[fieldId].field.fieldProps.fieldPrice);
        dispatch(setIsFieldBought(fieldId));
      }
      else {
        window.alert("Not enough money to buy this field!");
      }
    }
    else {
      window.alert("Selling field retrieves only 50% of field value!");
      setUserMoney(userData.gameplay.userMoney += (Math.floor(fields[fieldId].field.fieldProps.fieldPrice / 2)));
      dispatch(setIsFieldBought(fieldId));
    }
    updateUserProps();
    updateFieldProps(fields);
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