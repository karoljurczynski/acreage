import { Icon } from './InfoIconStyles';
import { FaInfoCircle } from 'react-icons/fa'

interface InfoIconProps {
  onClickFunction?: () => void;
  color: string;
  pos: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ onClickFunction, color, pos }) => {
  return (
    <Icon onClick={ onClickFunction } color={ color } pos={ pos } ><FaInfoCircle /></Icon>
  )
}

export default InfoIcon;