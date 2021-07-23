import { Button, ButtonHeading, ButtonTextContent, ButtonIcon } from './FieldMenuButtonStyles';
import logo from '../../images/logo.png';

interface FieldMenuButtonProps {
  size: "half" | "full";
  buttonFor?: "time" | "barn";
  textContent: string;
}

const FieldMenuButton: React.FC<FieldMenuButtonProps> = ({ size, buttonFor, textContent }) => {
  return (
    <Button
      size={ size }
      buttonFor={ buttonFor }>
      { buttonFor && <ButtonHeading>To harvest</ButtonHeading> }
      { !buttonFor && <ButtonIcon src={ logo }></ButtonIcon> }
      <ButtonTextContent size={ size } buttonFor={ buttonFor }>{ textContent }</ButtonTextContent>
    </Button>
  )
}

export default FieldMenuButton;