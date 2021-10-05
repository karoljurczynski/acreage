// IMPORTS


import ReactDOM from 'react-dom';

import { Wrapper } from './BackgroundCloserStyles';
import { backgroundCloser } from '../../config/StylesConfig';
import { BackgroundCloserPropsInterface } from '../interfaces';


// COMPONENT


const BackgroundCloser: React.FC<BackgroundCloserPropsInterface> = ({ onClick }) => {


  // JSX


  return ReactDOM.createPortal (
    <Wrapper onClick={ onClick }></Wrapper>,
    backgroundCloser
  )
}


// EXPORT


export default BackgroundCloser;