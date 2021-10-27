// IMPORT


import { useState } from 'react';
import { WindowBottomSection, WindowTopSection, WindowWrapper, WindowButton, WarningContainer, WarningImage, WarningTextWrapper, WarningTitle, WarningText, WarningTip } from './WindowStyles';
import { WarningWindowPropsInterface } from '../interfaces';

import danger from '../../images/icons/danger.png';

import {BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';


// COMPONENT


const WarningWindow: React.FC<WarningWindowPropsInterface> = ({ warningText, warningTip, closeWindow, shortcutButton }) => {


  // STATE


  const [redirectPath, setRedirectPath]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>("");


  // HANDLERS


  const handleShortcutButton = (): void => {
    if (shortcutButton)
      setRedirectPath(shortcutButton?.shortcutPath);
  }

  
  // JSX


  return (
    <Router>
    <Switch>

    <WindowWrapper>

      { redirectPath && <Redirect to={redirectPath} /> }

      <WindowTopSection>
        <WarningContainer>
          <WarningImage src={danger} />
          <WarningTextWrapper>
            <WarningTitle>Warning!</WarningTitle>
            <WarningText>{warningText}</WarningText>
            <WarningTip>{`Tip: ${warningTip}`}</WarningTip>
          </WarningTextWrapper>
        </WarningContainer>
      </WindowTopSection> 

      <WindowBottomSection>
        <WindowButton onClick={ closeWindow } secondary={shortcutButton ? true : false} primary={shortcutButton ? false : true}>Close</WindowButton>
        {shortcutButton && <WindowButton onClick={ handleShortcutButton } primary>{shortcutButton.shortcutTitle}</WindowButton>}
      </WindowBottomSection>

    </WindowWrapper>
    
    </Switch>
    </Router>
  )
}


// EXPORT


export default WarningWindow;