// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';
import { UpgradeButtonProps } from '../interfaces';
import upgrade from '../../images/icons/upgrade.png';


// COMPONENT


const UpgradeButton: React.FC<UpgradeButtonProps> = ({ handleWindow }) => {


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


export default UpgradeButton;