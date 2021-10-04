// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';
import { BuildButtonProps } from '../interfaces';
import build from '../../images/icons/build.png';


// COMPONENT


const BuildButton: React.FC<BuildButtonProps> = ({ handleWindow }) => {


  // JSX


  return (
    <Button
      isLarge={ false }
      onClick={ handleWindow }>
      <ButtonIcon src={ build }></ButtonIcon>
      <ButtonText primary>Build</ButtonText>
    </Button>
  )
}


// EXPORT


export default BuildButton;