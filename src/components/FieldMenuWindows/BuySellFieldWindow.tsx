// IMPORT


import { useState } from 'react';

import { WindowBigHeading, WindowBigImage, WindowBottomSection, WindowButton, WindowColumnContainer, WindowRowContainer, WindowSectionHorizontalSeparator, WindowSectionVerticalSeparator, WindowSmallHeading, WindowText, WindowTile, WindowTileHeading, WindowTileIcon, WindowTileText, WindowTopSection, WindowWrapper } from './WindowStyles';
import { BuySellFieldWindowPropsInterface } from '../interfaces';

import sell from '../../images/icons/sell.png';
import buy from '../../images/icons/buy.png';
import money from '../../images/icons/money.png';
import ground from '../../images/stats/ground.png';
import water from '../../images/parts/water.png';

import { useSelector, useDispatch } from 'react-redux';
import { setFieldName, setIsFieldBought } from '../../redux/actions/fieldActions';
import { StateInterface } from '../../redux/reduxStore';
import { FieldInterface } from '../../redux/reducers/fieldReducer';
import { UserInterface } from '../../redux/reducers/userReducer';
import ConfirmWindow from './ConfirmWindow';
import { setUserMoney } from '../../redux/actions/userActions';


// COMPONENT


const BuySellFieldWindow: React.FC<BuySellFieldWindowPropsInterface> = ({ fieldId, isBuyWindow, closeWindow }) => {
  

  // STATE

  
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const field: FieldInterface = state.fields[fieldId];
  const userData: UserInterface = state.userData;
  const [isConfirmWindowOpened, setIsConfirmWindowOpened] = useState(false);
  const setState = useDispatch();


  // HANDLERS


  const handlePrimaryButton = (): void => {
    setIsConfirmWindowOpened(true);
  }
  const buyField = (): void => {  
    setState(setUserMoney(userData.gameplay.userMoney -= field.fieldProps.fieldPrice));
    setState(setIsFieldBought(fieldId));
    setState(setFieldName(fieldId, "Empty"));
    closeWindow();
  }
  const sellField = (): void => {  
    setState(setUserMoney(userData.gameplay.userMoney += field.fieldProps.fieldPrice / 2));
    setState(setIsFieldBought(fieldId));
    setState(setFieldName(fieldId, `${field.fieldProps.fieldPrice} $`));
    closeWindow();
  }


  // TOOL FUNCTIONS

  
  const lockPrimaryButton = (): boolean => {
    if ((field.fieldProps.fieldPrice > userData.gameplay.userMoney) && isBuyWindow)
      return true;
    if (!field.fieldProps.isFieldBought && !isBuyWindow)
      return true;
    else
      return false;
  }
  

  // JSX


  return (
    <>
    { !isConfirmWindowOpened
      ? <WindowWrapper>
          <WindowTopSection>

            <WindowRowContainer section>
              <WindowBigImage src={ isBuyWindow ? buy : sell } />
              <WindowSectionVerticalSeparator />
              <WindowColumnContainer>
                <WindowText>{ isBuyWindow ? "Buy" : "Sell" }</WindowText>
                <WindowBigHeading>{`Field #${fieldId + 1}`}</WindowBigHeading>
                <WindowText>{`Value: ${field.fieldProps.fieldPrice} $`}</WindowText>
              </WindowColumnContainer>
            </WindowRowContainer>

            <WindowColumnContainer section>
              <WindowSmallHeading>Field's properties</WindowSmallHeading>
              <WindowRowContainer>

                <WindowTile title="Field's value" disabled={ (field.fieldProps.fieldPrice >= userData.gameplay.userMoney && isBuyWindow) ? true : false }>
                  <WindowTileIcon src={ money } />
                  <WindowTileText textColor="gold">{`${field.fieldProps.fieldPrice} $`}</WindowTileText>
                </WindowTile>
            
                <WindowTile title="Field's ground level">
                  <WindowTileIcon src={ ground } />
                  <WindowTileText textColor="ground">{`lvl ${field.fieldProps.groundRate}`}</WindowTileText>
                </WindowTile>

                <WindowTile title="Field's water level">
                  <WindowTileIcon src={ water } />
                  <WindowTileText textColor="blue">{`lvl ${field.fieldProps.waterRate}`}</WindowTileText>
                </WindowTile>

              </WindowRowContainer>
            </WindowColumnContainer>

            { !isBuyWindow && (
              <>
                <WindowSectionHorizontalSeparator />
                <WindowColumnContainer section>
                  <WindowSmallHeading>Money to claim</WindowSmallHeading>
                  <WindowRowContainer>
                    <WindowTile title="You'll get only 50% of field value">
                      <WindowTileIcon src={ money } />
                      <WindowTileText textColor="gold">{`${field.fieldProps.fieldPrice / 2} $`}</WindowTileText>
                    </WindowTile>
                  </WindowRowContainer>
                </WindowColumnContainer>
              </>
            )
            }   
          </WindowTopSection>

          <WindowBottomSection>
            <WindowButton onClick={ closeWindow } secondary>Cancel</WindowButton>
            <WindowButton onClick={ handlePrimaryButton } disabled={ lockPrimaryButton() } primary>{ isBuyWindow ? "Buy" : "Sell" }</WindowButton>
          </WindowBottomSection>

        </WindowWrapper>

      : <ConfirmWindow 
          confirmHeading={ isBuyWindow ? "Buy field" : "Sell field" }
          confirmText={`Are you sure you want to ${ isBuyWindow ? "buy field" : "sell field" } #${fieldId + 1}?`}
          confirmFunction={ isBuyWindow ? buyField : sellField } 
          closeWindow={ closeWindow }
        />
    }
    </>
  )
}


// EXPORT


export default BuySellFieldWindow;