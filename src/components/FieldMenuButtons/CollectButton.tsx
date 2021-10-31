// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';
import { CollectButtonProps } from '../interfaces';
import collect from '../../images/icons/capacity.png';


// COMPONENT


const CollectButton: React.FC<CollectButtonProps> = ({ handleWindow }) => {


  // JSX


  return (
    <Button
      isLarge={ true }
      onClick={ handleWindow }>
      <ButtonIcon src={ collect }></ButtonIcon>
      <ButtonText primary>Collect</ButtonText>
    </Button>
  )
}


// EXPORT


export default CollectButton;