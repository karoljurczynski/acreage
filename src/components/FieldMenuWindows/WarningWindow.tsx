// IMPORT


import { useState } from 'react';
import { Wrapper, TopSection, BottomSection, WarningContainer, WarningImage, WarningTextWrapper, WarningTitle, WarningText, WarningTip, WindowButton } from '../FieldMenu/FieldMenuStyles';
import { WarningWindowPropsInterface } from '../interfaces';

import danger from '../../images/icons/danger.png';

import {BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';


// COMPONENT


const WarningWindow: React.FC<WarningWindowPropsInterface> = ({ warningText, warningTip, closeWindow, shortcutButton }) => {


  // STATE


  const [redirectPath, setRedirectPath]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>("");


  // HANDLERS


  const handleShortcutButton = () => {
    if (shortcutButton)
      setRedirectPath(shortcutButton?.shortcutPath);
  }

  
  // JSX


  return (
    <Router>
      <Switch>

      
    <Wrapper warning>

      { redirectPath && <Redirect to={redirectPath} /> }

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
    </Switch>
    </Router>
  )
}


// EXPORT


export default WarningWindow;