// IMPORT


import { Wrapper, TopSection, BottomSection, WarningContainer, WarningImage, WarningTextWrapper, WarningTitle, WarningText, WarningTip, WindowButton } from '../FieldMenu/FieldMenuStyles';
import { WarningWindowPropsInterface } from '../interfaces';

import danger from '../../images/icons/danger.png';


// COMPONENT


const WarningWindow: React.FC<WarningWindowPropsInterface> = ({ fieldId, warningText, warningTip, closeWindow, shortcutButton }) => {


  // HANDLERS


  const handleShortcutButton = () => {
    console.log(shortcutButton?.shortcutDestination);
  }

  
  // JSX


  return (
    <Wrapper warning>

    <TopSection alignItems="flex-start">
      <WarningContainer>
        <WarningImage src={danger} />
        <WarningTextWrapper>
          <WarningTitle>Warning!</WarningTitle>
          <WarningText>{warningText}</WarningText>
          <WarningTip>{`Tip: ${warningTip}`}</WarningTip>
        </WarningTextWrapper>
      </WarningContainer>
    </TopSection> 

    <BottomSection warning>
      <WindowButton onClick={ closeWindow } secondary={shortcutButton ? true : false} primary={shortcutButton ? false : true}>Close</WindowButton>
      {shortcutButton && <WindowButton onClick={ handleShortcutButton } primary>{shortcutButton.shortcutTitle}</WindowButton>}
    </BottomSection>

  </Wrapper>
  )
}


// EXPORT


export default WarningWindow;