// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';
import { PlantButtonProps } from '../interfaces';
import upgrade from '../../images/icons/upgrade.png';


// COMPONENT


const PlantButton: React.FC<PlantButtonProps> = ({ handleWindow }) => {


  // JSX


  return (
    <Button
      isLarge={ false }
      onClick={ handleWindow }>
      <ButtonIcon src={ upgrade }></ButtonIcon>
      <ButtonText primary>Upgrade</ButtonText>
    </Button>
  )
}


// EXPORT


export default PlantButton;