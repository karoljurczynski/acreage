// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';
import { BuySellFieldButtonProps } from '../interfaces';
import buy from '../../images/icons/buy.png';
import sell from '../../images/icons/sell.png';


// COMPONENT


const BuySellFieldButton: React.FC<BuySellFieldButtonProps> = ({ isBuyButton, handleWindow }) => {


  // JSX


  return (
    <Button
      isLarge={ true }
      onClick={ handleWindow }>
      <ButtonIcon src={ isBuyButton ? buy : sell }></ButtonIcon>
      <ButtonText primary={ isBuyButton ? true : false }>{ isBuyButton ? "Buy this field" : "Sell this field" }</ButtonText>
    </Button>
  )
}


// EXPORT


export default BuySellFieldButton;