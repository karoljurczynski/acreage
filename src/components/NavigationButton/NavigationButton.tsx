import { Button } from './NavigationButtonStyles';

interface Props {
  active?: boolean;
}

const NavigationButton: React.FC<Props> = ({ active, children }) => {
  return (
    <Button active={ active }>{ children }</Button>
  )
}

export default NavigationButton;