import { Button, ButtonHeading, ButtonTextContent, ButtonIcon } from './FieldMenuButtonStyles';
import logo from '../../images/logo.png';
import { store } from '../../redux/reduxStore';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reduxStore';
import { setIsFieldBought, setCropType, setIsCropWatered, setIsCropFertilized, setBuildingType, setIsCropReadyToHarvest } from '../../redux/actions/fieldActions';

interface FieldMenuButtonProps {
  fieldId: number;
  size: "half" | "full";
  buttonFor?: "Time" | "Barn";
  textContent: string;
  primary?: boolean;
  failed?: boolean;
  watered?: boolean;
  fertilized?: boolean;
}

const FieldMenuButton: React.FC<FieldMenuButtonProps> = ({fieldId, size, buttonFor, textContent, primary, failed, watered, fertilized }) => {
  const state = useSelector(state => state) as State;
  const dispatch = useDispatch();

  const getButtonHeading = (): string => {
    if (buttonFor === "Time")
      return "To harvest";
    if (buttonFor === "Barn")
      return "Maximum capacity";
    else
      return "";
  }


  const handlePlantButton = () => {
    dispatch(setBuildingType(fieldId, ""));
    dispatch(setCropType(fieldId, "Wheat"));
  }
  const handleWaterButton = () => {
    dispatch(setIsCropWatered(fieldId));
    if (state.fields[fieldId].field.cropProps.isWatered && state.fields[fieldId].field.cropProps.isFertilized) {
      dispatch(setIsCropReadyToHarvest(fieldId));
    }
  }
  const handleFertilizeButton = () => {
    dispatch(setIsCropFertilized(fieldId));
    if (state.fields[fieldId].field.cropProps.isWatered && state.fields[fieldId].field.cropProps.isFertilized) {
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
    dispatch(setCropType(fieldId, ""));
    dispatch(setBuildingType(fieldId, "Barn"));
  }
  const handleUpgradeButton = () => {
    console.log(store.getState());
  }
  const handleDestroyButton = () => {
    dispatch(setBuildingType(fieldId, ""));
  }
  const handleBuyOrSellFieldButton = () => {
    dispatch(setIsFieldBought(fieldId));
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
      { !buttonFor && <ButtonIcon src={ logo }></ButtonIcon> }
      <ButtonTextContent primary={ primary } failed={ failed } watered={ watered } fertilized={ fertilized } size={ size } buttonFor={ buttonFor }>{ textContent }</ButtonTextContent>
    </Button>
  )
}

export default FieldMenuButton;