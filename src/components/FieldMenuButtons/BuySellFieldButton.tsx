// IMPORTS


import { Button, ButtonIcon, ButtonText } from './_FieldMenuButtonStyles';
import { BuySellFieldButtonProps } from '../interfaces';
import buy from '../../images/icons/buy.png';
import sell from '../../images/icons/sell.png';

import { useSelector, useDispatch } from 'react-redux';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { StateInterface } from '../../redux/reduxStore';
import { UserInterface } from '../../redux/reducers/userReducer';
import { setIsFieldBought } from '../../redux/actions/fieldActions';
import { setUserMoney } from '../../redux/actions/userActions';


// COMPONENT


const BuySellFieldButton: React.FC<BuySellFieldButtonProps> = ({ fieldId }) => {


  // STATE


  const field: FieldInterface = useSelector((state: StateInterface): FieldInterface => state.fields[fieldId]);
  const userData: UserInterface = useSelector((state: StateInterface): UserInterface => state.userData);
  const setState = useDispatch();

  
  // HANDLERS


  const handleBuyField = () => {
    if (userData.gameplay.userMoney >= field.fieldProps.fieldPrice) {
      setState(setIsFieldBought(fieldId));
      setState(setUserMoney(userData.gameplay.userMoney -= field.fieldProps.fieldPrice));
    }
    else
      window.alert("Not enough money!");
  }
  const handleSellField = () => {
    setState(setIsFieldBought(fieldId));
    setState(setUserMoney(userData.gameplay.userMoney += (field.fieldProps.fieldPrice / 2)));
  }


  // JSX


  return (
    <Button
      isLarge={ true }
      onClick={ field.fieldProps.isFieldBought ? handleSellField : handleBuyField }>
      <ButtonIcon src={ field.fieldProps.isFieldBought ? sell : buy }></ButtonIcon>
      <ButtonText 
        primary={ field.fieldProps.isFieldBought ? false : true }>
        { field.fieldProps.isFieldBought ? "Sell this field" : "Buy this field" }
      </ButtonText>
    </Button>
  )
}


// EXPORT


export default BuySellFieldButton;