// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';
import { HarvestButtonProps } from '../interfaces';
import harvest from '../../images/icons/harvest.png';


// COMPONENT


const HarvestButton: React.FC<HarvestButtonProps> = ({ handleWindow }) => {


  // JSX


  return (
    <Button
      isLarge={ true }
      onClick={ handleWindow }>
      <ButtonIcon src={ harvest }></ButtonIcon>
      <ButtonText primary>Harvest</ButtonText>
    </Button>
  )
}


// EXPORT


export default HarvestButton;