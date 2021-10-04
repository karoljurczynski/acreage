// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';
import { PlantButtonProps } from '../interfaces';
import plant from '../../images/icons/plant.png';


// COMPONENT


const PlantButton: React.FC<PlantButtonProps> = ({ handleWindow }) => {


  // JSX


  return (
    <Button
      isLarge={ false }
      onClick={ handleWindow }>
      <ButtonIcon src={ plant }></ButtonIcon>
      <ButtonText primary>Plant</ButtonText>
    </Button>
  )
}


// EXPORT


export default PlantButton;