import { Button } from './LargeButtonStyles';

interface Props {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
  onClick: () => void;
}


const LargeButton: React.FC<Props> = ({ primary, secondary, tertiary, onClick, disabled, children }) => {
  return (
    <Button onClick={ onClick } primary={ primary } secondary={ secondary } tertiary={ tertiary } disabled={ disabled }>{ children }</Button>
  )
}

export default LargeButton;