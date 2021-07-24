import ReactDOM from 'react-dom';
import { Wrapper } from './BackgroundCloserStyles';
import { portal } from '../../config/StylesConfig';

interface BackgroundCloserProps {
  onClick: () => void;
}

const BackgroundCloser: React.FC<BackgroundCloserProps> = ({ onClick }) => {
  return ReactDOM.createPortal (
    <Wrapper onClick={ onClick }></Wrapper>
    , portal
  )
}

export default BackgroundCloser;