import { Button } from './LargeButtonStyles';

interface Props {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}


const LargeButton: React.FC<Props> = ({ primary, secondary, tertiary, children }) => {
  return (
    <Button primary={ primary } secondary={ secondary } tertiary={ tertiary }>{ children }</Button>
  )
}

export default LargeButton;