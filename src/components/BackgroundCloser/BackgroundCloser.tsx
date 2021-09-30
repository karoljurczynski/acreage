import ReactDOM from 'react-dom';
import { Wrapper } from './BackgroundCloserStyles';
import { backgroundCloser } from '../../config/StylesConfig';

interface BackgroundCloserPropsInterface {
  onClick: () => void;
}

const BackgroundCloser: React.FC<BackgroundCloserPropsInterface> = ({ onClick }) => {
  return ReactDOM.createPortal (
    <Wrapper onClick={ onClick }></Wrapper>,
    backgroundCloser
  )
}

export default BackgroundCloser;