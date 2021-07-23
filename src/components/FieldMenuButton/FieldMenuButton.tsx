import { Button, ButtonHeading, ButtonTextContent, ButtonIcon } from './FieldMenuButtonStyles';
import logo from '../../images/logo.png';

interface FieldMenuButtonProps {
  size: "half" | "full";
  buttonFor?: "Time" | "Barn";
  textContent: string;
  margin?: string;
  primary?: boolean;
  failed?: boolean;
  watered?: boolean;
  fertilized?: boolean;
}

const FieldMenuButton: React.FC<FieldMenuButtonProps> = ({ size, buttonFor, textContent, margin, primary, failed, watered, fertilized }) => {
  const getButtonHeading = (): string => {
    if (buttonFor === "Time")
      return "To harvest";
    if (buttonFor === "Barn")
      return "Maximum capacity";
    else
      return "";
  }
  
  return (
    <Button
      size={ size }
      buttonFor={ buttonFor }
      margin={ margin }>
      { buttonFor && <ButtonHeading>{ getButtonHeading() }</ButtonHeading> }
      { !buttonFor && <ButtonIcon src={ logo }></ButtonIcon> }
      <ButtonTextContent primary={ primary } failed={ failed } watered={ watered } fertilized={ fertilized } size={ size } buttonFor={ buttonFor }>{ textContent }</ButtonTextContent>
    </Button>
  )
}

export default FieldMenuButton;