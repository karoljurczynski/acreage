// IMPORT


import { ConfirmWindowPropsInterface } from '../interfaces';

import confirm from '../../images/icons/confirm.png';
import { WindowBottomSection, WindowTopSection, WindowWrapper, WindowButton, WarningContainer, WarningImage, WarningTextWrapper, WarningTitle, WarningText } from './WindowStyles';



// COMPONENT


const ConfirmWindow: React.FC<ConfirmWindowPropsInterface> = ({ confirmHeading, confirmText, closeWindow, confirmFunction }) => {


  // JSX


  return (      
    <WindowWrapper>

      <WindowTopSection>
        <WarningContainer>
          <WarningImage src={confirm} />
          <WarningTextWrapper>
            <WarningTitle confirm>{confirmHeading}</WarningTitle>
            <WarningText>{confirmText}</WarningText>
          </WarningTextWrapper>
        </WarningContainer>
      </WindowTopSection> 

      <WindowBottomSection>
        <WindowButton onClick={ closeWindow } secondary>Cancel</WindowButton>
        <WindowButton onClick={ confirmFunction } primary>{confirmHeading}</WindowButton>
      </WindowBottomSection>

    </WindowWrapper>
  )
}


// EXPORT


export default ConfirmWindow;