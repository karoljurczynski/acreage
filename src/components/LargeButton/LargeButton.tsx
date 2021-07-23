import { Button } from './LargeButtonStyles';

interface Props {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  onClick: () => void;
}


const LargeButton: React.FC<Props> = ({ primary, secondary, tertiary, onClick, children }) => {
  return (
    <Button onClick={ onClick } primary={ primary } secondary={ secondary } tertiary={ tertiary }>{ children }</Button>
  )
}

export default LargeButton;