// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';
import { DestroyButtonProps } from '../interfaces';
import destroy from '../../images/icons/destroy.png';


// COMPONENT


const DestroyButton: React.FC<DestroyButtonProps> = ({ handleWindow }) => {


  // JSX


  return (
    <Button
      isLarge={ false }
      onClick={ handleWindow }>
      <ButtonIcon src={ destroy }></ButtonIcon>
      <ButtonText>Destroy</ButtonText>
    </Button>
  )
}


// EXPORT


export default DestroyButton;